"use client";
import { useInView } from "@/hooks/useInView";

const steps = [
  {
    n: "01",
    title: "Origination & Vetting",
    desc: "Strict screening of deal mechanics, asset class fit, and financial feasibility before any outreach.",
  },
  {
    n: "02",
    title: "Blind Profile Structuring",
    desc: "Institutional-grade, non-identifying summaries prepared to protect both parties throughout.",
  },
  {
    n: "03",
    title: "Strategic Matching",
    desc: "Precise alignment between investor mandates and project parameters — no mass broadcasts.",
  },
  {
    n: "04",
    title: "Confidential Introduction",
    desc: "Warm handoff after mutual NDA confirmation. One-on-one, professional, discreet.",
  },
];

export default function Methodology() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="py-28 bg-brand-warm">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div
          className={`max-w-xl mb-20 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="gold-rule" />
            <span className="overline-label">Our Process</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-brand-charcoal leading-tight">
            How We Work
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-6 left-[12%] right-[12%] h-px bg-stone-300" />

          {steps.map((step, i) => (
            <div
              key={step.n}
              className={`transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${100 + i * 120}ms` }}
            >
              {/* Step number */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative z-10 w-12 h-12 rounded-full bg-white border border-stone-300 flex items-center justify-center shadow-sm">
                  <span className="font-serif text-brand-navy text-sm font-bold">{step.n}</span>
                </div>
                <div className="md:hidden flex-1 h-px bg-stone-300" />
              </div>
              <h3 className="font-serif text-lg text-brand-charcoal mb-3">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
