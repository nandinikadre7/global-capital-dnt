"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

type AudienceType = "investor" | "owner" | "";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [audienceType, setAudienceType] = useState<AudienceType>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
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
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Audience Type */}
      <div>
        <label className="block text-sm font-semibold text-brand-navy mb-3">
          I am a <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-2 gap-3">
          {[
            { value: "investor", label: "Qualified Investor", desc: "Seeking off-market opportunities" },
            { value: "owner", label: "Project Owner", desc: "Seeking capital & partners" },
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
                onChange={() => setAudienceType(opt.value as AudienceType)}
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

      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            placeholder="John Smith"
            className="w-full border border-stone-300 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-transparent transition"
          />
        </div>
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
          placeholder={
            audienceType === "owner"
              ? "Brief description of your project: asset class, location, deal size, current stage..."
              : "Describe your investment mandate: asset class preferences, deal size range, geographic focus..."
          }
          className="w-full border border-stone-300 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-transparent transition resize-none"
        />
      </div>

      {/* Disclaimer */}
      <p className="text-xs text-slate-500 leading-relaxed">
        By submitting this form, you acknowledge that your inquiry will be handled
        with strict confidentiality. We do not share your information with third
        parties without your explicit consent.
      </p>

      <Button type="submit" variant="primary" size="lg" className="w-full">
        Submit Inquiry
      </Button>
    </form>
  );
}
