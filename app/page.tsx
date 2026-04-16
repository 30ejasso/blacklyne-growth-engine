import Link from 'next/link';
import Nav from '@/components/Nav';

const industries = [
  { emoji: '🔧', name: 'Plumbing', desc: 'Capture emergency calls instantly. Never lose a hot lead again.' },
  { emoji: '❄️', name: 'HVAC', desc: 'Fill your schedule year-round. AI handles seasonal surge.' },
  { emoji: '💆', name: 'Med Spa', desc: 'Automate bookings and follow-ups. Grow repeat clients.' },
  { emoji: '🦷', name: 'Dental', desc: 'Reduce no-shows. Fill appointment slots automatically.' },
  { emoji: '🚗', name: 'Auto', desc: 'Convert service inquiries faster. Upsell with AI.' },
  { emoji: '🏠', name: 'Real Estate', desc: 'Nurture leads 24/7. Never miss a buyer or seller.' },
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

const aiFeatures = [
  'Unified Inbox — all leads in one place',
  'AI Employee — 24/7 instant responses',
  'Reputation Engine — more 5-star reviews',
  'Revenue Automation — no more manual follow-up',
];

const capitalFeatures = [
  '$5K - $250K+ in business capital',
  'Approval in 24 hours',
  'Cash in your account in 48 hours',
  'No setup fees. No hidden costs.',
];

const stats = [
  { value: '$150M+', label: 'Loans Funded' },
  { value: '15+', label: 'Years Experience' },
  { value: '24-48hr', label: 'Funding Time' },
  { value: '300+', label: 'Partnerships Built' },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />

      {/* HERO */}
      <section className="bg-primary text-white pt-36 pb-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-accent rounded-full inline-block"></span>
            <span className="text-accent text-sm font-semibold">
              Eddie Jasso | Top 1% Mortgage Producer | 15+ Yrs Experience
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            AI-Powered Growth<br />
            <span className="text-accent">for Service Businesses</span>
          </h1>
          <p className="text-gray-300 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Blacklyne combines AI lead generation with direct business capital to help plumbers,
            HVAC pros, and service businesses grow faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/loans"
              className="bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-full text-lg transition-colors"
            >
              Get Business Capital
            </Link>
            <a
              href="https://calendly.com/eddiejasso"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-full text-lg transition-colors"
            >
              Book a Free Call
            </a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-accent py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center text-primary">
              <p className="text-4xl font-bold">{stat.value}</p>
              <p className="text-sm font-semibold mt-1 opacity-80">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Two Ways to Grow</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Choose the solution that fits your business — or use both to dominate your market.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* AI Platform Card */}
            <div className="bg-primary text-white rounded-2xl p-8 flex flex-col">
              <div className="bg-accent/10 border border-accent/20 rounded-lg px-3 py-1.5 text-accent text-xs font-bold uppercase tracking-wider w-fit mb-6">
                AI Lead Generation
              </div>
              <h3 className="text-3xl font-bold mb-4">Stop Losing Leads to Voicemail</h3>
              <p className="text-gray-300 mb-8">
                Your AI employee works 24/7 — responding instantly, booking appointments, and following up automatically.
              </p>
              <ul className="space-y-3 mb-10 flex-1">
                {aiFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-gray-200 text-sm">
                    <span className="text-accent mt-0.5 shrink-0">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="border-t border-white/10 pt-6 flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Starting at</p>
                  <p className="text-3xl font-bold text-accent">
                    $497<span className="text-lg text-gray-400">/mo</span>
                  </p>
                </div>
                <a
                  href="https://calendly.com/eddiejasso"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent hover:bg-accent-dark text-white font-bold px-6 py-3 rounded-full transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>

            {/* Capital Card */}
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 flex flex-col">
              <div className="bg-primary/5 border border-primary/10 rounded-lg px-3 py-1.5 text-primary text-xs font-bold uppercase tracking-wider w-fit mb-6">
                Direct Business Capital
              </div>
              <h3 className="text-3xl font-bold text-primary mb-4">Fund Your Growth in 48 Hours</h3>
              <p className="text-gray-600 mb-8">
                Skip the bank. Get the capital you need to hire, buy equipment, or expand — fast.
              </p>
              <ul className="space-y-3 mb-10 flex-1">
                {capitalFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-gray-700 text-sm">
                    <span className="text-accent mt-0.5 shrink-0">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="border-t border-gray-100 pt-6 flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Loans from</p>
                  <p className="text-3xl font-bold text-primary">
                    $5K<span className="text-lg text-gray-400"> – $250K+</span>
                  </p>
                </div>
                <Link
                  href="/loans"
                  className="bg-primary hover:bg-primary-light text-white font-bold px-6 py-3 rounded-full transition-colors"
                >
                  Check Eligibility
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-24 px-4 bg-primary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Built for Your Industry</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Blacklyne is designed for the businesses that keep communities running.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="bg-primary-light border border-accent/10 hover:border-accent rounded-xl p-6 transition-colors"
              >
                <p className="text-4xl mb-4">{industry.emoji}</p>
                <h3 className="text-xl font-bold text-white mb-2">{industry.name}</h3>
                <p className="text-gray-400 text-sm">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">What Clients Say</h2>
            <p className="text-gray-600 text-lg">Real results from real service businesses.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-gray-50 rounded-xl p-8 border border-gray-100">
                <p className="text-gray-300 text-4xl mb-4 leading-none">&ldquo;</p>
                <p className="text-gray-700 mb-6 leading-relaxed">{t.quote}</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-primary">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-accent py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Ready to Grow?</h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
            Book a free 30-minute strategy call with Eddie. We&apos;ll map out exactly where you&apos;re
            losing revenue and how to recover it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/eddiejasso"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-light text-white font-bold px-10 py-4 rounded-full text-lg transition-colors"
            >
              Book Free Strategy Call
            </a>
            <Link
              href="/about"
              className="border-2 border-white/30 hover:border-white text-white font-bold px-10 py-4 rounded-full text-lg transition-colors"
            >
              Learn About Eddie
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary-light border-t border-white/5 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <Link href="/" className="text-2xl font-bold text-accent">Blacklyne</Link>
              <p className="text-gray-400 mt-2 text-sm">AI-Powered Growth for Local Service Businesses</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors">About Eddie</Link></li>
                <li><Link href="/loans" className="hover:text-white transition-colors">Business Capital</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
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
          <div className="border-t border-white/5 pt-8 text-center text-sm text-gray-600">
            &copy; 2026 Blacklyne. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
