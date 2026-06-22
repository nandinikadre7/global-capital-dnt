"use client";
import { useState } from "react";
import { useInView } from "@/hooks/useInView";

const testimonials = [
  {
    quote: "They bypassed the noise of public markets and directly aligned us with institutional capital that fit our exact project profile. The level of confidentiality is unmatched.",
    author: "Principal",
    firm: "Developer Group",
    detail: "$50M+ AUM",
  },
  {
    quote: "Finding vetted, off-market infrastructure and solar opportunities is incredibly difficult. Global Investor Circle provides a highly curated, private channel that respects our time.",
    author: "Managing Director",
    firm: "Private Family Office",
    detail: "Institutional Allocator",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="py-28 bg-white border-t border-stone-100">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">

        <div
          className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="flex items-center justify-center gap-3 mb-14">
            <div className="gold-rule" />
            <span className="overline-label">Client Perspectives</span>
            <div className="gold-rule" />
          </div>

          {/* Quote */}
          <div className="text-center">
            <p className="font-serif text-2xl md:text-3xl text-brand-charcoal leading-relaxed italic mb-10 transition-all duration-500">
              &ldquo;{testimonials[active].quote}&rdquo;
            </p>
            <div className="w-10 h-px bg-brand-gold mx-auto mb-6" />
            <p className="text-brand-navy font-semibold text-sm tracking-wide">{testimonials[active].author}</p>
            <p className="text-slate-400 text-sm mt-1">{testimonials[active].firm} · {testimonials[active].detail}</p>
          </div>

          {/* Navigation dots */}
          <div className="flex items-center justify-center gap-3 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
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
