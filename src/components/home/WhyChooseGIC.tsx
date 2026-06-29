"use client";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";

const pillars = [
  {
    title: "Absolute Confidentiality",
    description: "Your identity is protected until mutual interest is confirmed — zero public exposure at every stage.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Precision-Matched Capital",
    description: "Only mandate-aligned investors see your deal — no mass broadcasts, no wasted exposure.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>
    ),
  },
  {
    title: "Qualified Investor Network",
    description: "Pre-screened accredited investors across the US and global markets — no retail noise.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "US & Global Reach",
    description: "Active placements from $5M to $100M+ spanning domestic markets and international capital sources.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function WhyChooseGIC() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="bg-brand-navy overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Top image banner */}
        <div
          className={`relative h-64 w-full transition-all duration-700 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1600&q=85"
            alt="Global private investment"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-brand-navy/60" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-brand-gold" />
              <span className="overline-label text-brand-gold">Why Choose Us</span>
              <div className="w-8 h-px bg-brand-gold" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">
              The GIC Difference
            </h2>
          </div>
        </div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 px-6 lg:px-10 py-16">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`group relative bg-brand-navy p-10 border border-transparent hover:border-brand-gold/50 hover:-translate-y-0.5 transition-all duration-300 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 flex items-center justify-center border border-brand-gold/30 group-hover:border-brand-gold group-hover:bg-brand-gold/10 mb-6 transition-all duration-300">
                <div className="text-brand-gold/60 group-hover:text-brand-gold transition-colors duration-300">
                  {p.icon}
                </div>
              </div>
              <h3 className="font-serif text-xl text-white mb-3">{p.title}</h3>
              <p className="text-stone-400 text-sm leading-relaxed group-hover:text-stone-300 transition-colors duration-300">
                {p.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
