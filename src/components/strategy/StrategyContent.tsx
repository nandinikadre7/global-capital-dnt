"use client";
import { useInView } from "@/hooks/useInView";

// ─── Data ────────────────────────────────────────────────────────────────────

const assetClasses = [
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

const criteriabadges = [
  { label: "Deal Size", value: "$5M – $100M+" },
  { label: "Geography", value: "US & Global" },
  { label: "Project Stage", value: "All Lifecycles" },
];

const processSteps = [
  {
    n: "01",
    title: "Mandate Intake & Documentation",
    desc: "Investor mandates and project requirements are documented with precision. We establish exact criteria — asset class, deal size, geography, return profile — before any matching begins.",
  },
  {
    n: "02",
    title: "Deal Origination & Feasibility Review",
    desc: "Projects and investment opportunities are sourced and evaluated for institutional fit, financial feasibility, and deal mechanics. Only qualified opportunities move forward.",
  },
  {
    n: "03",
    title: "Blind Profile Preparation",
    desc: "Non-identifying summaries are prepared to the highest institutional standard — protecting all parties while presenting the opportunity's essential merits clearly.",
  },
  {
    n: "04",
    title: "Strategic Mandate Matching",
    desc: "Blind profiles are distributed exclusively to investors whose mandates align with the specific opportunity. No mass broadcasts, no irrelevant introductions.",
  },
  {
    n: "05",
    title: "Confidential Introduction & Handoff",
    desc: "Upon confirmed mutual interest and executed NDA, a warm, one-on-one introduction is made. Both parties connect directly, professionally, and on their own timeline.",
  },
];

const infrastructure = [
  {
    title: "Deal Origination",
    desc: "Proprietary sourcing of off-market real estate and infrastructure opportunities",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: "Investor Vetting",
    desc: "Accreditation review and mandate documentation for all network members",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Blind Profile Prep",
    desc: "Institutional-grade non-identifying deal summaries for every opportunity",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Mandate Matching",
    desc: "Precision alignment of investor criteria to project parameters",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
      </svg>
    ),
  },
  {
    title: "NDA Protocols",
    desc: "Structured confidentiality agreements before any identity or deal detail is disclosed",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: "Controlled Disclosure",
    desc: "Identity and full details released only upon confirmed, mutual investment interest",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: "Capital Introduction",
    desc: "Professional warm handoff connecting investor directly with project owner",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Reporting",
    desc: "Transparent updates throughout the engagement process for all parties",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Relationship Management",
    desc: "Ongoing support for long-term capital network growth and deal flow continuity",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

// ─── Section Components ───────────────────────────────────────────────────────

function Philosophy() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left — text */}
          <div
            className={`transition-all duration-700 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="gold-rule" />
              <span className="overline-label">Our Philosophy</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-charcoal leading-tight mb-8">
              Built on Discretion.<br />Executed with Precision.
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Global Investor Circle was founded on a single conviction: the most consequential capital transactions in real estate and infrastructure should never happen in the open market. The best deals are quiet, private, and structured between trusted parties.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We operate as a confidential intermediary — connecting accredited investors with carefully vetted, off-market project opportunities that never reach public platforms. Every introduction is preceded by thorough vetting. Every deal is structured to protect all parties.
            </p>
          </div>

          {/* Right — pull quote */}
          <div
            className={`transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="border border-stone-200 border-l-4 border-l-brand-gold p-10 bg-brand-warm">
              <span className="font-serif text-6xl text-brand-gold/20 leading-none block mb-4">&ldquo;</span>
              <p className="font-serif text-2xl text-brand-charcoal italic leading-relaxed mb-8">
                The most significant capital transactions should never happen in public. We exist to ensure they don&apos;t.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-brand-gold" />
                <span className="overline-label">GIC Investment Philosophy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InvestmentFocus() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="py-28 bg-brand-warm">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div
          className={`text-center max-w-xl mx-auto mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="gold-rule" />
            <span className="overline-label">What We Focus On</span>
            <div className="gold-rule" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-brand-charcoal leading-tight">
            Asset Classes & Criteria
          </h2>
        </div>

        {/* Chip grid */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-14 transition-all duration-700 delay-100 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {assetClasses.map((a) => (
            <span
              key={a}
              className="px-5 py-3 border border-stone-200 bg-white text-slate-600 text-sm hover:bg-brand-navy hover:text-white hover:border-brand-navy transition-all duration-200 cursor-default"
            >
              {a}
            </span>
          ))}
        </div>

        {/* Criteria badges */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-3 gap-px bg-stone-200 border border-stone-200 transition-all duration-700 delay-200 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {criteriabadges.map((c) => (
            <div key={c.label} className="bg-white py-8 px-6 text-center">
              <p className="font-serif text-2xl text-brand-navy mb-1">{c.value}</p>
              <p className="text-slate-400 text-xs tracking-widest uppercase">{c.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div
          className={`max-w-xl mb-20 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="gold-rule" />
            <span className="overline-label">The Process</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-brand-charcoal leading-tight">
            From Intake to Introduction
          </h2>
        </div>

        {/* Vertical timeline */}
        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-6 top-2 bottom-2 w-px bg-brand-gold/25 hidden md:block" />

          <div className="space-y-0">
            {processSteps.map((step, i) => (
              <div
                key={step.n}
                className={`relative grid grid-cols-1 md:grid-cols-[80px_1fr] gap-6 md:gap-12 pb-12 transition-all duration-700 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${100 + i * 150}ms` }}
              >
                {/* Step number */}
                <div className="flex md:flex-col items-center gap-4 md:gap-0">
                  <div className="relative z-10 w-12 h-12 rounded-full bg-brand-navy flex items-center justify-center flex-shrink-0">
                    <span className="font-serif text-brand-gold text-sm font-bold">{step.n}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="pb-0 group">
                  <div className="border border-stone-200 p-8 hover:border-brand-gold/40 hover:shadow-md transition-all duration-300">
                    <h3 className="font-serif text-xl text-brand-charcoal mb-3 group-hover:text-brand-navy transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Infrastructure() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="py-28 bg-brand-navy">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div
          className={`text-center max-w-xl mx-auto mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px bg-brand-gold" />
            <span className="overline-label text-brand-gold">How We Operate</span>
            <div className="w-8 h-px bg-brand-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">
            The GIC Platform
          </h2>
        </div>

        {/* 3×3 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {infrastructure.map((item, i) => (
            <div
              key={item.title}
              className={`group bg-brand-navy p-8 border border-transparent hover:border-brand-gold/40 hover:-translate-y-0.5 transition-all duration-300 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="w-10 h-10 flex items-center justify-center border border-brand-gold/25 group-hover:border-brand-gold group-hover:bg-brand-gold/10 mb-5 transition-all duration-300">
                <div className="text-brand-gold/50 group-hover:text-brand-gold transition-colors duration-300">
                  {item.icon}
                </div>
              </div>
              <p className="font-serif text-base text-white mb-2">{item.title}</p>
              <p className="text-stone-500 text-xs leading-relaxed group-hover:text-stone-400 transition-colors duration-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Export ──────────────────────────────────────────────────────────────────

export default function StrategyContent() {
  return (
    <>
      <Philosophy />
      <InvestmentFocus />
      <Process />
      <Infrastructure />
    </>
  );
}
