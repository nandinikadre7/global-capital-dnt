"use client";
import { useState, useEffect, useRef } from "react";
import { useInView } from "@/hooks/useInView";

const testimonials = [
  {
    quote:
      "They bypassed the noise of public markets and directly aligned us with institutional capital that fit our exact project profile. The level of confidentiality is unmatched.",
    author: "Principal",
    firm: "Developer Group",
    detail: "$50M+ AUM",
  },
  {
    quote:
      "Finding vetted, off-market infrastructure and solar opportunities is incredibly difficult. Global Investor Circle provides a highly curated, private channel that respects our time.",
    author: "Managing Director",
    firm: "Private Family Office",
    detail: "Institutional Allocator",
  },
  {
    quote:
      "The caliber of introductions is unlike anything available in the public market. Every connection is mandate-specific, pre-vetted, and handled with complete discretion.",
    author: "Investment Director",
    firm: "Institutional Family Office",
    detail: "Multi-Market Allocator",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const { ref, inView } = useInView();
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
  };

  const stopTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, []);

  return (
    <section
      ref={ref}
      className="py-28 bg-white border-t border-stone-100"
      onMouseEnter={stopTimer}
      onMouseLeave={startTimer}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <div
          className={`transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-14">
            <div className="gold-rule" />
            <span className="overline-label">Client Perspectives</span>
            <div className="gold-rule" />
          </div>

          {/* Quote area */}
          <div className="text-center relative">
            {/* Decorative quotation mark */}
            <span
              className="absolute -top-6 left-1/2 -translate-x-1/2 font-serif text-8xl text-brand-gold/10 leading-none select-none pointer-events-none"
              aria-hidden="true"
            >
              &ldquo;
            </span>

            <p
              key={active}
              className="relative font-serif text-2xl md:text-3xl text-brand-charcoal leading-relaxed italic mb-10 animate-fade-in"
            >
              &ldquo;{testimonials[active].quote}&rdquo;
            </p>

            <div className="w-10 h-px bg-brand-gold mx-auto mb-6" />
            <p className="text-brand-navy font-semibold text-sm tracking-wide">
              {testimonials[active].author}
            </p>
            <p className="text-slate-400 text-sm mt-1">
              {testimonials[active].firm} · {testimonials[active].detail}
            </p>
          </div>

          {/* Navigation dots */}
          <div className="flex items-center justify-center gap-3 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  stopTimer();
                  setActive(i);
                  startTimer();
                }}
                className={`transition-all duration-300 ${
                  i === active
                    ? "w-8 h-0.5 bg-brand-navy"
                    : "w-2 h-0.5 bg-stone-300 hover:bg-stone-400"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
