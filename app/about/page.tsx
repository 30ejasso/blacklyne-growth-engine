'use client';

import { ArrowRight, Briefcase, TrendingUp, Award, Users } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  const credentials = [
    {
      icon: Award,
      title: "Top 1% Mortgage Producer",
      desc: "Ranked Top 25 nationally through Rocket Mortgage (2023). 15+ years of production excellence.",
    },
    {
      icon: TrendingUp,
      title: "$150M+ in Funded Loans",
      desc: "Built a 300+ realtor partnership network and successfully closed over $150M in loan volume.",
    },
    {
      icon: Users,
      title: "Team Builder & Leader",
      desc: "Scaled call centers to 3,500+ reps. Founded mortgage division from scratch. Trained top producers.",
    },
    {
      icon: Briefcase,
      title: "MBA in Cybersecurity",
      desc: "Grand Canyon University. BS in Business Administration from Texas A&M. Licensed in 13 states.",
    },
  ];

  const timeline = [
    {
      year: "2015",
      role: "Sales Manager",
      company: "SettlementOne",
      desc: "Personally closed 40+ accounts in under 5 months. Rebuilt pipeline momentum.",
    },
    {
      year: "2015-2021",
      role: "Sales Manager → Manager",
      company: "Achieve / Freedom Debt Relief",
      desc: "Promoted from producer. Scaled national call center to 3,500+ reps. Founded mortgage division.",
    },
    {
      year: "2021-2024",
      role: "Branch Manager",
      company: "Offerpad Home Loans",
      desc: "Built 300+ realtor network. Closed $60M+ in loans. Ranked Top 25 nationally.",
    },
    {
      year: "2024-2025",
      role: "Director of Sales",
      company: "HelloLend",
      desc: "Designed sales workflows for residential energy financing. Built nationwide referral partnerships.",
    },
    {
      year: "2025-Present",
      role: "Senior Loan Officer",
      company: "Veritas Funding",
      desc: "Originating FHA/VA refinance loans. Performance benchmark for team.",
    },
    {
      year: "2026-Present",
      role: "Founder & CEO",
      company: "Blacklyne",
      desc: "Built AI lead generation + direct lending platform for local service businesses.",
    },
  ];

  const testimonials = [
    {
      name: "Team Member",
      role: "Former Manager",
      quote: "Eddie's ability to build and motivate teams is exceptional. He trained some of the best producers in the industry.",
    },
    {
      name: "Business Partner",
      role: "Referral Network",
      quote: "Eddie doesn't just close loans — he builds genuine relationships. His referral network speaks volumes.",
    },
    {
      name: "Client",
      role: "Real Estate Agent",
      quote: "Working with Eddie is a no-brainer. Fast, professional, and always goes the extra mile.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ===== HERO ===== */}
      <section className="bg-gradient-to-b from-primary to-primary-light text-white pt-32 pb-20 px-4">
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

      {/* ===== FOUNDER STORY WITH HEADSHOT ===== */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Headshot */}
            <div className="order-2 md:order-1">
              <div className="relative rounded-xl overflow-hidden border-4 border-accent shadow-2xl">
                <Image
                  src="/images/eddie-headshot.jpg"
                  alt="Eddie Jasso - Founder of Blacklyne"
                  width={400}
                  height={500}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>

            {/* Story */}
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-primary mb-6">The Origin Story</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                For 15+ years, I built my career in mortgage lending. I learned how to capture leads, convert fast, and build systems that scale. I built a 300+ realtor partnership network and closed over $150M in loans.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                But here's what I noticed: Local service businesses—plumbers, HVAC, dental offices, med spas—they were doing the same work I was doing, manually. Losing leads. Slow responses. No automation. No capital access.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                I realized I could take everything I learned and build a complete solution for them: AI-powered lead generation, instant response systems, and direct access to capital.
              </p>
              <p className="text-gray-700 font-semibold text-accent text-lg">
                That's why I built Blacklyne.
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-primary-light text-white rounded-xl p-8 border border-accent/20 max-w-md">
            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-400 mb-2">Phone</p>
                <p className="text-xl font-bold text-white">602.980.3338</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-2">Email</p>
                <p className="text-xl font-bold text-white">30.ejasso@gmail.com</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-2">LinkedIn</p>
                <a
                  href="https://linkedin.com/in/eddiejasso"
                  target="_blank"
                  className="text-accent font-bold hover:underline"
                >
                  linkedin.com/in/eddiejasso
                </a>
              </div>
              <div className="pt-6 border-t border-accent/20">
                <p className="text-gray-400 text-sm mb-4">Based in Phoenix, Arizona</p>
                <p className="text-xs text-gray-500">NMLS #129001 | Licensed in 13 states</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== KEY CREDENTIALS ===== */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Why You Should Trust Blacklyne</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {credentials.map((c, i) => {
              const Icon = c.icon;
              return (
                <div key={i} className="bg-primary-light rounded-xl p-8 border border-accent/10">
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

      {/* ===== CAREER TIMELINE ===== */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-primary mb-16">Career Journey</h2>
          <div className="space-y-8">
            {timeline.map((t, i) => (
              <div key={i} className="flex gap-6 md:gap-12">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-accent text-primary font-bold flex items-center justify-center">
                    {i + 1}
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="w-1 h-24 bg-accent/30 mt-2"></div>
                  )}
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

      {/* ===== BY THE NUMBERS ===== */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">By the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-5xl font-bold text-accent mb-2">15+</p>
              <p className="text-gray-400">Years in Finance</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-accent mb-2">$150M+</p>
              <p className="text-gray-400">Loans Funded</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-accent mb-2">300+</p>
              <p className="text-gray-400">Partnerships Built</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-accent mb-2">Top 25</p>
              <p className="text-gray-400">National Ranking</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EDUCATION ===== */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary mb-12">Education & Licensing</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-primary mb-2">Master's Degree</h3>
              <p className="text-accent font-bold mb-2">MBA in Cybersecurity</p>
              <p className="text-gray-600">Grand Canyon University (GPA 3.81)</p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-primary mb-2">Bachelor's Degree</h3>
              <p className="text-accent font-bold mb-2">BS in Business Administration</p>
              <p className="text-gray-600">Texas A&M University (Major: Accounting | Minor: Finance & MIS)</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <p className="font-bold text-primary mb-2">Professional Licensing</p>
            <p className="text-gray-600">NMLS #129001 | Licensed in 13 states</p>
            <p className="text-sm text-gray-500 mt-3">Expert in FHA, VA, Conventional, and Non-QM lending</p>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">What Others Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-primary-light rounded-xl p-8 border border-accent/10">
                <p className="text-gray-300 mb-6 italic">"{t.quote}"</p>
                <div>
                  <p className="font-bold text-white">{t.name}</p>
                  <p className="text-sm text-accent">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VISION ===== */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">The Blacklyne Vision</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            I built Blacklyne to give local service businesses the same Fortune 500-level tools and capital access I built my career on. No more losing leads. No more manual work. No more capital gatekeepers.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Every plumber, HVAC tech, dentist, med spa owner, realtor, and auto dealer deserves to have AI working for them 24/7, responding to leads in seconds, and access to capital when they're ready to scale.
          </p>
          <p className="text-xl font-bold text-primary">
            That's why I'm building Blacklyne. And that's why I'd love to work with you.
          </p>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="bg-accent text-primary py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Grow Your Business?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Let's talk about how Blacklyne can transform your lead generation and capital access.
          </p>
          <Link href="/contact">
            <button className="bg-primary hover:bg-primary-light text-white font-bold px-8 py-4 rounded-full text-lg transition-all">
              Book a Call with Eddie <ArrowRight size={20} className="inline ml-2" />
            </button>
          </Link>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-primary text-gray-400 py-12 px-4 border-t border-accent/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-4">&copy; 2026 Blacklyne</p>
          <p className="text-sm">
            <Link href="/" className="text-accent hover:underline">Back to Home</Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
