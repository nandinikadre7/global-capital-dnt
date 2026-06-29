import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <Image
        src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1920&q=85"
        alt="Global Investor Circle — Private Investment Platform"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay — stronger on left for legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full py-20">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-brand-gold" />
            <span className="overline-label text-brand-gold">Private Investment Platform</span>
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-[4.5rem] text-white leading-[1.05] mb-6">
            Global Investor<br />
            <em className="not-italic text-brand-gold">Circle</em>
          </h1>

          <p className="text-stone-300 text-lg leading-relaxed mb-10 max-w-md">
            Confidential introductions between qualified investors and institutional developers — off-market, by invitation only.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact?type=investor"
              className="inline-block bg-brand-gold text-white text-sm tracking-widest uppercase px-8 py-4 hover:bg-amber-700 transition-colors duration-200 text-center"
            >
              Access Investor Platform
            </Link>
            <Link
              href="/contact?type=owner"
              className="inline-block border border-white/70 text-white text-sm tracking-widest uppercase px-8 py-4 hover:bg-white hover:text-brand-charcoal transition-all duration-200 text-center"
            >
              Submit Capital Requirement
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60">
        <span className="text-stone-400 text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="animate-bounce">
          <svg className="w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
