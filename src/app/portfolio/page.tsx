import Link from "next/link";

export const metadata = {
  title: "Portfolio | Global Investor Circle",
  description:
    "Private, off-market investment opportunities — available exclusively to qualified, pre-screened network members.",
};

const projects = [
  {
    code: "Project Alpha",
    title: "150-Unit Multifamily Development",
    region: "Southeast United States",
    stage: "Shovel-Ready",
    type: "Residential / Multifamily",
    size: "$18M – $24M",
    highlights: ["Fully entitled, permits approved", "95%+ occupancy submarket", "Experienced regional sponsor"],
    gradient: "from-slate-800 to-slate-950",
  },
  {
    code: "Project Beta",
    title: "45MW Utility-Scale Solar Infrastructure",
    region: "Southwest United States",
    stage: "Stabilized · Cash-Flowing",
    type: "Renewable Energy",
    size: "$35M – $50M",
    highlights: ["Long-term PPA, investment-grade offtake", "5+ years operational history", "Existing grid interconnection"],
    gradient: "from-blue-900 to-slate-950",
  },
  {
    code: "Project Gamma",
    title: "Master-Planned Residential Community",
    region: "Global Market",
    stage: "Expansion Stage",
    type: "Mixed-Use Development",
    size: "$75M+",
    highlights: ["Multi-market diversification", "Experienced local operators", "Structured JV with preferred return"],
    gradient: "from-amber-900 to-slate-950",
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-brand-navy pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-brand-gold" />
            <span className="overline-label text-brand-gold">Blind Placements</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl text-white leading-tight max-w-xl">
            Active Opportunities
          </h1>
          <p className="text-stone-400 mt-4 max-w-lg leading-relaxed">
            The following are blind summaries of currently active placements. Full details — project identity, sponsor information, financial projections — are disclosed exclusively upon mutual NDA and confirmed investment intent.
          </p>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
      </div>

      {/* Listings */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="space-y-6">
            {projects.map((p) => (
              <div
                key={p.code}
                className="grid grid-cols-1 lg:grid-cols-4 border border-stone-200 hover:border-brand-navy hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                {/* Blind visual panel */}
                <div className={`relative bg-gradient-to-br ${p.gradient} flex flex-col items-center justify-center py-12 lg:py-0 min-h-[160px]`}>
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                  <svg className="w-7 h-7 text-white/30 mb-2 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span className="text-brand-gold font-serif text-lg relative z-10">{p.code}</span>
                  <span className="text-white/30 text-xs tracking-widest uppercase relative z-10 mt-1">Confidential</span>
                </div>

                {/* Main info */}
                <div className="lg:col-span-2 p-8 border-l border-stone-200">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-xs bg-brand-cream text-brand-navy px-2.5 py-1 tracking-wide">{p.stage}</span>
                    <span className="text-xs text-slate-400">{p.type}</span>
                  </div>
                  <h2 className="font-serif text-xl text-brand-charcoal mb-1">{p.title}</h2>
                  <p className="text-slate-400 text-sm mb-5">{p.region}</p>

                  <ul className="space-y-2">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm text-slate-600">
                        <span className="w-1 h-1 rounded-full bg-brand-gold flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA panel */}
                <div className="border-l border-stone-200 flex flex-col items-center justify-center p-8 gap-4 bg-stone-50 group-hover:bg-brand-cream transition-colors">
                  <p className="font-serif text-2xl text-brand-navy text-center">{p.size}</p>
                  <p className="text-xs text-slate-400 text-center">Estimated Capital</p>
                  <Link
                    href={`/contact?project=${encodeURIComponent(p.code)}&title=${encodeURIComponent(p.title)}&region=${encodeURIComponent(p.region)}&size=${encodeURIComponent(p.size)}`}
                    className="w-full text-center border border-brand-navy text-brand-navy text-xs tracking-widest uppercase px-4 py-3 hover:bg-brand-navy hover:text-white transition-all duration-200"
                  >
                    Request Access
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 bg-brand-navy p-12 text-center">
            <p className="overline-label mb-4">Platform Membership</p>
            <h3 className="font-serif text-3xl text-white mb-4">Access Full Platform Membership</h3>
            <p className="text-stone-400 text-sm max-w-md mx-auto mb-8">
              Membership is by invitation following accreditation and mandate review. Submit your inquiry to begin.
            </p>
            <Link
              href="/contact?inquiry=membership"
              className="inline-block bg-brand-gold text-white text-xs tracking-widest uppercase px-8 py-4 hover:bg-amber-700 transition-colors"
            >
              Begin Investor Onboarding
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
