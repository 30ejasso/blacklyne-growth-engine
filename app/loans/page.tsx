'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle, DollarSign, Zap, TrendingUp, Clock } from 'lucide-react';
import Link from 'next/link';

export default function LoansPage() {
  const [quizOpen, setQuizOpen] = useState(false);
  const [quizStep, setQuizStep] = useState(0);
  const [answers, setAnswers] = useState({ revenue: '', yearsInBusiness: '', credit: '', industry: '' });

  const loanTypes = [
    {
      title: "Unsecured Business Loans",
      amount: "$5K - $100K",
      terms: "6-60 months",
      rate: "Competitive",
      desc: "Perfect for working capital, equipment, or emergency cash needs.",
      ideal: "Any business type"
    },
    {
      title: "Equipment Financing",
      amount: "$10K - $250K",
      terms: "12-84 months",
      rate: "Asset-based",
      desc: "Finance equipment while preserving cash for operations.",
      ideal: "Contractors, HVAC, Dental, Service Businesses"
    },
    {
      title: "Business Lines of Credit",
      amount: "$10K - $150K",
      terms: "12-36 months",
      rate: "Flexible",
      desc: "Access capital when you need it. Pay only for what you use.",
      ideal: "Seasonal businesses"
    },
  ];

  const benefits = [
    { icon: Clock, title: "Fast Funding", desc: "Approval in 24 hours, cash in 48 hours" },
    { icon: DollarSign, title: "Flexible Terms", desc: "Customized repayment based on your cash flow" },
    { icon: TrendingUp, title: "Grow Faster", desc: "Invest in growth without stress" },
    { icon: CheckCircle, title: "No Hidden Fees", desc: "Transparent pricing, no surprises" },
  ];

  const qualifyingQuestions = [
    {
      q: "What's your annual revenue?",
      type: "select",
      options: ["$100K - $250K", "$250K - $500K", "$500K - $1M", "$1M+"]
    },
    {
      q: "How long have you been in business?",
      type: "select",
      options: ["1-2 years", "2-3 years", "3-5 years", "5+ years"]
    },
    {
      q: "What's your approximate credit score?",
      type: "select",
      options: ["Below 600", "600-700", "700-750", "750+"]
    },
    {
      q: "What's your industry?",
      type: "select",
      options: ["Plumbing", "HVAC", "Med Spa", "Dental", "Auto", "Real Estate", "Other"]
    }
  ];

  const handleQuizAnswer = (answer: string) => {
    const keys = ['revenue', 'yearsInBusiness', 'credit', 'industry'];
    setAnswers({ ...answers, [keys[quizStep]]: answer });
    if (quizStep < 3) {
      setQuizStep(quizStep + 1);
    } else {
      // Show result
      setQuizStep(4);
    }
  };

  const getEligibilityResult = () => {
    // Simple scoring
    let score = 0;
    if (answers.revenue === "$1M+" || answers.revenue === "$500K - $1M") score += 25;
    else if (answers.revenue === "$250K - $500K") score += 15;
    else score += 5;

    if (answers.yearsInBusiness === "5+ years" || answers.yearsInBusiness === "3-5 years") score += 25;
    else if (answers.yearsInBusiness === "2-3 years") score += 15;
    else score += 5;

    if (answers.credit === "750+" || answers.credit === "700-750") score += 25;
    else if (answers.credit === "600-700") score += 15;
    else score += 5;

    score += 25; // Industry bonus

    return score;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ===== HERO ===== */}
      <section className="bg-gradient-to-b from-primary to-primary-light text-white pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-accent font-bold text-sm uppercase tracking-wider mb-4">Direct Business Capital</p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Get Funded Fast.<br />
            <span className="text-accent">No Bank Hassle.</span>
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Approval in 24 hours. Cash in 48 hours. For growing local service businesses that need capital now.
          </p>
          <button
            onClick={() => setQuizOpen(true)}
            className="bg-accent hover:bg-accent-dark text-primary font-bold px-8 py-4 rounded-full flex items-center justify-center gap-2 mx-auto transition-all"
          >
            Check Your Eligibility <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-primary mb-16">Why Choose Blacklyne Capital?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <div key={i} className="bg-white rounded-xl p-6 text-center border border-gray-200">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-accent" size={24} />
                  </div>
                  <h3 className="font-bold text-primary mb-2">{b.title}</h3>
                  <p className="text-sm text-gray-600">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== LOAN TYPES ===== */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Loan Products</h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Choose the loan type that fits your business needs and growth goals.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {loanTypes.map((loan, i) => (
              <div key={i} className="bg-primary-light rounded-xl p-8 border border-accent/10 hover:border-accent transition-all">
                <h3 className="text-2xl font-bold mb-4">{loan.title}</h3>
                <div className="space-y-3 mb-6 text-sm">
                  <div>
                    <p className="text-gray-400">Amount</p>
                    <p className="text-lg font-bold text-accent">{loan.amount}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Terms</p>
                    <p className="text-lg font-bold">{loan.terms}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Rate</p>
                    <p className="text-lg font-bold text-accent">{loan.rate}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 text-sm">{loan.desc}</p>
                <p className="text-xs text-gray-500 border-t border-accent/10 pt-4">
                  <span className="font-bold">Ideal for:</span> {loan.ideal}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-primary mb-16">Simple 3-Step Process</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent text-primary font-bold text-2xl flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Apply</h3>
              <p className="text-gray-600">Complete a quick application. Takes 10 minutes.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent text-primary font-bold text-2xl flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Approval (24 hrs)</h3>
              <p className="text-gray-600">We review and approve your application.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent text-primary font-bold text-2xl flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Funded (48 hrs)</h3>
              <p className="text-gray-600">Cash in your account. Scale your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-primary mb-12">Loan Questions?</h2>
          <div className="space-y-4">
            <details className="group border border-gray-200 rounded-xl overflow-hidden">
              <summary className="p-6 font-bold text-primary cursor-pointer bg-gray-50 group-open:bg-accent/5">
                What credit score do I need?
              </summary>
              <p className="px-6 pb-6 text-gray-600">
                We work with credit scores as low as 600, though higher scores may qualify for better terms.
              </p>
            </details>
            <details className="group border border-gray-200 rounded-xl overflow-hidden">
              <summary className="p-6 font-bold text-primary cursor-pointer bg-gray-50 group-open:bg-accent/5">
                How much can I borrow?
              </summary>
              <p className="px-6 pb-6 text-gray-600">
                $5K to $250K+, depending on revenue, credit, and time in business.
              </p>
            </details>
            <details className="group border border-gray-200 rounded-xl overflow-hidden">
              <summary className="p-6 font-bold text-primary cursor-pointer bg-gray-50 group-open:bg-accent/5">
                Are there hidden fees?
              </summary>
              <p className="px-6 pb-6 text-gray-600">
                No. Transparent pricing. What you see is what you pay.
              </p>
            </details>
            <details className="group border border-gray-200 rounded-xl overflow-hidden">
              <summary className="p-6 font-bold text-primary cursor-pointer bg-gray-50 group-open:bg-accent/5">
                Can I use loans + AI platform together?
              </summary>
              <p className="px-6 pb-6 text-gray-600">
                Yes! Use AI to generate leads, convert them, then offer customers financing through our lending product.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="bg-accent text-primary py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Ready for Capital?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Check your eligibility in 2 minutes. See what you can qualify for.
          </p>
          <button
            onClick={() => {
              setQuizOpen(true);
              setQuizStep(0);
            }}
            className="bg-primary hover:bg-primary-light text-white font-bold px-8 py-4 rounded-full text-lg transition-all"
          >
            Start Eligibility Quiz <ArrowRight size={20} className="inline ml-2" />
          </button>
        </div>
      </section>

      {/* ===== ELIGIBILITY QUIZ MODAL ===== */}
      {quizOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-primary">
                {quizStep === 4 ? "Your Results" : "Eligibility Check"}
              </h2>
              <button
                onClick={() => {
                  setQuizOpen(false);
                  setQuizStep(0);
                  setAnswers({ revenue: '', yearsInBusiness: '', credit: '', industry: '' });
                }}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ✕
              </button>
            </div>

            {quizStep === 4 ? (
              <div>
                <div className="bg-accent/10 rounded-xl p-8 text-center mb-6">
                  <p className="text-gray-600 mb-2">Your Eligibility Score</p>
                  <p className="text-5xl font-bold text-accent">{getEligibilityResult()}%</p>
                </div>
                <div className="bg-primary/5 rounded-xl p-6 mb-6">
                  <h3 className="font-bold text-primary mb-2">Next Steps:</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Based on your answers, you're eligible for up to <span className="font-bold text-accent">$50K-$150K</span>.
                  </p>
                  <Link href="/contact">
                    <button className="w-full bg-accent text-primary font-bold py-3 rounded-lg hover:bg-accent-dark transition-all">
                      Get Pre-Qualification
                    </button>
                  </Link>
                </div>
                <button
                  onClick={() => {
                    setQuizOpen(false);
                    setQuizStep(0);
                    setAnswers({ revenue: '', yearsInBusiness: '', credit: '', industry: '' });
                  }}
                  className="w-full text-gray-600 font-semibold py-2"
                >
                  Close
                </button>
              </div>
            ) : (
              <div>
                <p className="text-gray-600 mb-6 font-semibold">
                  {qualifyingQuestions[quizStep].q}
                </p>
                <div className="space-y-3">
                  {qualifyingQuestions[quizStep].options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleQuizAnswer(opt)}
                      className="w-full border-2 border-gray-200 text-left px-4 py-3 rounded-lg hover:border-accent hover:bg-accent/5 transition-all"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-6 text-center">
                  Step {quizStep + 1} of 4
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ===== FOOTER ===== */}
      <footer className="bg-primary text-gray-400 py-12 px-4 border-t border-accent/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-4">&copy; 2026 Blacklyne Capital</p>
          <p className="text-sm">
            <Link href="/" className="text-accent hover:underline">Back to Home</Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
