import Link from 'next/link';
import { Check, Zap, TrendingUp, Users, ArrowRight } from 'lucide-react';
import Nav from '@/components/Nav';
import HeroSection from '@/components/HeroSection';
import DashboardSection from '@/components/DashboardSection';
import OrbitSection from '@/components/OrbitSection';

/* ─── DATA ─────────────────────────────────────────────────────────────── */

const stats = [
  { value: '$100M+', label: 'Revenue Generated' },
  { value: '15+', label: 'Years of Experience' },
  { value: '24-48hr', label: 'Capital Funding Time' },
  { value: '300+', label: 'Business Partnerships' },
];

const starterFeatures = [
  'Unified Inbox (SMS, web chat, Google, Facebook)',
  'AI Lead Response (up to 500 conversations/mo)',
  'Automated Review Requests',
  'Basic Dashboard & Reporting',
  'Email Support',
];

const growthFeatures = [
  'Everything in Starter',
  'AI Employee (unlimited conversations)',
  'Revenue Automation & Follow-Up Sequences',
  'Text Marketing (up to 2,500 contacts)',
  'Reputation Management Dashboard',
  'Dedicated Onboarding Specialist',
];

const scaleFeatures = [
  'Everything in Growth',
  'Multi-location support',
  'Custom AI training on your brand voice',
  'CRM & POS integrations',
  'Dedicated Account Manager',
  'White-glove setup',
];

const trustCards = [
  {
    icon: Zap,
    title: 'Systems Expert',
    desc: 'Built and optimized revenue systems across multiple industries. We know exactly where the leaks happen — and how to seal them fast.',
  },
  {
    icon: TrendingUp,
    title: 'Revenue Growth Specialist',
    desc: 'Generated over $100M in production across high-performance organizations. A proven track record of moving numbers that matter.',
  },
  {
    icon: Users,
    title: 'Local Business Builder',
    desc: 'Built partnerships with hundreds of businesses nationwide. We understand the real daily challenges local service businesses face.',
  },
];

const testimonials = [
  {
    quote: "We were losing 40% of inbound leads to voicemail. Blacklyne's AI employee responds instantly — even at 2am. Our close rate is up 35%.",
    name: 'Carlos M.',
    title: 'HVAC Owner, Phoenix AZ',
  },
  {
    quote: "Got $75K funded in under 48 hours. No banks, no runaround. Eddie knew exactly what we needed to scale.",
    name: 'Sarah T.',
    title: 'Med Spa Owner, Scottsdale AZ',
  },
  {
    quote: "The unified inbox alone saves my team 3 hours a day. We went from 4.2 to 4.9 stars in 90 days.",
    name: 'Mike R.',
    title: 'Plumbing Business, Dallas TX',
  },
];

/* ─── PAGE ──────────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F7F5]">
      <Nav />

      {/* ── 1. HERO (animated client component) ── */}
      <HeroSection />

      {/* Stats strip */}
      <div
        style={{ background: 'linear-gradient(135deg, #FFF5E6 0%, #FFE6CC 100%)' }}
        className="py-12 px-4 border-y border-orange-100"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl md:text-5xl font-black text-accent">{s.value}</p>
              <p className="text-sm font-semibold text-gray-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── 2. PRICING ── */}
      <section className="py-24 px-4 bg-[#F8F7F5]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">
              Simple Pricing. Serious Results.
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Pick a plan and start capturing leads you&apos;re currently losing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-start">

            {/* STARTER */}
            <div className="bg-white rounded-2xl border border-[#F0F0F0] p-8 flex flex-col">
              <div className="mb-6">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Starter</p>
                <div className="flex items-end gap-1">
                  <span className="text-5xl font-black text-brand-red">$497</span>
                  <span className="text-gray-400 mb-1.5 font-semibold">/mo</span>
                </div>
                <p className="text-sm text-gray-400 mt-2">Perfect for getting started.</p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {starterFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
                    <Check size={16} className="text-accent mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://calendly.com/eddiejasso"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center border-2 border-accent text-accent hover:bg-accent hover:text-white font-bold py-3 rounded-full transition-colors"
              >
                Start Free Trial
              </a>
            </div>

            {/* GROWTH — Featured */}
            <div className="bg-white rounded-2xl border-2 border-brand-cyan p-8 flex flex-col relative shadow-xl shadow-brand-cyan/10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-5 py-1.5 rounded-full whitespace-nowrap">
                Most Popular
              </div>
              <div className="mb-6">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-2">Growth</p>
                <div className="flex items-end gap-1">
                  <span className="text-5xl font-black text-brand-red">$997</span>
                  <span className="text-gray-400 mb-1.5 font-semibold">/mo</span>
                </div>
                <p className="text-sm text-gray-400 mt-2">For businesses ready to scale.</p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {growthFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-gray-700">
                    <Check size={16} className="text-accent mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://calendly.com/eddiejasso"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-accent hover:bg-accent-dark text-white font-bold py-3 rounded-full transition-colors"
              >
                Get Started
              </a>
            </div>

            {/* SCALE */}
            <div className="bg-primary rounded-2xl p-8 flex flex-col text-white">
              <div className="mb-6">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-2">Scale</p>
                <div className="flex items-end gap-1">
                  <span className="text-5xl font-black text-white">Custom</span>
                </div>
                <p className="text-sm text-gray-300 mt-2">Enterprise &amp; multi-location.</p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {scaleFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-gray-300">
                    <Check size={16} className="text-accent mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="mailto:30.ejasso@gmail.com"
                className="block w-full text-center border-2 border-brand-cyan text-brand-cyan hover:bg-brand-cyan hover:text-white font-bold py-3 rounded-full transition-colors"
              >
                Talk to Sales
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. ANIMATED DASHBOARD ── */}
      <DashboardSection />

      {/* ── 4. ORBITING INDUSTRY ICONS ── */}
      <OrbitSection />

      {/* ── 5. RED CTA ── */}
      <section className="bg-brand-red py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Ready to Grow?
          </h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Book a free 30-minute call with Eddie. We&apos;ll map out exactly where you&apos;re
            losing revenue — and how to recover it fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/eddiejasso"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent-dark text-white font-bold px-10 py-4 rounded-full text-lg transition-colors shadow-xl"
            >
              Book a Strategy Call
            </a>
            <Link
              href="/about"
              className="border-2 border-white/40 hover:border-white text-white font-bold px-10 py-4 rounded-full text-lg transition-colors"
            >
              Learn About Eddie
            </Link>
          </div>
        </div>
      </section>

      {/* ── 6. WHO WE ARE — CREDIBILITY ── */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-8">
              Obsessed With Growth.
            </h2>
            <div className="space-y-5 text-gray-500 leading-relaxed text-lg">
              <p>
                We&apos;ve always been obsessed with one thing — how businesses grow. Not in theory,
                but in reality. What actually makes the phone ring, deals close, and revenue increase.
              </p>
              <p>
                We&apos;ve spent years in the trenches — building teams, producing at a high level, and
                fixing broken systems across multiple industries. Along the way, we&apos;ve generated over
                $100M in production and built relationships with hundreds of partners nationwide.
              </p>
              <p className="font-bold text-primary text-xl">But what stood out the most?</p>
              <div className="border-l-4 border-brand-cyan pl-6 space-y-2">
                <p className="font-black text-primary">Missed opportunities.</p>
                <p className="font-black text-primary">Slow follow-up.</p>
                <p className="font-black text-primary">Leads going cold.</p>
              </div>
              <p className="text-accent font-black text-xl">So we built Blacklyne to solve that.</p>
              <p>
                Today, we help businesses capture the revenue they&apos;re already generating but losing —
                by installing better systems, improving response time, and creating real accountability
                in the sales process.
              </p>
              <p className="text-2xl font-black text-primary">Simple fixes. Massive impact.</p>
            </div>
          </div>

          <h3 className="text-3xl md:text-4xl font-black text-primary mb-10">
            Built From Experience.
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {trustCards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="bg-[#F8F7F5] rounded-xl p-8 border border-[#F0F0F0]">
                  <div className="w-12 h-12 rounded-xl bg-brand-yellow/20 flex items-center justify-center mb-5">
                    <Icon className="text-brand-yellow" size={24} />
                  </div>
                  <h4 className="text-xl font-black text-primary mb-3">{card.title}</h4>
                  <p className="text-gray-500 leading-relaxed text-sm">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 7. BUSINESS CAPITAL ── */}
      <section className="py-20 px-4 bg-primary">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
            <p className="text-brand-cyan text-sm font-bold uppercase tracking-widest mb-3">Direct Business Capital</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
              Need Capital<br />to Scale?
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Skip the banks. Get $5K–$250K+ funded in 24–48 hours with no setup fees and
              no paperwork runaround.
            </p>
            <ul className="space-y-2 mb-8">
              {['$5K – $250K+ available', 'Approval in 24 hours', 'Cash in 48 hours', 'No hidden fees'].map((f) => (
                <li key={f} className="flex items-center gap-3 text-gray-300 text-sm">
                  <Check size={16} className="text-accent shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/loans"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-8 py-3 rounded-full transition-colors"
            >
              Check Eligibility <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 shrink-0">
            {[
              { value: '$5K', label: 'Minimum' },
              { value: '$250K+', label: 'Maximum' },
              { value: '24hr', label: 'Approval' },
              { value: '48hr', label: 'Funded' },
            ].map((item) => (
              <div key={item.label} className="bg-primary-light rounded-xl p-6 text-center border border-brand-cyan/10 min-w-[120px]">
                <p className="text-3xl font-black text-accent">{item.value}</p>
                <p className="text-sm text-gray-400 mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. TESTIMONIALS ── */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">What Clients Say.</h2>
            <p className="text-gray-500 text-lg">Real results from real service businesses.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-[#F8F7F5] rounded-xl p-8 border border-[#F0F0F0]">
                <p className="text-brand-red text-4xl font-black leading-none mb-4">&ldquo;</p>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">{t.quote}</p>
                <div className="border-t border-[#F0F0F0] pt-4">
                  <p className="font-bold text-primary text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{t.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-primary py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <Link href="/" className="text-2xl font-black text-white">
                Black<span className="text-accent">lyne</span>
              </Link>
              <p className="text-gray-300 mt-2 text-sm">AI-Powered Growth for Local Service Businesses</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Company</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="/about" className="hover:text-white transition-colors">About Eddie</Link></li>
                <li><Link href="/loans" className="hover:text-white transition-colors">Business Capital</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="tel:+16029803338" className="hover:text-white transition-colors">602.980.3338</a></li>
                <li><a href="mailto:30.ejasso@gmail.com" className="hover:text-white transition-colors">30.ejasso@gmail.com</a></li>
                <li>
                  <a
                    href="https://linkedin.com/in/eddiejasso"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400">
            &copy; 2026 Blacklyne. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
