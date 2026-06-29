import Link from "next/link";
import StrategyContent from "@/components/strategy/StrategyContent";

export const metadata = {
  title: "Strategy | Global Investor Circle",
  description:
    "A disciplined, confidential approach to private capital connections — from mandate intake to institutional introduction. Learn how Global Investor Circle operates.",
};

export default function StrategyPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative bg-brand-navy pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-brand-gold" />
            <span className="overline-label text-brand-gold">Investment Strategy</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl text-white leading-tight max-w-2xl mb-6">
            A Disciplined Approach<br />to Private Capital
          </h1>
          <p className="text-stone-400 max-w-lg leading-relaxed">
            Every engagement follows a structured, confidential process — from initial intake to the final introduction. No shortcuts. No public exposure. Institutional standards at every step.
          </p>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
      </div>

      {/* Animated content sections */}
      <StrategyContent />

      {/* CTA Strip */}
      <div className="py-24 bg-brand-warm">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="border border-stone-200 p-12 max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="gold-rule" />
              <span className="overline-label">Begin an Engagement</span>
              <div className="gold-rule" />
            </div>
            <h3 className="font-serif text-3xl text-brand-charcoal mb-4">
              Ready to Connect?
            </h3>
            <p className="text-slate-500 text-sm mb-10 max-w-md mx-auto leading-relaxed">
              All engagements begin with a confidential inquiry. Submit yours to start the process — your information stays private at every stage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact?type=investor"
                className="inline-block bg-brand-gold text-white text-xs tracking-widest uppercase px-8 py-4 hover:bg-amber-700 transition-colors duration-200"
              >
                Access Investor Platform
              </Link>
              <Link
                href="/project-owner"
                className="inline-block border border-brand-navy text-brand-navy text-xs tracking-widest uppercase px-8 py-4 hover:bg-brand-navy hover:text-white transition-all duration-200"
              >
                Submit Your Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
