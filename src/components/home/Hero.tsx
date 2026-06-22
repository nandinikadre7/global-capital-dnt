import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Full-bleed background image */}
      <Image
        src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1920&q=85"
        alt="Financial district"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Warm dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/20" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="max-w-2xl">
          {/* Overline */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-brand-gold" />
            <span className="overline-label text-brand-gold">Private Investment Platform</span>
          </div>

          {/* Headline — serif, editorial */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-6">
            Global Investor<br />
            <em className="not-italic text-brand-gold">Circle</em>
          </h1>

          <p className="text-stone-300 text-lg leading-relaxed mb-10 max-w-lg">
            Confidential introductions between qualified investors and institutional developers — off-market, by invitation only.
          </p>

          {/* CTAs — brokerage style (outlined, not flashy) */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact?type=investor"
              className="inline-block bg-brand-gold text-white text-sm tracking-widest uppercase px-8 py-4 hover:bg-amber-700 transition-colors duration-200"
            >
              Access Investor Platform
            </Link>
            <Link
              href="/contact?type=owner"
              className="inline-block border border-white text-white text-sm tracking-widest uppercase px-8 py-4 hover:bg-white hover:text-brand-charcoal transition-all duration-200"
            >
              Submit Capital Requirement
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom caption bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-stone-400 text-xs tracking-wide">
            Serving accredited investors and institutional capital — United States & Global Markets
          </p>
          <p className="text-stone-500 text-xs">
            Joe Dodani · Associate Broker · eXp Realty · Scottsdale, AZ
          </p>
        </div>
      </div>
    </section>
  );
}
