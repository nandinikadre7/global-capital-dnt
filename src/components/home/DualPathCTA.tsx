"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useInView } from "@/hooks/useInView";

const paths = [
  {
    key: "investor",
    overline: "For Investors",
    heading: "Access Private Placement Flow",
    body: "Gain entry to off-market, institutional-grade assets unavailable on any public platform — curated exclusively for accredited investors.",
    benefits: [
      "Residential, solar & multifamily portfolios",
      "Blind deal summaries matched to your mandate",
      "Introduction only after mutual NDA & confirmed intent",
      "$5M to $100M+ across US & global markets",
    ],
    cta: "Begin Investor Onboarding",
    href: "/contact?type=investor",
    img: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=900&q=85",
  },
  {
    key: "owner",
    overline: "For Project Owners",
    heading: "Submit Your Capital Requirement",
    body: "Connect your development to the right institutional capital — quietly, professionally, on your timeline.",
    benefits: [
      "Equity, debt & JV across all project stages",
      "Blind profile — identity protected throughout",
      "Family offices, funds & cross-border allocators",
      "Land banking to stabilized cash-flowing assets",
    ],
    cta: "Submit Your Project",
    href: "/contact?type=owner",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=85",
  },
];

export default function DualPathCTA() {
  const { ref, inView } = useInView();
  const [highlight, setHighlight] = useState<string | null>(null);

  const toggle = (key: string) =>
    setHighlight((prev) => (prev === key ? null : key));

  return (
    <section ref={ref} className="py-28 bg-brand-warm">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-10 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="gold-rule" />
            <span className="overline-label">Who We Serve</span>
            <div className="gold-rule" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-brand-charcoal leading-tight">
            Two Pathways.<br />One Private Platform.
          </h2>
        </div>

        {/* Toggle bar */}
        <div
          className={`flex items-center justify-center mb-10 transition-all duration-700 delay-200 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <button
            onClick={() => toggle("investor")}
            className={`px-7 py-3 text-xs tracking-widest uppercase border transition-all duration-200 ${
              highlight === "investor"
                ? "bg-brand-gold text-white border-brand-gold"
                : "bg-white text-slate-500 border-stone-200 hover:text-brand-navy hover:border-brand-navy"
            }`}
          >
            I am an Investor
          </button>
          <button
            onClick={() => toggle("owner")}
            className={`px-7 py-3 text-xs tracking-widest uppercase border-t border-b border-r transition-all duration-200 ${
              highlight === "owner"
                ? "bg-brand-gold text-white border-brand-gold"
                : "bg-white text-slate-500 border-stone-200 hover:text-brand-navy hover:border-brand-navy"
            }`}
          >
            I am a Project Owner
          </button>
        </div>

        {/* Two-column cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {paths.map((p, i) => {
            return (
              <div
                key={p.key}
                className={`bg-white border overflow-hidden group hover:shadow-xl transition-all duration-500 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } ${
                  highlight === p.key
                    ? "border-brand-gold ring-1 ring-brand-gold"
                    : highlight !== null
                    ? "border-stone-200 opacity-50"
                    : "border-stone-200"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Photo */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.overline}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/25" />
                  <div className="absolute top-5 left-5">
                    <span className="bg-brand-gold text-white text-xs tracking-widest uppercase px-3 py-1.5">
                      {p.overline}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="font-serif text-2xl text-brand-charcoal leading-snug mb-3">
                    {p.heading}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-7 border-b border-stone-100 pb-7">
                    {p.body}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {p.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm text-slate-600">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={p.href}
                    className="inline-block w-full text-center border border-brand-navy text-brand-navy text-xs tracking-widest uppercase px-6 py-3.5 hover:bg-brand-navy hover:text-white transition-all duration-200"
                  >
                    {p.cta}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
