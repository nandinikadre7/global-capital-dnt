"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Button from "@/components/ui/Button";

type AudienceType = "investor" | "accredited" | "";

const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
  "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho",
  "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
  "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
  "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
  "New Hampshire", "New Jersey", "New Mexico", "New York",
  "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
  "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
  "West Virginia", "Wisconsin", "Wyoming", "District of Columbia",
];

export default function ContactForm() {
  const searchParams = useSearchParams();
  const projectCode = searchParams.get("project");
  const projectTitle = searchParams.get("title");
  const projectRegion = searchParams.get("region");
  const projectSize = searchParams.get("size");

  const inquiryType = searchParams.get("inquiry");

  const defaultMessage = projectCode
    ? `I would like to request full platform membership to access the complete details for ${projectCode} — ${projectTitle} (${projectRegion}, ${projectSize}).\n\nI understand that membership is extended by invitation following accreditation verification and mandate review. Please find my details above, and I look forward to discussing the next steps.`
    : inquiryType === "membership"
    ? `I would like to request full platform membership with Global Investor Circle.\n\nI understand that membership is by invitation following accreditation and mandate review. I am happy to provide any additional documentation required and look forward to hearing from your team.`
    : "";

  const [submitted, setSubmitted] = useState(false);
  const [audienceType, setAudienceType] = useState<AudienceType>("");
  const [showAccreditedPopup, setShowAccreditedPopup] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleAudienceChange = (value: AudienceType) => {
    setAudienceType(value);
    if (value === "accredited") {
      setShowAccreditedPopup(true);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-16 px-8">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-brand-navy mb-3">
          Thank You for Submitting Your Response
        </h3>
        <p className="text-slate-600 max-w-md mx-auto leading-relaxed">
          A member of our team will be in touch shortly. All inquiries are handled
          with strict confidentiality and discretion.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Accredited Investor Info Popup */}
      {showAccreditedPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white max-w-lg w-full p-8 rounded-lg shadow-xl relative">
            <button
              onClick={() => setShowAccreditedPopup(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 transition-colors"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="font-serif text-xl text-brand-navy mb-4">Who is an Accredited Investor?</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Under SEC Regulation D, an <strong>Accredited Investor</strong> is an individual or entity that meets at least one of the following criteria:
            </p>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex gap-3">
                <span className="text-brand-gold font-bold flex-shrink-0 mt-0.5">•</span>
                <span><strong>Net Worth:</strong> Individual or joint net worth exceeding <strong>$1 million</strong>, excluding the value of the primary residence.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-gold font-bold flex-shrink-0 mt-0.5">•</span>
                <span><strong>Income:</strong> Annual income exceeding <strong>$200,000</strong> (or <strong>$300,000</strong> jointly with a spouse) for the past two years, with reasonable expectation of the same for the current year.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-gold font-bold flex-shrink-0 mt-0.5">•</span>
                <span><strong>Professional Credentials:</strong> Holds a valid Series 7, Series 65, or Series 82 license in good standing.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-gold font-bold flex-shrink-0 mt-0.5">•</span>
                <span><strong>Entities:</strong> Trusts, corporations, or other entities with assets exceeding <strong>$5 million</strong>, not formed specifically to acquire the offered securities.</span>
              </li>
            </ul>
            <p className="text-xs text-slate-400 mt-5 leading-relaxed">
              Source: U.S. Securities and Exchange Commission (SEC) — Rule 501 of Regulation D.
            </p>
            <Button
              onClick={() => setShowAccreditedPopup(false)}
              variant="primary"
              size="sm"
              className="mt-6 w-full"
            >
              I Understand
            </Button>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Audience Type */}
        <div>
          <label className="block text-sm font-semibold text-brand-navy mb-3">
            I am a <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-2 gap-3">
            {[
              { value: "investor", label: "Investor", desc: "Seeking off-market opportunities" },
              { value: "accredited", label: "Accredited Investor", desc: "Meets SEC accreditation criteria" },
            ].map((opt) => (
              <label
                key={opt.value}
                className={`relative flex flex-col gap-1 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  audienceType === opt.value
                    ? "border-brand-navy bg-brand-navy/5"
                    : "border-stone-200 hover:border-stone-300"
                }`}
              >
                <input
                  type="radio"
                  name="audienceType"
                  value={opt.value}
                  required
                  className="sr-only"
                  onChange={() => handleAudienceChange(opt.value as AudienceType)}
                />
                <span className="font-semibold text-sm text-brand-navy">{opt.label}</span>
                <span className="text-xs text-slate-500">{opt.desc}</span>
                {audienceType === opt.value && (
                  <div className="absolute top-3 right-3 w-4 h-4 rounded-full bg-brand-navy flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </label>
            ))}
          </div>
        </div>

        {/* First Name */}
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            placeholder="John"
            className="w-full border border-stone-300 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-transparent transition"
          />
        </div>

        {/* Last Name */}
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            placeholder="Smith"
            className="w-full border border-stone-300 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-transparent transition"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="john@firm.com"
            className="w-full border border-stone-300 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-transparent transition"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+1 (555) 000-0000"
            className="w-full border border-stone-300 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-transparent transition"
          />
        </div>

        {/* Country */}
        <div>
          <label htmlFor="country" className="block text-sm font-medium text-slate-700 mb-1">
            Country <span className="text-red-500">*</span>
          </label>
          <input
            id="country"
            name="country"
            type="text"
            required
            placeholder="United States"
            className="w-full border border-stone-300 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-transparent transition"
          />
        </div>

        {/* State */}
        <div>
          <label htmlFor="state" className="block text-sm font-medium text-slate-700 mb-1">
            State <span className="text-red-500">*</span>
          </label>
          <select
            id="state"
            name="state"
            required
            defaultValue=""
            className="w-full border border-stone-300 rounded-lg px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-transparent transition bg-white"
          >
            <option value="" disabled>Select a state</option>
            {US_STATES.map((state) => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </div>

        {/* City */}
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-slate-700 mb-1">
            City <span className="text-red-500">*</span>
          </label>
          <input
            id="city"
            name="city"
            type="text"
            required
            placeholder="Scottsdale"
            className="w-full border border-stone-300 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-transparent transition"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
            Brief / Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            defaultValue={defaultMessage}
            placeholder="Describe your investment mandate: asset class preferences, deal size range, geographic focus..."
            className="w-full border border-stone-300 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-transparent transition resize-none"
          />
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-slate-500 leading-relaxed">
          By submitting this form, you acknowledge that your inquiry will be handled
          with strict confidentiality. We do not share your information with anyone
          without your explicit consent.
        </p>

        <Button type="submit" variant="primary" size="lg" className="w-full">
          Submit Inquiry
        </Button>
      </form>
    </>
  );
}
