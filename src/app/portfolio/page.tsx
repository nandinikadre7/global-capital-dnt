import Link from "next/link";

export const metadata = {
  title: "Portfolio | Global Investor Circle",
  description:
    "Private, off-market investment opportunities — available exclusively to qualified, pre-screened network members.",
};

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

      {/* Portfolio Content */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-brand-charcoal mb-8">
                Building Tomorrow&apos;s Investment Portfolio
              </h2>

              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  Our portfolio is focused on quality over quantity. Having recently completed a successful Arizona land syndication, we are actively sourcing and evaluating our next generation of investment opportunities. Rather than filling this page with past transactions, we believe investors deserve access to carefully selected projects with strong fundamentals, experienced partners, and meaningful long-term potential.
                </p>

                <p>
                  As new opportunities become available, they will be presented here for qualified investors and development partners. Our focus remains on identifying exceptional land, residential, commercial, hospitality, and income-producing real estate opportunities that offer attractive risk-adjusted returns. We invite investors, developers, and strategic partners to follow our journey as we continue to build a portfolio designed for sustainable growth and long-term value.
                </p>
              </div>
            </div>
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
