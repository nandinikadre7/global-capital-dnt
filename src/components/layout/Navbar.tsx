"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
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
          ? "bg-transparent border-b border-white/10"
          : "bg-white shadow-sm border-b border-stone-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">

          {/* Logo — invert to white when transparent */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Global Investor Circle"
              width={110}
              height={42}
              className={`h-10 w-auto object-contain transition-all duration-300 ${
                transparent ? "brightness-0 invert" : ""
              }`}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-medium tracking-wide transition-colors duration-200 ${
                  isActive(link.href)
                    ? transparent
                      ? "text-brand-gold border-b border-brand-gold pb-0.5"
                      : "text-brand-navy border-b border-brand-gold pb-0.5"
                    : transparent
                    ? "text-white/90 hover:text-white"
                    : "text-slate-700 hover:text-brand-navy"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact?type=investor"
              className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                transparent ? "text-white/80 hover:text-white" : "text-slate-600 hover:text-brand-navy"
              }`}
            >
              Investors
            </Link>
            <span className={transparent ? "text-white/30" : "text-stone-300"}>|</span>
            <Link
              href="/contact?type=owner"
              className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                transparent ? "text-white/80 hover:text-white" : "text-slate-600 hover:text-brand-navy"
              }`}
            >
              Project Owners
            </Link>
            <Link
              href="/contact"
              className={`ml-1 text-xs tracking-widest uppercase px-5 py-2.5 transition-all duration-200 ${
                transparent
                  ? "border border-white text-white hover:bg-white hover:text-brand-navy"
                  : "border border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className={`lg:hidden p-2 transition-colors ${transparent ? "text-white" : "text-brand-charcoal"}`}
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
          <div className="lg:hidden bg-white border-t border-stone-100 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block text-base py-1.5 tracking-wide font-medium ${
                  isActive(link.href) ? "text-brand-navy" : "text-slate-700"
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-stone-100 space-y-3">
              <Link href="/contact?type=investor" className="block text-sm text-slate-600 font-medium" onClick={() => setOpen(false)}>
                For Investors
              </Link>
              <Link href="/contact?type=owner" className="block text-sm text-slate-600 font-medium" onClick={() => setOpen(false)}>
                For Project Owners
              </Link>
              <Link
                href="/contact"
                className="inline-block border border-brand-navy text-brand-navy text-xs tracking-widest uppercase px-6 py-2.5 hover:bg-brand-navy hover:text-white transition-all"
                onClick={() => setOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
