import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Investor Login | Global Investor Circle",
  description: "Secure investor portal — coming soon.",
};

export default function InvestorLoginPage() {
  return (
    <main className="min-h-screen bg-brand-navy flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-px bg-brand-gold" />
          <span className="overline-label text-brand-gold">Investor Portal</span>
          <div className="w-8 h-px bg-brand-gold" />
        </div>

        <h1 className="font-serif text-5xl md:text-6xl text-white mb-4">
          Coming Soon
        </h1>

        <p className="text-stone-400 text-base leading-relaxed mb-10">
          The secure investor portal is currently being built. In the meantime, please reach out directly to access your account.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact?type=investor"
            className="inline-block bg-brand-gold text-white text-xs tracking-widest uppercase px-8 py-3.5 hover:bg-amber-700 transition-colors duration-200"
          >
            Contact Us
          </Link>
          <Link
            href="/"
            className="inline-block border border-white/50 text-white text-xs tracking-widest uppercase px-8 py-3.5 hover:bg-white hover:text-brand-charcoal transition-all duration-200"
          >
            Return Home
          </Link>
        </div>
      </div>
    </main>
  );
}
