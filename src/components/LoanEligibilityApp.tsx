'use client';

import { useState } from "react";
import { CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const LoanEligibilityApp = () => {
  const [step, setStep] = useState<"quiz" | "results">("quiz");
  const [formData, setFormData] = useState({ yearsInBusiness: "", annualRevenue: "", creditScore: "", fundingAmount: "" });
  const [result, setResult] = useState<any>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const calculateEligibility = () => {
    const years = formData.yearsInBusiness;
    const revenue = formData.annualRevenue;
    const credit = formData.creditScore;
    let status = "borderline", fundingRange = "$25K – $150K", message = "";
    if (years === "6+" && revenue !== "under_25k" && credit !== "below_500") {
      status = "eligible"; fundingRange = "$50K – $500K"; message = "Great news! You likely qualify for business funding.";
    } else if (years === "6+" && (revenue === "under_25k" || credit === "below_500")) {
      status = "borderline"; fundingRange = "$10K – $100K"; message = "You may qualify with additional documentation.";
    } else {
      status = "not_eligible"; fundingRange = "Not currently available"; message = "We recommend strengthening your business profile first.";
    }
    setResult({ status, fundingRange, message }); setStep("results");
  };

  const isComplete = formData.yearsInBusiness && formData.annualRevenue && formData.creditScore && formData.fundingAmount;

  if (step === "results" && result) {
    return (
      <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 max-w-2xl mx-auto">
        <div className="flex justify-center mb-6">
          {result.status === "eligible" && <CheckCircle2 size={48} className="text-green-600" />}
          {result.status === "borderline" && <AlertCircle size={48} className="text-yellow-600" />}
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-center mb-2">{result.status === "eligible" ? "You Likely Qualify" : "May Qualify"}</h3>
        <p className="text-center text-gray-600 mb-6">{result.message}</p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 text-center">
          <p className="text-xs text-gray-600 uppercase mb-1">Estimated Funding Range</p>
          <p className="text-2xl md:text-3xl font-bold text-blue-600">{result.fundingRange}</p>
        </div>
        <a href={siteConfig.calendly} target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
          Schedule Capital Strategy Call <ArrowRight size={18} />
        </a>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 max-w-2xl mx-auto">
      <h3 className="text-xl md:text-2xl font-bold mb-1">Quick Funding Assessment</h3>
      <p className="text-gray-600 mb-8">Answer 4 questions in 2 minutes.</p>
      <div className="mb-7">
        <label className="block text-sm font-semibold text-gray-900 mb-3">How long in business?</label>
        <div className="space-y-2">
          {[{ value: "less_6", label: "Less than 6 months" }, { value: "6+", label: "6+ months" }, { value: "1-3", label: "1–3 years" }, { value: "3+", label: "3+ years" }].map((opt) => (
            <label key={opt.value} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
              <input type="radio" name="years" value={opt.value} checked={formData.yearsInBusiness === opt.value} onChange={(e) => handleInputChange("yearsInBusiness", e.target.value)} className="mr-3" />
              <span className="text-sm">{opt.label}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="mb-7">
        <label className="block text-sm font-semibold text-gray-900 mb-3">Annual revenue?</label>
        <select value={formData.annualRevenue} onChange={(e) => handleInputChange("annualRevenue", e.target.value)} className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">Select...</option>
          <option value="under_25k">Under $25K/year</option>
          <option value="25k-100k">$25K–$100K/year</option>
          <option value="100k-500k">$100K–$500K/year</option>
          <option value="500k+">$500K+/year</option>
        </select>
      </div>
      <div className="mb-7">
        <label className="block text-sm font-semibold text-gray-900 mb-3">Business credit score?</label>
        <select value={formData.creditScore} onChange={(e) => handleInputChange("creditScore", e.target.value)} className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">Select...</option>
          <option value="below_500">Below 500</option>
          <option value="500-599">500–599</option>
          <option value="600+">600+</option>
        </select>
      </div>
      <div className="mb-8">
        <label className="block text-sm font-semibold text-gray-900 mb-3">Funding needed?</label>
        <select value={formData.fundingAmount} onChange={(e) => handleInputChange("fundingAmount", e.target.value)} className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">Select...</option>
          <option value="10k-50k">$10K–$50K</option>
          <option value="50k-100k">$50K–$100K</option>
          <option value="100k+">$100K+</option>
        </select>
      </div>
      <button onClick={calculateEligibility} disabled={!isComplete} className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors">
        See My Eligibility
      </button>
    </div>
  );
};

export default LoanEligibilityApp;
