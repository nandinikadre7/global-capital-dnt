"use client";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";

const investorAssets = [
  "Income-Producing Residential",
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
            className={`transition-all duration-700 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            {/* Image */}
            <div className="relative h-56 overflow-hidden mb-8">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85"
                alt="Investor asset classes"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-brand-navy/30" />
              <div className="absolute bottom-5 left-6">
                <span className="bg-brand-gold text-white text-xs tracking-widest uppercase px-3 py-1.5">
                  For Investors
                </span>
              </div>
            </div>

            <h2 className="font-serif text-4xl text-brand-charcoal leading-tight mb-4">
              Asset Class Coverage
            </h2>

            <div className="flex flex-wrap gap-3 mt-8">
              {investorAssets.map((a) => (
                <span
                  key={a}
                  className="px-4 py-2.5 border border-stone-200 text-slate-600 text-sm hover:bg-brand-navy hover:text-white hover:border-brand-navy transition-all duration-200 cursor-default"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Project Owners */}
          <div
            className={`transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {/* Image */}
            <div className="relative h-56 overflow-hidden mb-8">
              <Image
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=85"
                alt="Project owner deal criteria"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-brand-navy/30" />
              <div className="absolute bottom-5 left-6">
                <span className="bg-brand-gold text-white text-xs tracking-widest uppercase px-3 py-1.5">
                  For Project Owners
                </span>
              </div>
            </div>

            <h2 className="font-serif text-4xl text-brand-charcoal leading-tight mb-4">
              Deal Criteria
            </h2>

            <div className="border-t border-stone-200 mt-8">
              {ownerCriteria.map((c) => (
                <div
                  key={c.label}
                  className="grid grid-cols-2 py-4 border-b border-stone-100 group hover:bg-brand-warm transition-colors duration-150 px-1"
                >
                  <span className="text-slate-400 text-sm">{c.label}</span>
                  <span className="text-brand-charcoal text-sm font-medium group-hover:text-brand-navy transition-colors">
                    {c.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
