'use client';

import { useEffect, useRef, useState } from 'react';

const STATS = [
  { display: null, prefix: '$', suffix: 'M+', target: 100, label: 'Revenue Generated' },
  { display: null, prefix: '', suffix: '+', target: 15, label: 'Years of Experience' },
  { display: '24-48hr', prefix: '', suffix: '', target: null, label: 'Capital Funding Time' },
  { display: null, prefix: '', suffix: '+', target: 300, label: 'Business Partnerships' },
];

function AnimatedNumber({ target, prefix, suffix, started }: { target: number; prefix: string; suffix: string; started: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    const DURATION = 2000;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / DURATION, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target]);
  return <span>{prefix}{count}{suffix}</span>;
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="bg-brand-red py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-4xl md:text-5xl font-black text-accent">
              {s.display !== null ? (
                <span>{s.display}</span>
              ) : (
                <AnimatedNumber
                  target={s.target!}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  started={started}
                />
              )}
            </p>
            <p className="text-sm font-semibold text-white/70 mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
