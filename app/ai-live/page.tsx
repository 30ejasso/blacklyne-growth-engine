import type { Metadata } from 'next';
import Image from 'next/image';
import {
  Briefcase,
  TrendingUp,
  Home,
  Landmark,
  GraduationCap,
  Heart,
  Sparkles,
  Check,
  Calendar,
  Clock,
  Users,
  MapPin,
  Laptop,
  UserCheck,
  MessageSquare,
  Zap,
  Clock3,
  MessageCircle,
  Trophy,
} from 'lucide-react';
import Nav from '@/components/Nav';

export const metadata: Metadata = {
  title: 'Blacklyne AI Live | Learn AI Before Everyone Else Does',
  description:
    'A live, hands-on AI workshop in Queen Creek, Arizona for beginners, professionals, business owners, students, and retirees.',
};

const businessOwnerCards = [
  {
    icon: Zap,
    title: 'Capture More Leads',
    desc: 'Use AI to respond faster and stop opportunities from slipping through the cracks.',
  },
  {
    icon: Clock3,
    title: 'Save Time',
    desc: 'Automate repetitive tasks and free up hours every week.',
  },
  {
    icon: MessageCircle,
    title: 'Improve Customer Communication',
    desc: 'Follow up consistently without adding staff.',
  },
  {
    icon: Trophy,
    title: 'Stay Competitive',
    desc: 'Learn the tools businesses are using right now to gain an advantage.',
  },
];

const aiLiveTestimonials = [
  {
    role: 'Business Owner',
    quote:
      'Eddie has a unique ability to simplify complex concepts and make them practical.',
  },
  {
    role: 'Sales Professional',
    quote: "One of the best trainers and leaders I've worked with.",
  },
  {
    role: 'Local Entrepreneur',
    quote: 'Immediately actionable strategies that create real results.',
  },
];

const RESERVE_URL =
  'https://calendly.com/30-ejasso/interested-in-blacklyne-ai-live';
const PHONE = '480-284-9070';
const PHONE_TEL = '+14802849070';
const SMS_HREF = `sms:${PHONE_TEL}`;

const audience = [
  { icon: Briefcase, label: 'Business Owners' },
  { icon: TrendingUp, label: 'Sales Professionals' },
  { icon: Home, label: 'Realtors' },
  { icon: Landmark, label: 'Mortgage Professionals' },
  { icon: GraduationCap, label: 'Students (14+)' },
  { icon: Heart, label: 'Retirees' },
  { icon: Sparkles, label: 'Anyone Curious About AI' },
];

const sessions = [
  {
    n: 1,
    title: 'AI Foundations & ChatGPT',
    items: [
      'Understanding AI',
      'ChatGPT setup',
      'Voice conversations',
      'Daily productivity',
    ],
  },
  {
    n: 2,
    title: 'AI Productivity & Automation',
    items: [
      'Writing',
      'Research',
      'Spreadsheets',
      'Presentations',
      'Workflow automation',
    ],
  },
  {
    n: 3,
    title: 'Advanced AI Applications',
    items: [
      'Images',
      'Video',
      'Business use cases',
      'AI assistants',
      'Real-world implementation',
    ],
  },
];

const classDetails = [
  { icon: Calendar, label: 'Two Saturday Sessions' },
  { icon: Clock, label: '8:00 AM – 11:00 AM' },
  { icon: Users, label: 'Live In-Person Training' },
  { icon: MapPin, label: 'Queen Creek, Arizona' },
  { icon: Laptop, label: 'Bring Your Own Laptop' },
  { icon: UserCheck, label: 'Small Class Size' },
];

const faqs = [
  { q: 'Do I need technical experience?', a: 'No.' },
  { q: 'Do I need ChatGPT?', a: 'We will help you set it up.' },
  { q: 'Do I need a laptop?', a: 'Yes.' },
  {
    q: 'Will the class be recorded?',
    a: 'No. This is a live in-person experience.',
  },
  { q: 'Can I ask questions?', a: 'Absolutely.' },
];

export default function AiLivePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F7F5] scroll-smooth">
      <Nav />

      {/* HERO */}
      <section className="bg-[#F8F7F5] pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 border border-brand-cyan/40 bg-brand-cyan/5 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-brand-cyan rounded-full inline-block" />
              <span className="text-brand-cyan text-sm font-bold">
                Live In-Person Workshop
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-primary leading-tight mb-4">
              Blacklyne <span className="text-accent">AI Live</span>
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-primary/80 mb-6">
              Learn AI Before Everyone Else Does
            </p>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Master ChatGPT, AI assistants, automation tools, content creation,
              and productivity systems in a live, hands-on workshop designed for
              everyday people and business owners.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={RESERVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-full text-lg transition-colors shadow-xl"
              >
                Reserve My Seat
              </a>
              <a
                href={SMS_HREF}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-8 py-4 rounded-full text-lg transition-colors inline-flex items-center justify-center gap-2"
              >
                <MessageSquare size={18} />
                Text Eddie · {PHONE}
              </a>
            </div>
            <div className="mt-6 inline-flex flex-col items-center gap-1 bg-brand-red/10 border-2 border-brand-red rounded-2xl px-6 py-3">
              <span className="text-brand-red text-xs font-black uppercase tracking-[0.2em]">
                Founder&apos;s Cohort
              </span>
              <span className="text-primary font-black text-lg">
                Only 15 Seats Available
              </span>
            </div>
          </div>

          <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-black aspect-video">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/R_CWYvPAW1Y"
              title="Blacklyne AI Live"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* WHY BUSINESS OWNERS ARE LEARNING AI */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">
              Why Business Owners Are Learning AI
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              AI is no longer optional. Learn practical ways to save time,
              improve customer communication, and capture more opportunities.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {businessOwnerCards.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-[#F8F7F5] border border-gray-200 rounded-2xl p-6 hover:border-accent hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <Icon className="text-accent" size={24} />
                </div>
                <h3 className="font-black text-primary text-lg mb-2">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-20 px-4 bg-[#F8F7F5]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">
              Who This Is For
            </h2>
            <p className="text-gray-500 text-lg">
              Built for real people — not engineers.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {audience.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="bg-[#F8F7F5] border border-gray-200 rounded-xl p-6 text-center hover:border-accent hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3">
                  <Icon className="text-accent" size={24} />
                </div>
                <p className="font-bold text-primary text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU'LL LEARN */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">
              What You&apos;ll Learn
            </h2>
            <p className="text-gray-500 text-lg">
              Two sessions. Practical from day one.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {sessions.map((s) => (
              <div
                key={s.n}
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-full bg-primary text-white font-black flex items-center justify-center text-xl">
                    {s.n}
                  </div>
                  <p className="text-brand-cyan text-xs font-bold uppercase tracking-widest">
                    Session {s.n}
                  </p>
                </div>
                <h3 className="text-2xl font-black text-primary mb-5">
                  {s.title}
                </h3>
                <ul className="space-y-3">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-gray-600"
                    >
                      <Check
                        size={18}
                        className="text-accent shrink-0 mt-0.5"
                      />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLASS DETAILS */}
      <section className="py-20 px-4 bg-primary">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Class Details
            </h2>
            <p className="text-white/70 text-lg">
              Everything you need to know.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {classDetails.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="bg-white/5 border border-white/10 rounded-xl p-6 flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-cyan/20 flex items-center justify-center shrink-0">
                  <Icon className="text-brand-cyan" size={20} />
                </div>
                <p className="text-white font-bold text-sm">{label}</p>
              </div>
            ))}
          </div>
          <p className="text-white/60 text-sm text-center mt-8">
            Exact address provided after registration.
          </p>
        </div>
      </section>

      {/* MEET YOUR INSTRUCTOR */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-brand-cyan text-sm font-bold uppercase tracking-widest mb-2">
              Meet Your Instructor
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-2">
              Eddie Jasso, MBA
            </h2>
            <p className="text-accent font-bold text-lg">
              Founder, Blacklyne AI Live
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10 items-center">
            <div className="md:col-span-1 flex justify-center">
              <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-xl ring-4 ring-accent/20">
                <Image
                  src="/images/eddie-headshot.jpg"
                  alt="Eddie Jasso, MBA — Founder, Blacklyne AI Live"
                  fill
                  sizes="(max-width: 768px) 224px, 256px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <ul className="space-y-3">
                {[
                  'MBA in Cybersecurity',
                  '20+ Years in Sales, Technology & Business Leadership',
                  'Founder of Blacklyne',
                  'AI Automation Consultant',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-gray-700 text-lg"
                  >
                    <Check
                      size={20}
                      className="text-accent shrink-0 mt-1"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-4 bg-[#F8F7F5]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">
              What People Say About Working With Eddie
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {aiLiveTestimonials.map((t) => (
              <div
                key={t.role}
                className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"
              >
                <p className="text-accent text-4xl font-black leading-none mb-3">
                  &ldquo;
                </p>
                <p className="text-gray-700 mb-5 leading-relaxed">{t.quote}</p>
                <p className="text-primary font-black text-sm uppercase tracking-wide">
                  {t.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 border border-brand-red/40 bg-brand-red/5 rounded-full px-4 py-2 mb-4">
              <span className="w-2 h-2 bg-brand-red rounded-full inline-block" />
              <span className="text-brand-red text-sm font-bold uppercase tracking-wide">
                Founder&apos;s Cohort Pricing
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-3">
              Limited Founding Member Pricing
            </h2>
            <p className="text-brand-red font-black text-lg">
              Only 15 seats available for this Founder&apos;s Cohort.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Single seat */}
            <div className="bg-white rounded-2xl p-8 border-2 border-accent shadow-xl relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-black uppercase tracking-widest px-4 py-1 rounded-full">
                Founder&apos;s Launch
              </div>
              <p className="text-brand-cyan text-xs font-bold uppercase tracking-widest mb-2 mt-2">
                Single Seat
              </p>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-6xl font-black text-primary">$297</span>
                <span className="text-2xl font-bold text-gray-400 line-through">
                  $599
                </span>
              </div>
              <p className="text-gray-500 text-sm mb-6">
                Limited founding member pricing.
              </p>
              <a
                href={RESERVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-accent hover:bg-accent-dark text-white font-bold px-6 py-4 rounded-full transition-colors"
              >
                Reserve My Seat
              </a>
            </div>

            {/* Couples */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <p className="text-brand-cyan text-xs font-bold uppercase tracking-widest mb-2 mt-2">
                Two Seats
              </p>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-6xl font-black text-primary">$494</span>
              </div>
              <p className="text-gray-500 text-sm mb-6">
                Save when attending together.
              </p>
              <a
                href={RESERVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-primary hover:bg-primary-light text-white font-bold px-6 py-4 rounded-full transition-colors"
              >
                Reserve Two Seats
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-[#F8F7F5]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">
              Frequently Asked
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group bg-white border border-gray-200 rounded-xl p-5 hover:border-accent transition-colors"
              >
                <summary className="flex justify-between items-center cursor-pointer font-bold text-primary text-lg list-none">
                  {f.q}
                  <span className="text-accent text-2xl font-black group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="text-gray-600 mt-3">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-4 bg-brand-red">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Reserve Your Seat Before This Cohort Fills
          </h2>
          <p className="text-white/90 text-xl mb-10 font-bold">
            Only 15 seats available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={RESERVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent-dark text-white font-bold px-10 py-4 rounded-full text-lg transition-colors shadow-xl"
            >
              Reserve My Seat
            </a>
            <a
              href={SMS_HREF}
              className="border-2 border-white text-white hover:bg-white hover:text-brand-red font-bold px-10 py-4 rounded-full text-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              <MessageSquare size={18} />
              Text Eddie · {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary py-10 px-4">
        <div className="max-w-6xl mx-auto text-center text-sm text-gray-300">
          <p className="text-2xl font-black text-white mb-2">
            Black<span className="text-accent">lyne</span>{' '}
            <span className="text-white/70 font-bold text-base">AI Live</span>
          </p>
          <p className="mb-4">
            <a href={SMS_HREF} className="hover:text-white">
              Text Eddie · {PHONE}
            </a>
          </p>
          <p>&copy; 2026 Blacklyne. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
