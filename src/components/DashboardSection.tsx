'use client';

import { useEffect, useRef, useState } from 'react';

const METRICS = [
  { label: 'Leads Captured', target: 1247, prefix: '', suffix: '', color: '#ff8007', badge: '+23%', badgeClass: 'text-green-400', icon: '📈' },
  { label: 'Avg Response Time', target: 45, prefix: '< ', suffix: 's', color: '#ff3902', badge: '-67% faster', badgeClass: 'text-orange-400', icon: '⚡' },
  { label: 'Revenue Generated', target: 184, prefix: '$', suffix: 'K', color: '#ff8007', badge: '+31%', badgeClass: 'text-green-400', icon: '💰' },
];

const PIPELINE = [
  { label: 'New Leads', pct: 85 },
  { label: 'Follow-ups Sent', pct: 72 },
  { label: 'Conversions', pct: 94 },
  { label: 'Deals Closed', pct: 60 },
];

function Counter({ target, prefix = '', suffix = '', started }: { target: number; prefix?: string; suffix?: string; started: boolean }) {
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
  return <span>{prefix}{count.toLocaleString()}{suffix}</span>;
}

export default function DashboardSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const [barWidths, setBarWidths] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          PIPELINE.forEach((_, i) => {
            setTimeout(() => {
              setBarWidths((prev) => {
                const next = [...prev];
                next[i] = PIPELINE[i].pct;
                return next;
              });
            }, i * 220);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-[#EEEEEE]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">
            See the Power of Captured Leads
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Real-time results from Blacklyne-powered businesses.
          </p>
        </div>

        <div className="bg-primary rounded-2xl p-8 md:p-10 shadow-2xl">
          {/* Fake browser chrome */}
          <div className="flex items-center gap-2 mb-8">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-brand-yellow" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-gray-500 text-xs font-mono ml-2">blacklyne-dashboard.live</span>
          </div>

          {/* Metrics */}
          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {METRICS.map((m) => (
              <div key={m.label} className="bg-primary-light rounded-xl p-6 border border-white/5">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-gray-400 text-xs uppercase tracking-widest font-semibold">{m.label}</span>
                  <span className="text-xl">{m.icon}</span>
                </div>
                <div className="text-4xl font-black mb-2" style={{ color: m.color }}>
                  <Counter target={m.target} prefix={m.prefix} suffix={m.suffix} started={started} />
                </div>
                <p className={`text-xs font-bold ${m.badgeClass}`}>{m.badge}</p>
              </div>
            ))}
          </div>

          {/* Progress bars */}
          <div className="space-y-4">
            <p className="text-gray-400 text-xs uppercase tracking-widest font-semibold mb-5">Pipeline Health</p>
            {PIPELINE.map((p, i) => (
              <div key={p.label}>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-gray-300 text-sm font-semibold">{p.label}</span>
                  <span className="text-accent text-sm font-black">{p.pct}%</span>
                </div>
                <div className="h-2.5 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${barWidths[i]}%`, transitionDelay: `${i * 0.15}s` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
