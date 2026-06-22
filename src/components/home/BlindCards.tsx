"use client";
import Link from "next/link";
import { useInView } from "@/hooks/useInView";

const projects = [
  {
    code: "Project Alpha",
    title: "150-Unit Multifamily Development",
    region: "Southeast United States",
    stage: "Shovel-Ready",
    type: "Residential / Multifamily",
    size: "$18M – $24M",
    imgBg: "bg-gradient-to-br from-slate-700 to-slate-900",
  },
  {
    code: "Project Beta",
    title: "45MW Utility-Scale Solar Infrastructure",
    region: "Southwest United States",
    stage: "Stabilized · Cash-Flowing",
    type: "Renewable Energy",
    size: "$35M – $50M",
    imgBg: "bg-gradient-to-br from-blue-900 to-slate-900",
  },
  {
    code: "Project Gamma",
    title: "Master-Planned Residential Community",
    region: "Global Market",
    stage: "Expansion Stage",
    type: "Mixed-Use Development",
    size: "$75M+",
    imgBg: "bg-gradient-to-br from-amber-900 to-slate-900",
  },
];

export default function BlindCards() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="py-28 bg-brand-warm">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header row */}
        <div
          className={`flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="gold-rule" />
              <span className="overline-label">Blind Placements</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-charcoal">
              Current Opportunities
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="text-sm text-brand-navy tracking-widest uppercase hover:text-brand-gold transition-colors shrink-0 flex items-center gap-2"
          >
            View All <span>→</span>
          </Link>
        </div>

        {/* Cards — property listing style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <Link
              key={p.code}
              href="/contact"
              className={`group bg-white overflow-hidden border border-stone-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-400 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${100 + i * 120}ms` }}
            >
              {/* Image area — confidential/blind */}
              <div className={`relative ${p.imgBg} h-56 flex items-center justify-center overflow-hidden`}>
                {/* Subtle dot grid */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
                {/* Lock badge */}
                <div className="relative z-10 text-center">
                  <svg className="w-8 h-8 text-white/40 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span className="text-white/50 text-xs tracking-widest uppercase">Confidential</span>
                </div>
                {/* Project code — top left */}
                <div className="absolute top-4 left-4">
                  <span className="bg-brand-gold text-white text-xs tracking-widest uppercase px-3 py-1">
                    {p.code}
                  </span>
                </div>
                {/* Hover CTA */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-xs tracking-widest uppercase border border-white/40 px-3 py-1.5">
                    Request Access →
                  </span>
                </div>
              </div>

              {/* Listing details — property card style */}
              <div className="p-6">
                <p className="text-slate-400 text-xs tracking-wide uppercase mb-2">{p.type} · {p.region}</p>
                <h3 className="font-serif text-lg text-brand-charcoal leading-snug mb-4 group-hover:text-brand-navy transition-colors">
                  {p.title}
                </h3>
                <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                  <span className="text-xs text-slate-400 tracking-wide">{p.stage}</span>
                  <span className="font-serif text-base text-brand-navy font-semibold">{p.size}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="mt-10 text-center text-xs text-slate-400 max-w-xl mx-auto">
          All above represent blind summaries. Project identity and full details are disclosed exclusively upon mutual NDA and confirmed investment intent.
        </p>
      </div>
    </section>
  );
}
