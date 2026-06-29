"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

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

export default function ProjectOwnerForm() {
  const [submitted, setSubmitted] = useState(false);

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
          Thank You for Registering
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

      {/* Contact Number */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
          Contact Number
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

      {/* Brief / Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
          Brief / Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Describe your project: type, location, capital required, current stage..."
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
        Register as Project Owner
      </Button>
    </form>
  );
}
