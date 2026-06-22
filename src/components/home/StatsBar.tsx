"use client";
import { useInView } from "@/hooks/useInView";

const stats = [
  { value: "$200M+", label: "In Facilitated Placements" },
  { value: "150+",   label: "Network Members" },
  { value: "20+",    label: "Years of Experience" },
  { value: "$5M–$100M+", label: "Typical Deal Size" },
];

export default function StatsBar() {
  const { ref, inView } = useInView();

  return (
    <div ref={ref} className="bg-brand-navy">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`py-10 px-8 text-center transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <p className="font-serif text-3xl text-white mb-1">{s.value}</p>
              <p className="text-stone-400 text-xs tracking-wide uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
