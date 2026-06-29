import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const exploreLeft = [
  { label: "Home", href: "/" },
  { label: "Strategy", href: "/strategy" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
];

const exploreRight = [
  { label: "Investors", href: "/contact?type=investor" },
  { label: "Project Owners", href: "/project-owner" },
  { label: "Contact", href: "/contact" },
  { label: "Blogs", href: "/blogs" },
  { label: "Investor Login", href: "/investor-login" },
];

export default function Footer() {
  return (
    <footer className="bg-[#2e2e2e] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-10">

        {/* Main 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 pb-16 border-b border-white/10">

          {/* Col 1 — Logo */}
          <div className="flex items-start">
            <Image
              src="/nav_bar_logo.png"
              alt="Global Investor Circle"
              width={320}
              height={300}
              className="w-72 h-auto object-contain"
            />
          </div>

          {/* Col 2 — About + Contact */}
          <div className="flex flex-col gap-10">
            <div>
              <p className="overline-label mb-5">About</p>
              <p className="text-stone-300 text-sm leading-relaxed">
                {siteConfig.description}
              </p>
            </div>

            <div>
              <p className="overline-label mb-5">Contact</p>
              <div className="space-y-3">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-stone-300 hover:text-white text-sm transition-colors"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {siteConfig.email}
                </a>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-3 text-stone-300 hover:text-white text-sm transition-colors"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {siteConfig.phone}
                </a>
                <a
                  href={siteConfig.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-stone-300 hover:text-white text-sm transition-colors leading-relaxed"
                >
                  <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {siteConfig.address}
                </a>
                <div className="pt-1">
                  <p className="text-white text-sm font-semibold">{siteConfig.broker}</p>
                  <p className="text-stone-500 text-xs mt-0.5">{siteConfig.brokerTitle} · {siteConfig.brokerCompany}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Col 3 — Explore */}
          <div>
            <p className="overline-label mb-5">Explore</p>
            <div className="grid grid-cols-2 gap-x-8">
              <ul className="space-y-3">
                {exploreLeft.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-stone-300 hover:text-white text-sm transition-colors tracking-wide">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {exploreRight.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-stone-300 hover:text-white text-sm transition-colors tracking-wide">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 pb-8 border-b border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-stone-500 text-xs">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" aria-label="X / Twitter" className="text-stone-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="text-stone-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="text-stone-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Legal disclaimer */}
        <div className="pt-6">
          <p className="text-stone-600 text-xs leading-relaxed">
            {siteConfig.legalDisclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
