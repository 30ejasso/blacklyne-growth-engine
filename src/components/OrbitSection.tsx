'use client';

import { useEffect, useRef, useState } from 'react';

const INDUSTRIES = [
  { emoji: '🔧', name: 'Plumbing', desc: 'Capture emergency calls instantly. Never lose a hot lead again.', color: '#ff8007' },
  { emoji: '❄️', name: 'HVAC', desc: 'Fill your schedule year-round. AI handles the seasonal surge.', color: '#05badd' },
  { emoji: '💆', name: 'Med Spa', desc: 'Automate bookings and follow-ups. Grow repeat clients.', color: '#ffb404' },
  { emoji: '🦷', name: 'Dental', desc: 'Reduce no-shows. Fill appointment slots automatically.', color: '#ff3902' },
  { emoji: '🚗', name: 'Auto', desc: 'Convert service inquiries faster. Upsell with AI.', color: '#ff8007' },
  { emoji: '🏠', name: 'Real Estate', desc: 'Nurture leads 24/7. Never miss a buyer or seller.', color: '#05badd' },
];

const SPEED_DEG_PER_SEC = 18; // 20s per full revolution

export default function OrbitSection() {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pausedRef = useRef(false);
  const rotationRef = useRef(0);
  const rafRef = useRef<number>(0);
  const lastTimeRef = useRef<number | null>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [containerSize, setContainerSize] = useState(400);

  // Responsive container size
  useEffect(() => {
    const update = () => setContainerSize(Math.min(400, window.innerWidth - 48));
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // rAF orbit loop — direct DOM manipulation for smooth 60fps
  useEffect(() => {
    const RADIUS = containerSize * 0.37;

    const animate = (time: number) => {
      if (lastTimeRef.current !== null && !pausedRef.current) {
        const delta = (time - lastTimeRef.current) / 1000;
        rotationRef.current = (rotationRef.current + SPEED_DEG_PER_SEC * delta) % 360;
      }
      lastTimeRef.current = time;

      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        const startDeg = (i / INDUSTRIES.length) * 360;
        const rad = ((rotationRef.current + startDeg) % 360) * (Math.PI / 180);
        const x = Math.sin(rad) * RADIUS;
        const y = -Math.cos(rad) * RADIUS;
        // 3D parallax — front (bottom) = larger, back (top) = smaller
        const sinFront = Math.sin(rad);
        const scale = (0.78 + ((sinFront + 1) / 2) * 0.32).toFixed(3);
        const opacity = (0.65 + ((sinFront + 1) / 2) * 0.35).toFixed(3);
        const zIndex = Math.round((sinFront + 1) * 5);
        el.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%)) scale(${scale})`;
        el.style.opacity = opacity;
        el.style.zIndex = String(zIndex);
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [containerSize]);

  const handleEnter = (i: number) => {
    pausedRef.current = true;
    setHoveredIdx(i);
  };

  const handleLeave = () => {
    pausedRef.current = false;
    setHoveredIdx(null);
  };

  const orbitRadius = containerSize * 0.37;

  return (
    <section className="py-24 px-4 bg-[#F8F7F5]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">Built for Your Industry.</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Hover to explore. Blacklyne powers growth across every service vertical.
          </p>
        </div>

        {/* Orbit stage */}
        <div
          className="relative mx-auto select-none"
          style={{ width: containerSize, height: containerSize }}
        >
          {/* Dashed orbit ring */}
          <div
            className="absolute rounded-full border border-dashed border-gray-200"
            style={{
              width: orbitRadius * 2,
              height: orbitRadius * 2,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />

          {/* Center badge */}
          <div
            className="absolute rounded-full bg-primary flex items-center justify-center shadow-lg"
            style={{
              width: 86,
              height: 86,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 11,
            }}
          >
            <span className="text-white font-black text-xs text-center leading-tight px-2">
              Black<span className="text-accent">lyne</span>
            </span>
          </div>

          {/* Orbiting icons */}
          {INDUSTRIES.map((ind, i) => (
            <div
              key={ind.name}
              ref={(el) => { itemRefs.current[i] = el; }}
              className="absolute cursor-pointer"
              style={{ top: '50%', left: '50%' }}
              onMouseEnter={() => handleEnter(i)}
              onMouseLeave={handleLeave}
            >
              {/* Icon circle */}
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-md border-2 border-white/60"
                style={{ backgroundColor: ind.color }}
              >
                {ind.emoji}
              </div>

              {/* Hover tooltip */}
              {hoveredIdx === i && (
                <div
                  className="absolute bg-white rounded-xl p-4 shadow-2xl border border-gray-100 text-left pointer-events-none"
                  style={{
                    width: 176,
                    top: 'calc(100% + 8px)',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 50,
                  }}
                >
                  <p className="font-black text-primary text-sm">{ind.name}</p>
                  <p className="text-gray-500 text-xs mt-1 leading-relaxed">{ind.desc}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
