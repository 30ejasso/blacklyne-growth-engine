"use client";

import { CapitalSection } from "@/components/CapitalSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="w-full border-b border-gray-200">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-black">Blacklyne</div>
          <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-700">
            Book a Call
          </a>
        </nav>
      </header>

      <section className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-black mb-6">
            Stop Losing Revenue
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover exactly where your business is losing money and how much you could recover.
          </p>
          <a href="#capital" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700">
            Get Your Assessment
          </a>
        </div>
      </section>

      <div id="capital">
        <CapitalSection />
      </div>

      <footer className="w-full bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="mb-4">&copy; 2026 Blacklyne. All rights reserved.</p>
          <a href="https://calendly.com/blacklyne" className="text-blue-400 hover:text-blue-300">
            Schedule a Discovery Call
          </a>
        </div>
      </footer>
    </div>
  );
}
