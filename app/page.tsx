import Link from 'next/link';
import { Check, Zap, TrendingUp, Users, ArrowRight } from 'lucide-react';
import Nav from '@/components/Nav';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import DashboardSection from '@/components/DashboardSection';
import OrbitSection from '@/components/OrbitSection';
import PricingSection from '@/components/PricingSection';

/* ─── DATA ─────────────────────────────────────────────────────────────── */

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

const comparisonFeatures = [
  { feature: 'Instant Lead Response', starter: true, growth: true, pro: true },
  { feature: 'Missed Call Recovery', starter: true, growth: true, pro: true },
  { feature: 'Automated Follow-Up', starter: true, growth: true, pro: true },
  { feature: 'Review Generation', starter: true, growth: true, pro: true },
  { feature: 'Advanced Sequences', starter: false, growth: true, pro: true },
  { feature: 'Lead Reactivation', starter: false, growth: true, pro: true },
  { feature: 'Pipeline Tracking', starter: false, growth: true, pro: true },
  { feature: 'Full Channel Capture', starter: false, growth: false, pro: true },
  { feature: 'Advanced Automation', starter: false, growth: false, pro: true },
  { feature: 'Reputation Engine (Scale)', starter: false, growth: false, pro: true },
];

/* ─── PAGE ──────────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />

      {/* ── 1. HERO — Black bg ── */}
      <HeroSection />

      {/* ── 2. STATS — Red bg, animated counters ── */}
      <StatsSection />

      {/* ── 3. PRICING — Cyan bg ── */}
      <PricingSection />

      {/* ── 4. "NOT SURE" — Black bg ── */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Not sure which plan is right?
          </h2>
          <p className="text-white/70 text-xl mb-10">
            👉 We&apos;ll show you exactly how many leads you&apos;re currently losing and how to fix it.
          </p>
          <a
            href="https://calendly.com/30-ejasso/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent hover:bg-accent-dark text-white font-bold px-10 py-4 rounded-full text-lg transition-colors shadow-xl"
          >
            Get a Free Revenue Leak Audit
          </a>
        </div>
      </section>

      {/* ── 5. ANIMATED DASHBOARD — Light Gray bg ── */}
      <DashboardSection />

      {/* ── 6. ORBITING INDUSTRY ICONS — Black bg ── */}
      <OrbitSection />

      {/* ── 7. GUARANTEE — Light Gray bg ── */}
      <section className="py-20 px-4 bg-[#EEEEEE]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-brand-red flex items-center justify-center mx-auto mb-6">
            <Check size={36} className="text-white" strokeWidth={3} />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">
            30-Day Guarantee
          </h2>
          <p className="text-gray-600 text-xl leading-relaxed max-w-xl mx-auto">
            If you don&apos;t see more booked jobs in 30 days, we&apos;ll work with you until you do.
            No excuses. No runaround. Just results.
          </p>
        </div>
      </section>

      {/* ── 8. ROI FRAMING — Black bg ── */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              The Math Is Simple.
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              One extra booked job pays for the entire system. Every month.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
              <p className="text-brand-cyan text-sm font-bold uppercase tracking-widest mb-3">Starter Plan</p>
              <p className="text-5xl font-black text-white mb-3">1 Job</p>
              <p className="text-gray-400 text-sm mb-4">1 job × avg $500–$2,000</p>
              <p className="text-brand-red font-black text-lg">Covers your $497/mo</p>
              <p className="text-gray-500 text-xs mt-2">Everything else is pure profit</p>
            </div>
            <div className="bg-white/5 border border-brand-cyan/30 rounded-2xl p-8 text-center">
              <p className="text-brand-cyan text-sm font-bold uppercase tracking-widest mb-3">Growth Plan</p>
              <p className="text-5xl font-black text-white mb-3">2 Jobs</p>
              <p className="text-gray-400 text-sm mb-4">2 jobs × avg $500–$2,000</p>
              <p className="text-brand-red font-black text-lg">Covers your $997/mo</p>
              <p className="text-gray-500 text-xs mt-2">Automated — not manual</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
              <p className="text-brand-cyan text-sm font-bold uppercase tracking-widest mb-3">Your Reality</p>
              <p className="text-5xl font-black text-accent mb-3">$?</p>
              <p className="text-gray-400 text-sm mb-4">Leads you&apos;re losing right now</p>
              <p className="text-white font-black text-lg">Every missed call = lost revenue</p>
              <p className="text-gray-500 text-xs mt-2">We stop the bleed immediately</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. COMPARISON TABLE — Cyan bg ── */}
      <section className="py-24 px-4 bg-brand-cyan">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              What&apos;s Included?
            </h2>
            <p className="text-white/80 text-lg">See exactly what you get at each level.</p>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="grid grid-cols-4 bg-primary text-white text-sm font-bold uppercase tracking-wide">
              <div className="p-4 col-span-1">Feature</div>
              <div className="p-4 text-center">Starter<br /><span className="font-black text-accent text-base normal-case tracking-normal">$497</span></div>
              <div className="p-4 text-center bg-green-400/20">Growth<br /><span className="font-black text-accent text-base normal-case tracking-normal">$997</span></div>
              <div className="p-4 text-center bg-red-400/10">Pro<br /><span className="font-black text-accent text-base normal-case tracking-normal">$1,497</span></div>
            </div>
            {/* Rows */}
            {comparisonFeatures.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-4 border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
              >
                <div className="p-4 text-sm font-semibold text-gray-700">{row.feature}</div>
                <div className="p-4 text-center">
                  {row.starter ? <span className="text-green-500 font-black text-lg">✓</span> : <span className="text-gray-300 text-lg">—</span>}
                </div>
                <div className="p-4 text-center bg-green-50">
                  {row.growth ? <span className="text-green-500 font-black text-lg">✓</span> : <span className="text-gray-300 text-lg">—</span>}
                </div>
                <div className="p-4 text-center bg-red-50/50">
                  {row.pro ? <span className="text-green-500 font-black text-lg">✓</span> : <span className="text-gray-300 text-lg">—</span>}
                </div>
              </div>
            ))}
            {/* Footer CTA */}
            <div className="grid grid-cols-4 bg-gray-50 p-4 gap-3">
              <div className="text-sm font-bold text-gray-500 flex items-center">Get Started</div>
              <div className="text-center">
                <a href="https://calendly.com/30-ejasso/30min" target="_blank" rel="noopener noreferrer"
                  className="inline-block bg-accent hover:bg-accent-dark text-white text-xs font-bold px-4 py-2 rounded-full transition-colors">
                  Choose Starter
                </a>
              </div>
              <div className="text-center bg-green-50 rounded-lg">
                <a href="https://calendly.com/30-ejasso/30min" target="_blank" rel="noopener noreferrer"
                  className="inline-block bg-primary hover:bg-primary-light text-white text-xs font-bold px-4 py-2 rounded-full transition-colors">
                  Choose Growth
                </a>
              </div>
              <div className="text-center">
                <a href="https://calendly.com/30-ejasso/30min" target="_blank" rel="noopener noreferrer"
                  className="inline-block bg-brand-red hover:opacity-90 text-white text-xs font-bold px-4 py-2 rounded-full transition-colors">
                  Choose Pro
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. FINAL CTA — Red bg ── */}
      <section className="bg-brand-red py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Ready to Grow?
          </h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Book a free 30-minute call. We&apos;ll map out exactly where you&apos;re
            losing revenue — and how to recover it fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/30-ejasso/30min"
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
              Meet our founder
            </Link>
          </div>
        </div>
      </section>

      {/* ── 11. CREDIBILITY — Cyan bg ── */}
      <section className="py-24 px-4 bg-brand-cyan">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
              Obsessed With Growth.
            </h2>
            <div className="space-y-5 text-white/80 leading-relaxed text-lg">
              <p>
                We&apos;ve always been obsessed with one thing — how businesses grow. Not in theory,
                but in reality. What actually makes the phone ring, deals close, and revenue increase.
              </p>
              <p>
                We&apos;ve spent years in the trenches — building teams, producing at a high level, and
                fixing broken systems across multiple industries. Along the way, we&apos;ve generated over
                $100M in production and built relationships with hundreds of partners nationwide.
              </p>
              <p className="font-bold text-white text-xl">But what stood out the most?</p>
              <div className="border-l-4 border-white/50 pl-6 space-y-2">
                <p className="font-black text-white">Missed opportunities.</p>
                <p className="font-black text-white">Slow follow-up.</p>
                <p className="font-black text-white">Leads going cold.</p>
              </div>
              <p className="text-white font-black text-xl">So we built Blacklyne to solve that.</p>
              <p>
                Today, we help businesses capture the revenue they&apos;re already generating but losing —
                by installing better systems, improving response time, and creating real accountability
                in the sales process.
              </p>
              <p className="text-2xl font-black text-white">Simple fixes. Massive impact.</p>
            </div>
          </div>

          <h3 className="text-3xl md:text-4xl font-black text-white mb-10">
            Built From Experience.
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {trustCards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="bg-white/15 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-5">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h4 className="text-xl font-black text-white mb-3">{card.title}</h4>
                  <p className="text-white/80 leading-relaxed text-sm">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 12. BUSINESS CAPITAL — Light Gray bg ── */}
      <section className="py-20 px-4 bg-[#EEEEEE]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
            <p className="text-brand-cyan text-sm font-bold uppercase tracking-widest mb-3">Direct Business Capital</p>
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-5 leading-tight">
              Need Capital<br />to Scale?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Skip the banks. Get $5K–$250K+ funded in 24–48 hours with no setup fees and
              no paperwork runaround.
            </p>
            <ul className="space-y-2 mb-8">
              {['$5K – $250K+ available', 'Approval in 24 hours', 'Cash in 48 hours', 'No hidden fees'].map((f) => (
                <li key={f} className="flex items-center gap-3 text-gray-600 text-sm">
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
              <div key={item.label} className="bg-white rounded-xl p-6 text-center border border-gray-200 min-w-[120px] shadow-sm">
                <p className="text-3xl font-black text-accent">{item.value}</p>
                <p className="text-sm text-gray-500 mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 13. TESTIMONIALS — Black bg ── */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">What Clients Say.</h2>
            <p className="text-gray-400 text-lg">Real results from real service businesses.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white/5 border border-white/10 rounded-xl p-8">
                <p className="text-brand-red text-4xl font-black leading-none mb-4">&ldquo;</p>
                <p className="text-gray-300 mb-6 leading-relaxed text-sm">{t.quote}</p>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-bold text-white text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{t.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER — Dark navy ── */}
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
                <li><Link href="/about" className="hover:text-white transition-colors">Meet our founder</Link></li>
                <li><Link href="/loans" className="hover:text-white transition-colors">Business Capital</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="tel:+16029803338" className="hover:text-white transition-colors">602.980.3338</a></li>
                <li><a href="mailto:eddie@blacklyne.io" className="hover:text-white transition-colors">eddie@blacklyne.io</a></li>
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
