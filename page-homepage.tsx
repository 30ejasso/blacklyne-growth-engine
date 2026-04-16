'use client';

import { useState } from 'react';
import { ArrowRight, Zap, Users, TrendingUp, DollarSign, CheckCircle, Star } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const stats = [
    { value: "45%", label: "Higher Close Rates" },
    { value: "3x", label: "Faster Response Time" },
    { value: "$150M+", label: "Founder's Loan Volume" },
    { value: "100+", label: "Clients (Arizona)" },
  ];

  const features = [
    {
      icon: Users,
      title: "Capture Every Lead",
      desc: "Unified inbox for calls, texts, chats, Google, Facebook — never miss a lead again.",
    },
    {
      icon: Zap,
      title: "AI Employee (24/7)",
      desc: "Responds in <60 seconds, qualifies leads, books appointments automatically.",
    },
    {
      icon: TrendingUp,
      title: "Drive Repeat Business",
      desc: "Automated reviews, follow-ups, and retention that keep customers coming back.",
    },
  ];

  const products = [
    {
      icon: Zap,
      title: "AI Lead Generation",
      desc: "Capture, convert, and automate your entire sales funnel.",
      features: ["Unified Inbox", "AI Employee", "Reputation Engine", "Revenue Automation"],
      link: "/solutions",
      cta: "See How It Works",
    },
    {
      icon: DollarSign,
      title: "Direct Business Capital",
      desc: "Get funded in 24-48 hours. Scale your business fast.",
      features: ["$5K-$250K+ loans", "24-48 hour funding", "Flexible terms", "Easy approval"],
      link: "/loans",
      cta: "Check Eligibility",
    },
  ];

  const industries = [
    { emoji: "🔧", name: "Plumbing", pain: "Lose 60% of emergency calls", solution: "AI answers 24/7" },
    { emoji: "✨", name: "Med Spas", pain: "Can't keep up with inquiries", solution: "Auto-fill your calendar" },
    { emoji: "🏠", name: "Mortgage", pain: "Speed wins — lose deals", solution: "Respond instantly" },
    { emoji: "🦷", name: "Dental", pain: "No-shows & manual scheduling", solution: "HIPAA-compliant automation" },
    { emoji: "🚗", name: "Auto Dealers", pain: "Web inquiries go unanswered", solution: "AI handles every lead" },
    { emoji: "🏢", name: "Real Estate", pain: "Leads go cold while you're busy", solution: "Instant + nurture" },
  ];

  const testimonials = [
    {
      name: "Reed Borton",
      title: "Owner, Premier Heating & Air",
      quote: "Cut our response time by 72%, from 5+ minutes to under 2 minutes.",
      industry: "HVAC",
      rating: 5,
    },
    {
      name: "Josh Stegman",
      title: "Owner, Ron Hodgson Chevrolet",
      quote: "The AI Employee books appointments and does almost all the work for us.",
      industry: "Auto",
      rating: 5,
    },
    {
      name: "Kyle Farr",
      title: "Owner, Kyle Farr Aesthetics",
      quote: "We filled our calendar without lifting a finger.",
      industry: "Med Spa",
      rating: 5,
    },
  ];

  const faqs = [
    { q: "How fast can I get set up?", a: "Most businesses are live within 48 hours. We handle all setup." },
    { q: "Do I need technical skills?", a: "No. Zero technical skills needed. We handle everything." },
    { q: "Can I use AI + Loans together?", a: "Yes! Use AI to generate leads, convert them, then offer financing." },
    { q: "What's the cost?", a: "AI starts at $497/mo. Loans vary by amount. No setup fees." },
    { q: "What if I want to try both?", a: "Book a demo and we'll build a custom plan for your business." },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ===== HERO ===== */}
      <section className="bg-gradient-to-b from-primary to-primary-light text-white pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent font-bold text-sm uppercase tracking-wider mb-4">
                AI Lead Generation + Direct Capital
              </p>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Stop Losing Revenue.<br />
                <span className="text-accent">Start Growing Business.</span>
              </h1>
              <p className="text-gray-300 text-lg mb-8 max-w-lg">
                Blacklyne combines AI-powered lead conversion with direct business capital. Capture every lead, convert faster, grow on autopilot.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contact">
                  <button className="bg-accent hover:bg-accent-dark text-primary font-bold px-8 py-4 rounded-full flex items-center justify-center gap-2 w-full sm:w-auto transition-all">
                    Get a Free Demo <ArrowRight size={18} />
                  </button>
                </Link>
                <Link href="/solutions">
                  <button className="border-2 border-accent text-accent hover:bg-accent/10 font-bold px-8 py-4 rounded-full w-full sm:w-auto transition-all">
                    See How It Works
                  </button>
                </Link>
              </div>

              {/* Founder Badge */}
              <div className="flex items-center gap-3 bg-primary-light p-4 rounded-lg border border-accent/20 inline-block">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-sm">
                  EJ
                </div>
                <div className="text-sm">
                  <p className="font-semibold text-white">Built by Eddie Jasso</p>
                  <p className="text-gray-400 text-xs">Top 1% producer, $150M+ funded</p>
                </div>
              </div>
            </div>

            {/* Dashboard Mockup */}
            <div className="hidden lg:block relative">
              <div className="bg-primary-light/50 border border-accent/20 rounded-xl p-6 backdrop-blur">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-400">Lead Pipeline</span>
                    <span className="text-xs text-accent font-bold">LIVE</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Leads", value: "1,247", change: "+23%" },
                      { label: "Response", value: "<45s", change: "-67%" },
                      { label: "Revenue", value: "$184K", change: "+31%" },
                    ].map((s) => (
                      <div key={s.label} className="bg-primary/50 rounded-lg p-3">
                        <p className="text-xs text-gray-500">{s.label}</p>
                        <p className="text-lg font-bold text-white mt-1">{s.value}</p>
                        <p className="text-xs text-green-400">{s.change}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SOCIAL PROOF ===== */}
      <section className="bg-primary text-white py-8 border-b border-accent/10">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-gray-400 text-sm mb-6">
            Trusted by 100+ local service businesses across Arizona
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {["Plumbing Co", "Med Spa Elite", "HVAC Pro", "Dental Care", "Auto Group", "Realty Plus"].map((logo) => (
              <div key={logo} className="px-4 py-2 border border-accent/20 rounded-lg text-gray-300 text-sm font-medium">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="bg-primary text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-accent mb-2">{s.value}</p>
                <p className="text-gray-400 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TWO PRODUCTS ===== */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Everything You Need to Grow
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              AI-powered lead conversion + direct business capital. The complete growth stack.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {products.map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={i} className="bg-white border-2 border-primary rounded-xl p-8 hover:border-accent transition-all hover:shadow-lg">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="text-accent" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">{p.title}</h3>
                  <p className="text-gray-600 mb-6">{p.desc}</p>
                  <ul className="space-y-3 mb-8">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle size={16} className="text-accent flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href={p.link}>
                    <button className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-6 py-3 rounded-full transition-all">
                      {p.cta} <ArrowRight size={16} className="inline ml-2" />
                    </button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">How Blacklyne Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="bg-primary-light rounded-xl p-8 border border-accent/10">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="text-accent" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                  <p className="text-gray-300">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-primary mb-16">Purpose-Built for Your Industry</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-accent transition-colors">
                <div className="text-4xl mb-4">{ind.emoji}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{ind.name}</h3>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-600">
                    <span className="font-bold text-gray-900">Problem:</span> {ind.pain}
                  </p>
                  <p className="text-accent font-semibold">
                    <span className="text-gray-900">Solution:</span> {ind.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Real Results from Real Businesses</h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Trusted by 100+ local service business owners who are crushing it with Blacklyne.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-primary-light rounded-xl p-8 border border-accent/10">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={16} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{t.quote}"</p>
                <div>
                  <p className="font-bold text-white">{t.name}</p>
                  <p className="text-sm text-gray-400">{t.title}</p>
                  <p className="text-xs text-accent font-bold mt-2">{t.industry}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-primary mb-12">Common Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left p-6 font-bold text-primary flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  {faq.q}
                  <span className="text-accent text-xl">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-gray-600 border-t border-gray-200">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="bg-accent text-primary py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Grow?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            See how Blacklyne can transform your lead generation and revenue growth.
          </p>
          <Link href="/contact">
            <button className="bg-primary hover:bg-primary-light text-white font-bold px-8 py-4 rounded-full text-lg transition-all">
              Book Free Demo <ArrowRight size={20} className="inline ml-2" />
            </button>
          </Link>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-primary text-gray-400 py-12 px-4 border-t border-accent/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-4">&copy; 2026 Blacklyne. All rights reserved.</p>
          <p className="text-sm">
            Built by Eddie Jasso | <Link href="/about" className="text-accent hover:underline">Learn Eddie's Story</Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
