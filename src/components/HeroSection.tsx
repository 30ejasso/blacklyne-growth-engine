'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="bg-black pt-36 pb-24 px-4">
      <div className="max-w-5xl mx-auto text-center">

        {/* Cyan lines — 0s (immediate) */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ duration: 0.8, delay: 0, ease: 'easeOut' }}
            style={{ height: 4, backgroundColor: '#05badd', borderRadius: 9999 }}
          />
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 16 }}
            transition={{ duration: 0.5, delay: 0.55, ease: 'easeOut' }}
            style={{ height: 4, backgroundColor: 'rgba(5,186,221,0.35)', borderRadius: 9999 }}
          />
        </div>

        {/* Main headline — 0.1s, RED, font-black, massive */}
        <motion.h1
          initial={{ opacity: 0, x: -64 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-brand-red leading-none tracking-tight mb-4 uppercase"
        >
          Stop Losing<br />Leads.
        </motion.h1>

        {/* Bottom cyan lines */}
        <div className="flex items-center justify-center gap-3 mt-6 mb-8">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 16 }}
            transition={{ duration: 0.5, delay: 0.45, ease: 'easeOut' }}
            style={{ height: 4, backgroundColor: 'rgba(5,186,221,0.35)', borderRadius: 9999 }}
          />
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
            style={{ height: 4, backgroundColor: '#05badd', borderRadius: 9999 }}
          />
        </div>

        {/* Secondary headline — 3s delay, CYAN */}
        <motion.p
          initial={{ opacity: 0, x: -64 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-cyan leading-tight mb-6"
        >
          Start Growing Revenue.
        </motion.p>

        {/* Subheading — 3.9s */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.9 }}
          className="text-gray-300 text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Blacklyne gives local service businesses the AI-powered systems to capture every lead,
          convert faster, and grow on autopilot.
        </motion.p>

        {/* CTAs — 4.1s */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://calendly.com/eddiejasso"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent hover:bg-accent-dark text-white font-bold px-9 py-4 rounded-full text-lg transition-colors shadow-lg"
          >
            Book a Strategy Call
          </a>
          <Link
            href="/about"
            className="border-2 border-white/30 hover:border-white text-white font-bold px-9 py-4 rounded-full text-lg transition-colors"
          >
            Learn More
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
