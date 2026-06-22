import CompanyStory from "@/components/about/CompanyStory";
import TeamGrid from "@/components/about/TeamGrid";

export const metadata = {
  title: "About Us | Global Investor Circle",
  description:
    "Learn about Global Investor Circle — a private investment platform built on institutional-grade confidentiality and precision capital introductions.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative bg-brand-navy pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-brand-gold" />
            <span className="overline-label text-brand-gold">About Us</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl text-white leading-tight max-w-xl">
            A Private Platform.<br />An Institutional Standard.
          </h1>
          <p className="text-stone-400 mt-5 max-w-lg leading-relaxed">
            Founded on a single conviction: the most significant capital transactions in real estate should never happen in public.
          </p>
        </div>
        {/* Gold bottom rule */}
        <div className="h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
      </div>

      <CompanyStory />
      <TeamGrid />
    </>
  );
}
