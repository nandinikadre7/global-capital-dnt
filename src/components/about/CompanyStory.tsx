"use client";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";

export default function CompanyStory() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Image */}
          <div
            className={`relative transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/team/joe-dodani.jpeg"
                alt="Global Investor Circle"
                fill
                className="object-cover"
              />
            </div>
            {/* Gold frame accent */}
            <div className="absolute -bottom-5 -right-5 w-3/4 h-3/4 border border-brand-gold/40 -z-10" />
            {/* Stat card */}
            <div className="absolute bottom-6 -right-6 bg-brand-navy text-white px-6 py-5 shadow-xl">
              <p className="font-serif text-3xl mb-0.5">$200M+</p>
              <p className="text-stone-400 text-xs tracking-wide uppercase">Facilitated Placements</p>
            </div>
          </div>

          {/* Text */}
          <div
            className={`transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="gold-rule" />
              <span className="overline-label">Our Story</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-charcoal leading-tight mb-8">
              Built on Discretion.<br />Driven by Precision.
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Global Investor Circle was founded on a core conviction: the most significant capital transactions in real estate and infrastructure should never happen in public. The best deals — the ones that generate outsized, risk-adjusted returns — are private, quiet, and structured between trusted parties.
            </p>
            <p className="text-slate-600 leading-relaxed mb-10">
              We operate as a private intermediary, connecting accredited investors with carefully vetted, off-market project opportunities that never reach public platforms. Every introduction is preceded by thorough vetting. Every deal is structured to protect investor and sponsor interests alike.
            </p>

            {/* Three pillars */}
            <div className="grid grid-cols-3 gap-6 border-t border-stone-200 pt-8">
              {[
                { n: "20+", label: "Years of Combined Experience" },
                { n: "100%", label: "Confidential Introductions" },
                { n: "US & Global", label: "Market Coverage" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-serif text-2xl text-brand-navy mb-1">{s.n}</p>
                  <p className="text-slate-400 text-xs leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
