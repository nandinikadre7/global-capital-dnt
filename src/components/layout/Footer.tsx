import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const links = [
  { label: "Investors", href: "/contact?type=investor" },
  { label: "Project Owners", href: "/contact?type=owner" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 pb-16 border-b border-white/10">

          {/* Brand col */}
          <div className="md:col-span-1">
            <Image
              src="/logo.png"
              alt="Global Investor Circle"
              width={140}
              height={52}
              className="h-12 w-auto object-contain brightness-0 invert mb-6"
            />
            <p className="text-stone-400 text-sm leading-relaxed max-w-xs">
              {siteConfig.tagline}. A private investment platform for qualified investors and institutional developers.
            </p>
          </div>

          {/* Nav col */}
          <div>
            <p className="overline-label mb-6">Platform</p>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-stone-400 hover:text-white text-sm transition-colors tracking-wide">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact col */}
          <div>
            <p className="overline-label mb-6">Contact</p>
            <div className="space-y-4">
              <div>
                <p className="text-white font-semibold text-sm">{siteConfig.broker}</p>
                <p className="text-stone-500 text-xs mt-0.5">{siteConfig.brokerTitle} · {siteConfig.brokerCompany}</p>
              </div>
              <a href={`tel:${siteConfig.phone}`} className="block text-stone-400 hover:text-white text-sm transition-colors">
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="block text-stone-400 hover:text-white text-sm transition-colors">
                {siteConfig.email}
              </a>
              <a
                href={siteConfig.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-stone-400 hover:text-white text-sm transition-colors leading-relaxed"
              >
                {siteConfig.address}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-stone-600 text-xs">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-stone-600 text-xs text-center md:text-right max-w-md leading-relaxed">
            {siteConfig.legalDisclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
