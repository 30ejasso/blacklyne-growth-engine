'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="bg-[#F8F7F5] pt-36 pb-24 px-4">
      <div className="max-w-5xl mx-auto text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 border border-brand-cyan/40 bg-brand-cyan/5 rounded-full px-5 py-2 mb-10"
        >
          <span className="w-2 h-2 bg-brand-cyan rounded-full inline-block" />
          <span className="text-brand-cyan text-sm font-bold tracking-wide">
            Eddie Jasso · AI-Powered Business Growth · Phoenix, AZ
          </span>
        </motion.div>

        {/* Cyan line draws in — top */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ duration: 0.8, delay: 0.35, ease: 'easeOut' }}
            style={{ height: 4, backgroundColor: '#05badd', borderRadius: 9999 }}
          />
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 16 }}
            transition={{ duration: 0.5, delay: 0.95, ease: 'easeOut' }}
            style={{ height: 4, backgroundColor: 'rgba(5,186,221,0.35)', borderRadius: 9999 }}
          />
        </div>

        {/* Main headline — slides from left, RED, 900 weight */}
        <motion.h1
          initial={{ opacity: 0, x: -64 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-brand-red leading-none tracking-tight mb-4 uppercase"
        >
          Stop Losing<br />Leads.
        </motion.h1>

        {/* Cyan line draws in — bottom, after headline visible */}
        <div className="flex items-center justify-center gap-3 mt-6 mb-8">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 16 }}
            transition={{ duration: 0.5, delay: 0.75, ease: 'easeOut' }}
            style={{ height: 4, backgroundColor: 'rgba(5,186,221,0.35)', borderRadius: 9999 }}
          />
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ duration: 0.8, delay: 0.75, ease: 'easeOut' }}
            style={{ height: 4, backgroundColor: '#05badd', borderRadius: 9999 }}
          />
        </div>

        {/* Secondary headline — slides from left 0.3s after main */}
        <motion.p
          initial={{ opacity: 0, x: -64 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary leading-tight mb-6"
        >
          Start Growing Revenue.
        </motion.p>

        {/* Subheading fades in at 0.9s */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-gray-500 text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Blacklyne gives local service businesses the AI-powered systems to capture every lead,
          convert faster, and grow on autopilot.
        </motion.p>

        {/* CTAs rise in */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
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
            className="border-2 border-primary/25 hover:border-primary text-primary font-bold px-9 py-4 rounded-full text-lg transition-colors"
          >
            Learn More
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
