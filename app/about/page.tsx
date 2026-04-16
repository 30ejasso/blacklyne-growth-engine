import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Zap, TrendingUp, Users } from 'lucide-react';
import Nav from '@/components/Nav';

const trustCards = [
  {
    icon: Zap,
    title: 'Systems Expert',
    desc: 'Built and optimized revenue systems across multiple industries. Knows exactly where the leaks happen — and how to seal them fast.',
  },
  {
    icon: TrendingUp,
    title: 'Revenue Growth Specialist',
    desc: 'Generated over $100M in production across high-performance organizations. A proven track record of moving numbers that matter.',
  },
  {
    icon: Users,
    title: 'Local Business Builder',
    desc: 'Built partnerships with hundreds of businesses nationwide. Understands the real daily challenges local service businesses face.',
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F7F5]">
      <Nav />

      {/* HERO */}
      <section className="bg-[#F8F7F5] pt-36 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 border border-accent/30 bg-accent/5 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-accent rounded-full inline-block"></span>
            <span className="text-accent text-sm font-semibold">Meet the Founder</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight mb-6">
            Stop Losing Leads.<br />
            <span className="text-accent">Start Growing Revenue.</span>
          </h1>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto leading-relaxed">
            Blacklyne gives local service businesses the AI-powered systems to capture every lead,
            convert faster, and grow on autopilot.
          </p>
        </div>
      </section>

      {/* FOUNDER STORY */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">

          {/* Photo */}
          <div>
            <div className="rounded-2xl overflow-hidden border-4 border-accent shadow-xl">
              <Image
                src="/images/eddie-headshot.jpg"
                alt="Eddie Jasso — Founder of Blacklyne"
                width={600}
                height={750}
                className="w-full h-auto"
                priority
              />
            </div>
            <div className="mt-6 text-center">
              <p className="text-xl font-bold text-primary">Eddie Jasso</p>
              <p className="text-accent font-semibold">Founder &amp; CEO, Blacklyne</p>
            </div>
          </div>

          {/* Narrative */}
          <div className="space-y-5 text-gray-600 leading-relaxed text-lg">
            <p className="text-2xl font-bold text-primary leading-snug">
              &ldquo;I&apos;ve always been obsessed with one thing — how businesses grow.&rdquo;
            </p>
            <p>
              Not in theory, but in reality. What actually makes the phone ring, deals close,
              and revenue increase.
            </p>
            <p>
              I&apos;ve spent my career in the trenches — building teams, producing at a high level,
              and fixing broken systems across multiple industries. Along the way, I&apos;ve generated
              over $100M in production and built relationships with hundreds of partners nationwide.
            </p>
            <p className="font-semibold text-primary text-xl">But what stood out the most?</p>
            <p>The same problems kept showing up everywhere:</p>

            <div className="bg-[#F8F7F5] rounded-xl p-6 border-l-4 border-accent space-y-2">
              <p className="font-bold text-primary">Missed opportunities.</p>
              <p className="font-bold text-primary">Slow follow-up.</p>
              <p className="font-bold text-primary">Leads going cold.</p>
            </div>

            <p className="text-accent font-bold text-xl">So I built Blacklyne to solve that.</p>

            <p>
              Today, I help businesses capture the revenue they&apos;re already generating but
              losing — by installing better systems, improving response time, and creating real
              accountability in the sales process.
            </p>

            <p className="text-2xl font-bold text-primary">Simple fixes. Massive impact.</p>
          </div>
        </div>
      </section>

      {/* CONTACT CARD */}
      <section className="py-16 px-4 bg-[#F8F7F5]">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl border border-[#F0F0F0] shadow-sm overflow-hidden">
            <div className="px-8 pt-8 pb-2 text-center">
              <h3 className="text-lg font-bold text-primary">Reach Eddie Directly</h3>
            </div>
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#F0F0F0] p-4 gap-0">
              <a
                href="tel:+16029803338"
                className="flex flex-col items-center gap-1.5 p-5 rounded-xl hover:bg-[#F8F7F5] transition-colors group"
              >
                <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Phone</span>
                <span className="font-bold text-primary group-hover:text-accent transition-colors">602.980.3338</span>
              </a>
              <a
                href="mailto:30.ejasso@gmail.com"
                className="flex flex-col items-center gap-1.5 p-5 rounded-xl hover:bg-[#F8F7F5] transition-colors group"
              >
                <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Email</span>
                <span className="font-bold text-primary group-hover:text-accent transition-colors text-sm">30.ejasso@gmail.com</span>
              </a>
              <a
                href="https://linkedin.com/in/eddiejasso"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1.5 p-5 rounded-xl hover:bg-[#F8F7F5] transition-colors group"
              >
                <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">LinkedIn</span>
                <span className="font-bold text-accent group-hover:underline text-sm">linkedin.com/in/eddiejasso</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY BUSINESSES TRUST BLACKLYNE */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Why Businesses Trust Blacklyne
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Built by someone who&apos;s been in the trenches and knows what it takes to grow.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {trustCards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="bg-[#F8F7F5] rounded-xl p-8 border border-[#F0F0F0]">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                    <Icon className="text-accent" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{card.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-accent py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Fix Your Revenue Leaks?
          </h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Book a free 30-minute call with Eddie. We&apos;ll find where you&apos;re losing money
            and map out a plan to recover it.
          </p>
          <a
            href="https://calendly.com/eddiejasso"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-accent font-bold px-10 py-4 rounded-full text-lg transition-colors shadow-lg"
          >
            Book a Free Call with Eddie <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <Link href="/" className="text-2xl font-bold text-white">
                Black<span className="text-accent">lyne</span>
              </Link>
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
          <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-600">
            &copy; 2026 Blacklyne. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
