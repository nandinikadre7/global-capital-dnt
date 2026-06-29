import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blogs | Global Investor Circle",
  description: "Insights and perspectives from the Global Investor Circle team — coming soon.",
};

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-brand-warm flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-px bg-brand-gold" />
          <span className="overline-label text-brand-gold">Insights & Perspectives</span>
          <div className="w-8 h-px bg-brand-gold" />
        </div>

        <h1 className="font-serif text-5xl md:text-6xl text-brand-charcoal mb-4">
          Coming Soon
        </h1>

        <p className="text-slate-500 text-base leading-relaxed mb-10">
          Our blog is under development. Check back shortly for market insights, investment perspectives, and platform updates.
        </p>

        <Link
          href="/"
          className="inline-block border border-brand-navy text-brand-navy text-xs tracking-widest uppercase px-8 py-3.5 hover:bg-brand-navy hover:text-white transition-all duration-200"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
