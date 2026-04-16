'use client';

import { ArrowRight, Briefcase, TrendingUp, Award, Users } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Nav from '@/components/Nav';

export default function AboutPage() {
  const credentials = [
    {
      icon: Award,
      title: 'Top 1% Mortgage Producer',
      desc: 'Ranked Top 25 nationally through Rocket Mortgage (2023). 15+ years of production excellence.',
    },
    {
      icon: TrendingUp,
      title: '$150M+ in Funded Loans',
      desc: 'Built a 300+ realtor partnership network and successfully closed over $150M in loan volume.',
    },
    {
      icon: Users,
      title: 'Team Builder & Leader',
      desc: 'Scaled call centers to 3,500+ reps. Founded mortgage division from scratch. Trained top producers.',
    },
    {
      icon: Briefcase,
      title: 'MBA in Cybersecurity',
      desc: 'Grand Canyon University. BS in Business Administration from Texas A&M. Licensed in 13 states.',
    },
  ];

  const timeline = [
    { year: '2015', role: 'Sales Manager', company: 'SettlementOne', desc: 'Personally closed 40+ accounts in under 5 months.' },
    { year: '2015–2021', role: 'Sales Manager', company: 'Achieve', desc: 'Scaled national call center to 3,500+ reps.' },
    { year: '2021–2024', role: 'Branch Manager', company: 'Offerpad', desc: 'Built 300+ realtor network. Closed $60M+ in loans.' },
    { year: '2024–2025', role: 'Director of Sales', company: 'HelloLend', desc: 'Designed sales workflows for residential energy financing.' },
    { year: '2025–Present', role: 'Senior Loan Officer', company: 'Veritas Funding', desc: 'Originating FHA/VA refinance loans.' },
    { year: '2026–Present', role: 'Founder & CEO', company: 'Blacklyne', desc: 'Built AI lead generation + direct lending platform.' },
  ];

  const stats = [
    { value: '15+', label: 'Years in Finance' },
    { value: '$150M+', label: 'Loans Funded' },
    { value: '300+', label: 'Partnerships Built' },
    { value: 'Top 25', label: 'National Ranking' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Nav />

      {/* HERO */}
      <section className="bg-primary text-white pt-36 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Eddie Jasso,<br />
            <span className="text-accent">Founder of Blacklyne</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Top 1% mortgage producer. Built a $150M+ loan empire. Now helping local service businesses do the same.
          </p>
        </div>
      </section>

      {/* ORIGIN STORY */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <div className="relative rounded-xl overflow-hidden border-4 border-accent shadow-2xl">
                <Image
                  src="/images/eddie-headshot.jpg"
                  alt="Eddie Jasso — Founder of Blacklyne"
                  width={600}
                  height={750}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-primary mb-6">The Origin Story</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                For 15+ years, I built my career in mortgage lending. I learned how to capture leads,
                convert fast, and build systems that scale. I built a 300+ realtor partnership network
                and closed over $150M in loans.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                But here&apos;s what I noticed: Local service businesses were doing the same work manually.
                Losing leads. Slow responses. No automation.
              </p>
              <p className="text-gray-700 font-semibold text-accent text-lg mb-8">
                That&apos;s why I built Blacklyne.
              </p>

              <div className="bg-primary text-white rounded-xl p-8 border border-accent/20">
                <div className="space-y-5">
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Phone</p>
                    <a href="tel:+16029803338" className="text-xl font-bold text-white hover:text-accent transition-colors">
                      602.980.3338
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <a href="mailto:30.ejasso@gmail.com" className="text-xl font-bold text-white hover:text-accent transition-colors">
                      30.ejasso@gmail.com
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">LinkedIn</p>
                    <a
                      href="https://linkedin.com/in/eddiejasso"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent font-bold hover:underline"
                    >
                      linkedin.com/in/eddiejasso
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Why You Should Trust Blacklyne</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {credentials.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="bg-primary-light rounded-xl p-8 border border-accent/10">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="text-accent" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{c.title}</h3>
                  <p className="text-gray-300">{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-primary mb-16">Career Journey</h2>
          <div className="space-y-8">
            {timeline.map((t, i) => (
              <div key={t.year} className="flex gap-6 md:gap-12">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-accent text-white font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </div>
                  {i < timeline.length - 1 && <div className="w-1 h-24 bg-accent/30 mt-2"></div>}
                </div>
                <div className="pb-8 flex-1">
                  <p className="text-sm text-accent font-bold uppercase">{t.year}</p>
                  <h3 className="text-2xl font-bold text-primary">{t.role}</h3>
                  <p className="text-accent font-semibold">{t.company}</p>
                  <p className="text-gray-600 mt-2">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">By the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-5xl font-bold text-accent mb-2">{s.value}</p>
                <p className="text-gray-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Ready to Grow Your Business?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Let&apos;s talk about how Blacklyne can transform your lead generation and give you the capital to scale.
          </p>
          <a
            href="https://calendly.com/eddiejasso"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-bold px-8 py-4 rounded-full text-lg transition-colors"
          >
            Book a Call with Eddie <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary text-gray-400 py-12 px-4 border-t border-accent/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-4">&copy; 2026 Blacklyne</p>
          <Link href="/" className="text-accent hover:underline text-sm">
            Back to Home
          </Link>
        </div>
      </footer>
    </div>
  );
}
