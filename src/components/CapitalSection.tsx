import AnimatedSection from "./AnimatedSection";
import LoanEligibilityApp from "./LoanEligibilityApp";
import { Landmark, TrendingUp, Wallet, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const CapitalSection = () => (
  <section className="py-16 lg:py-24 px-4 lg:px-8 bg-gray-50">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <AnimatedSection>
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 mb-3">Capital & Growth</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">Need Capital to Scale?</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">We help qualified businesses access funding to grow faster.</p>
        </AnimatedSection>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <AnimatedSection delay={0.1}>
          <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Landmark className="text-blue-600" size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Business Credit Lines</h3>
            <p className="text-sm text-gray-600">Flexible credit to fund operations and growth without draining cash flow.</p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="text-green-600" size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Growth Capital</h3>
            <p className="text-sm text-gray-600">Secure funding to hire, expand, and scale faster.</p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Wallet className="text-purple-600" size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Funding Strategies</h3>
            <p className="text-sm text-gray-600">Navigate lending options and connect with the right fit.</p>
          </div>
        </AnimatedSection>
      </div>

      <AnimatedSection delay={0.4}>
        <div className="mb-12">
          <LoanEligibilityApp />
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.5}>
        <div className="text-center">
          <p className="text-gray-600 mb-4">Don't wait. See if you qualify in 2 minutes.</p>
          <a href={siteConfig.calendly} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Schedule Capital Strategy Call
            <ArrowRight size={18} />
          </a>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default CapitalSection;
