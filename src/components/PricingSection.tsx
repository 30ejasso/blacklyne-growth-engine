'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const PLANS = [
  {
    badge: '🟢',
    title: 'Starter',
    price: '$497',
    tagline: 'We Turn Missed Calls Into Booked Jobs',
    desc: 'Perfect for service companies who are losing leads and want them back.',
    features: [
      'Instantly respond to every new lead (even when you\'re busy)',
      'Capture missed calls and turn them into paying jobs',
      'Follow up automatically so no opportunity slips through',
      'Generate more 5-star reviews from happy customers',
      'See exactly how many leads you\'re converting',
    ],
    support: 'Ongoing support to keep your leads converting',
    cta: 'Stop Missing Leads',
    featured: false,
  },
  {
    badge: '🔵',
    title: 'Growth',
    price: '$997',
    tagline: 'Turn More Leads Into Revenue — Automatically',
    desc: 'For service businesses ready to scale and stop relying on chance.',
    features: [
      'Everything in Starter',
      'Advanced follow-up sequences that convert more jobs',
      'AI handles more conversations (higher volume)',
      'Lead reactivation (turn old leads into new jobs)',
      'Pipeline tracking so you know exactly where money is',
      'Faster response = higher close rate',
    ],
    support: 'Priority support + optimization to increase your booked jobs',
    cta: 'Get My Revenue System',
    featured: true,
  },
  {
    badge: '🔴',
    title: 'Pro',
    price: '$1,497',
    tagline: 'We Help You Capture & Close Every Opportunity',
    desc: 'For owners who want a system that runs and grows revenue without chasing leads.',
    features: [
      'Everything in Growth',
      'Full lead capture across all channels (calls, texts, web)',
      'Advanced automation + conversion workflows',
      'Reputation engine (reviews on autopilot at scale)',
      'Deeper reporting on revenue performance',
      'Continuous system improvements',
    ],
    support: 'Hands-on support to maximize your lead flow and conversions',
    cta: 'Book A Strategy Call',
    featured: false,
  },
];

export default function PricingSection() {
  return (
    <section className="py-24 px-4 bg-brand-cyan">
      <div className="max-w-6xl mx-auto">

        {/* Impact headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-black text-white text-center leading-tight mb-5"
        >
          Stop Losing $1,000+ Jobs<br />Because You Missed a Call
        </motion.h2>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-white/80 text-xl text-center max-w-2xl mx-auto mb-14"
        >
          We install a system that captures every lead, follows up instantly, and turns
          more of them into paying customers.
        </motion.p>

        {/* "Simple Pricing" — 1s delay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
            Simple Pricing. Serious Results.
          </h3>
          <p className="text-white/70 text-lg">
            Pick a plan and start capturing leads you&apos;re currently losing.
          </p>
        </motion.div>

        {/* Cards — cascade from 1.3s */}
        <div className="grid md:grid-cols-3 gap-8 items-start mb-16">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.3 + i * 0.15 }}
              className={`bg-white rounded-2xl p-8 flex flex-col ${
                plan.featured
                  ? 'border-2 border-primary shadow-2xl md:-mt-4 md:mb-4'
                  : 'shadow-lg border border-white/20'
              }`}
            >
              {plan.featured && (
                <div className="bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full w-fit mb-4">
                  Most Popular
                </div>
              )}

              <div className="text-3xl mb-4">{plan.badge}</div>

              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">
                {plan.title}
              </p>

              <div className="flex items-end gap-1 mb-2">
                <span className="text-5xl font-black text-brand-red">{plan.price}</span>
                <span className="text-gray-400 font-semibold mb-1.5">/mo</span>
              </div>

              <p className="font-bold text-primary text-sm mb-1">{plan.tagline}</p>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">{plan.desc}</p>

              <ul className="space-y-2.5 mb-6 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <Check size={15} className="text-accent mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <p className="text-accent text-sm italic mb-6">👉 {plan.support}</p>

              <a
                href="https://calendly.com/eddiejasso"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-accent hover:bg-accent-dark text-white font-bold py-3.5 rounded-full transition-colors"
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Closer CTA — same cyan section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white/15 backdrop-blur-sm rounded-2xl p-10 text-center border border-white/20"
        >
          <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
            Not sure which plan is right?
          </h3>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            👉 We&apos;ll show you exactly how many leads you&apos;re currently losing and how to fix it.
          </p>
          <a
            href="https://calendly.com/eddiejasso"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent hover:bg-accent-dark text-white font-bold px-10 py-4 rounded-full text-lg transition-colors shadow-xl"
          >
            Get a Free Revenue Leak Audit
          </a>
        </motion.div>

      </div>
    </section>
  );
}
