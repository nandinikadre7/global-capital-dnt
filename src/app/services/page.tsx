import Link from "next/link";

export const metadata = {
  title: "Services | Global Investor Circle",
  description:
    "Investor capital connections, project showcase, strategic partnerships, and our private opportunity network — institutional standards at every step.",
};

const services = [
  {
    n: "01",
    title: "Investor & Capital Connections",
    short: "Precise, confidential connections between accredited investors and qualified project sponsors across equity, debt, and hybrid capital structures.",
    process: [
      "Investor mandate intake & criteria documentation",
      "Internal deal review & asset class alignment",
      "Blind teaser sent to pre-screened investors",
      "Mutual NDA → controlled data room access",
      "Warm introduction & legal advisor handoff",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Project Showcase & Investor Exposure",
    short: "Institutional projects marketed to qualified investors under strict privacy — blind summaries protect identity while maximizing reach to targeted capital.",
    process: [
      "Project submission & feasibility review",
      "Institutional-grade blind profile prepared",
      "Targeted distribution to mandate-matched investors",
      "Expressions of interest collected & verified",
      "Controlled disclosure after confirmed mutual intent",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Strategic Partnership Facilitation",
    short: "Tier-one operators connected with cross-border capital and regional development partners — joint ventures, co-development agreements, and long-term alliances.",
    process: [
      "Partner mandate definition & objective alignment",
      "Cross-border network activation",
      "Confidential introduction with NDA protocols",
      "Term sheet facilitation & governance alignment",
      "Ongoing relationship management & deal flow",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    n: "04",
    title: "Private Investment Opportunity Network",
    short: "An invite-only digital ecosystem for accredited entities — curated, continuously updated off-market deal flow matched to your investment mandate.",
    process: [
      "Membership application & accreditation review",
      "Investment mandate documentation & onboarding",
      "Personalized dashboard with matched deal flow",
      "Regular portfolio updates & new opportunity alerts",
      "Priority access to time-sensitive placements",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-brand-navy pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-brand-gold" />
            <span className="overline-label text-brand-gold">Our Services</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl text-white leading-tight max-w-2xl">
            Capital Market Services
          </h1>
          <p className="text-stone-400 mt-4 max-w-xl leading-relaxed">
            Four core service verticals. Institutional standards. Absolute discretion.
          </p>
        </div>
      </div>

      {/* Services grid */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-stone-200">
            {services.map((s) => (
              <div key={s.n} className="bg-white p-10 hover:bg-brand-warm transition-colors duration-300 group">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 bg-brand-navy/5 rounded flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-all duration-300">
                    {s.icon}
                  </div>
                  <span className="font-serif text-5xl text-stone-100 group-hover:text-stone-200 transition-colors select-none">
                    {s.n}
                  </span>
                </div>

                <h2 className="font-serif text-2xl text-brand-charcoal mb-3">{s.title}</h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 border-b border-stone-100 pb-8">
                  {s.short}
                </p>

                {/* Process */}
                <p className="overline-label mb-4">Process</p>
                <ol className="space-y-2.5">
                  {s.process.map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                      <span className="w-5 h-5 rounded-full border border-brand-gold text-brand-gold flex items-center justify-center text-xs flex-shrink-0 font-semibold mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>

          {/* CTA strip */}
          <div className="mt-16 border border-stone-200 p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-serif text-2xl text-brand-charcoal mb-1">Ready to get started?</p>
              <p className="text-slate-500 text-sm">All engagements begin with a confidential inquiry.</p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 border border-brand-navy text-brand-navy text-xs tracking-widest uppercase px-8 py-4 hover:bg-brand-navy hover:text-white transition-all duration-200"
            >
              Begin a Confidential Inquiry
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
