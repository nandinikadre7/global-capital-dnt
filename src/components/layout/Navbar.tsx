"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Strategy", href: "/strategy" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => pathname === href;

  // On hero (top): transparent + white text. After scroll: white bg + dark text.
  const transparent = !scrolled && pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        transparent
          ? "bg-white/80 backdrop-blur-md border-b border-white/30"
          : "bg-white shadow-sm border-b border-stone-200"
      }`}
    >
      <div className="w-full px-4 lg:px-6">
        <div className="flex items-center justify-between h-24">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/nav_bar_logo.png"
              alt="Global Investor Circle"
              width={110}
              height={96}
              className="h-24 w-auto object-contain transition-all duration-300"
              priority
            />
          </Link>

          {/* Desktop nav + Investor Login — all grouped on the right */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-cinzel text-sm font-medium uppercase tracking-wider transition-colors duration-200 ${
                  isActive(link.href)
                    ? "text-brand-navy border-b border-brand-gold pb-0.5"
                    : "text-slate-700 hover:text-brand-navy"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact?type=investor"
              className={`font-cinzel text-sm font-medium uppercase tracking-wider transition-colors duration-200 ${
                isActive("/contact?type=investor")
                  ? "text-brand-navy border-b border-brand-gold pb-0.5"
                  : "text-slate-700 hover:text-brand-navy"
              }`}
            >
              Investors
            </Link>
            <Link
              href="/project-owner"
              className={`font-cinzel text-sm font-medium uppercase tracking-wider transition-colors duration-200 ${
                isActive("/project-owner")
                  ? "text-brand-navy border-b border-brand-gold pb-0.5"
                  : "text-slate-700 hover:text-brand-navy"
              }`}
            >
              Project Owners
            </Link>
            <Link
              href="/contact"
              className={`font-cinzel text-sm font-medium uppercase tracking-wider transition-colors duration-200 ${
                isActive("/contact")
                  ? "text-brand-navy border-b border-brand-gold pb-0.5"
                  : "text-slate-700 hover:text-brand-navy"
              }`}
            >
              Contact
            </Link>
            <Link
              href="/blogs"
              className={`font-cinzel text-sm font-medium uppercase tracking-wider transition-colors duration-200 ${
                isActive("/blogs")
                  ? "text-brand-navy border-b border-brand-gold pb-0.5"
                  : "text-slate-700 hover:text-brand-navy"
              }`}
            >
              Blogs
            </Link>
            <Link
              href="/investor-login"
              className="font-cinzel text-sm font-medium uppercase tracking-wider px-5 py-2 border border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white transition-all duration-200"
            >
              Investor Login
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className={`lg:hidden p-2 transition-colors ${transparent ? "text-brand-charcoal" : "text-brand-charcoal"}`}
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu — always solid white */}
        {open && (
          <div className="lg:hidden bg-white border-t border-stone-100 py-6 space-y-3">
            {[...navLinks,
              { label: "Investors", href: "/contact?type=investor" },
              { label: "Project Owners", href: "/project-owner" },
              { label: "Contact", href: "/contact" },
              { label: "Blogs", href: "/blogs" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block font-cinzel text-sm font-medium uppercase tracking-wider py-1.5 ${
                  isActive(link.href) ? "text-brand-navy" : "text-slate-700"
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-stone-100">
              <Link
                href="/investor-login"
                className="inline-block font-cinzel text-sm font-medium uppercase tracking-wider border border-brand-navy text-brand-navy px-6 py-2.5 hover:bg-brand-navy hover:text-white transition-all"
                onClick={() => setOpen(false)}
              >
                Investor Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
