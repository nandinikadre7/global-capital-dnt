"use client";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";

const steps = [
  {
    n: "01",
    title: "Origination & Vetting",
    desc: "Strict screening of deal mechanics, asset class fit, and financial feasibility.",
  },
  {
    n: "02",
    title: "Blind Profile Structuring",
    desc: "Non-identifying summaries prepared to protect both parties throughout.",
  },
  {
    n: "03",
    title: "Strategic Matching",
    desc: "Precise alignment between investor mandates and project parameters — no mass broadcasts.",
  },
  {
    n: "04",
    title: "Confidential Introduction",
    desc: "Warm handoff after mutual NDA confirmation — discreet and professional.",
  },
];

export default function Methodology() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="py-28 bg-brand-warm overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — image */}
          <div
            className={`relative h-[520px] overflow-hidden transition-all duration-700 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <Image
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=85"
              alt="Our private introduction process"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-brand-navy/25" />
          </div>

          {/* Right — steps */}
          <div
            className={`transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="gold-rule" />
              <span className="overline-label">Our Process</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-charcoal leading-tight mb-12">
              How We Work
            </h2>

            <div className="space-y-8">
              {steps.map((step, i) => (
                <div
                  key={step.n}
                  className={`flex gap-6 group transition-all duration-700 ${
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${300 + i * 120}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border border-stone-200 flex items-center justify-center shadow-sm group-hover:bg-brand-gold group-hover:border-brand-gold transition-all duration-300">
                    <span className="font-serif text-brand-navy text-sm font-bold group-hover:text-white transition-colors duration-300">
                      {step.n}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-brand-charcoal mb-1.5 group-hover:text-brand-navy transition-colors duration-200">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
