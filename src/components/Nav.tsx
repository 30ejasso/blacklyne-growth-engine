'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'Meet our founder' },
  { href: '/ai-live', label: 'AI Live' },
  { href: '/loans', label: 'Business Capital' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-3">
        <Link
          href="/"
          className="text-2xl font-black text-primary shrink-0"
          onClick={() => setOpen(false)}
        >
          Black<span className="text-accent">lyne</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-gray-500 hover:text-primary text-sm font-semibold transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:+16029803338"
            className="text-gray-500 hover:text-primary text-sm font-semibold transition-colors"
          >
            602.980.3338
          </a>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://calendly.com/30-ejasso/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent hover:bg-accent-dark text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors"
          >
            Book a Call
          </a>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-primary p-2 -mr-2"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-primary hover:text-accent font-semibold py-3 border-b border-gray-100"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:+16029803338"
              onClick={() => setOpen(false)}
              className="text-primary hover:text-accent font-semibold py-3"
            >
              602.980.3338
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
