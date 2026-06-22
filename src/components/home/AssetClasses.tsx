"use client";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";

const investorAssets = [
  "Income-Producing Residential Portfolios",
  "Strategic Land Investments",
  "Master-Planned Communities",
  "Utility-Scale Solar Arrays",
  "Agricultural Farmland",
  "Hospitality & Hotels",
  "Multifamily Syndications",
  "Retail Strip Centers",
  "Gas Stations & Truck Stops",
];

const ownerCriteria = [
  { label: "Deal Size Range", value: "$5M – $100M+" },
  { label: "Geography", value: "United States & Core Global Markets" },
  { label: "Early-Stage", value: "Land Banking & Pre-Entitlement" },
  { label: "Shovel-Ready", value: "Fully Entitled Developments" },
  { label: "Stabilized", value: "Yield-Generating Commercial Portfolios" },
];

export default function AssetClasses() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left — Investors */}
          <div
            className={`transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="gold-rule" />
              <span className="overline-label">For Investors</span>
            </div>
            <h2 className="font-serif text-4xl text-brand-charcoal leading-tight mb-4">
              Asset Class Coverage
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-10 max-w-sm">
              Our network prioritizes premium, resilient asset classes with institutional demand and proven risk-adjusted return profiles.
            </p>

            {/* Asset list */}
            <div className="border-t border-stone-200">
              {investorAssets.map((a) => (
                <div
                  key={a}
                  className="flex items-center justify-between py-3.5 border-b border-stone-100 group"
                >
                  <span className="text-slate-700 text-sm group-hover:text-brand-navy transition-colors">{a}</span>
                  <span className="text-stone-300 group-hover:text-brand-gold transition-colors text-xs">→</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Project Owners */}
          <div
            className={`transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="gold-rule" />
              <span className="overline-label">For Project Owners</span>
            </div>
            <h2 className="font-serif text-4xl text-brand-charcoal leading-tight mb-4">
              Deal Criteria
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-10 max-w-sm">
              We review institutional and middle-market opportunities across all project lifecycles and geographies.
            </p>

            {/* Criteria table */}
            <div className="border-t border-stone-200">
              {ownerCriteria.map((c) => (
                <div key={c.label} className="grid grid-cols-2 py-4 border-b border-stone-100">
                  <span className="text-slate-400 text-sm">{c.label}</span>
                  <span className="text-brand-charcoal text-sm font-medium">{c.value}</span>
                </div>
              ))}
            </div>

            {/* Image accent */}
            <div className="mt-10 relative h-52 rounded overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80"
                alt="City skyline"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-brand-navy/50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="font-serif text-white text-xl italic">
                  &ldquo;Off-market. By invitation only.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
