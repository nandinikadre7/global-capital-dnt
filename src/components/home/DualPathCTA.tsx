"use client";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "@/hooks/useInView";

const paths = [
  {
    overline: "For Investors",
    heading: "Access Private Placement Flow",
    body: "Gain entry to off-market, institutional-grade assets unavailable on any public platform — curated exclusively for accredited investors.",
    benefits: [
      "Residential portfolios, solar infrastructure & multifamily",
      "Pre-screened, blind deal summaries sent to your mandate",
      "Confidential introduction only after mutual NDA & intent",
      "Deals ranging from $5M to $100M+ across the US & globally",
    ],
    cta: "Begin Investor Onboarding",
    href: "/contact?type=investor",
    img: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=900&q=85",
  },
  {
    overline: "For Project Owners",
    heading: "Submit Your Capital Requirement",
    body: "Connect your development or acquisition to the right institutional capital partners — quietly, professionally, and on your timeline.",
    benefits: [
      "Equity, debt & JV connections across all project stages",
      "Blind profile prepared — your identity protected throughout",
      "Access to family offices, funds & cross-border allocators",
      "Early-stage land banking to stabilized cash-flowing assets",
    ],
    cta: "Submit Your Project",
    href: "/contact?type=owner",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=85",
  },
];

export default function DualPathCTA() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="py-28 bg-brand-warm">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
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

        {/* Two-column cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {paths.map((p, i) => (
            <div
              key={p.overline}
              className={`bg-white border border-stone-200 overflow-hidden group hover:shadow-xl transition-all duration-500 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Photo — contained, not full-bleed */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.overline}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                {/* Subtle dark overlay */}
                <div className="absolute inset-0 bg-black/25" />
                {/* Audience badge */}
                <div className="absolute top-5 left-5">
                  <span className="bg-brand-gold text-white text-xs tracking-widest uppercase px-3 py-1.5">
                    {p.overline}
                  </span>
                </div>
              </div>

              {/* Structured content */}
              <div className="p-8">
                <h3 className="font-serif text-2xl text-brand-charcoal leading-snug mb-3">
                  {p.heading}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-7 border-b border-stone-100 pb-7">
                  {p.body}
                </p>

                {/* Benefits list */}
                <ul className="space-y-3 mb-8">
                  {p.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-slate-600">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={p.href}
                  className="inline-block w-full text-center border border-brand-navy text-brand-navy text-xs tracking-widest uppercase px-6 py-3.5 hover:bg-brand-navy hover:text-white transition-all duration-200"
                >
                  {p.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
