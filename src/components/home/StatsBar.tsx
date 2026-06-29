"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "@/hooks/useInView";

function AnimatedStat({
  to,
  prefix = "",
  suffix = "",
  active,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  active: boolean;
}) {
  const [val, setVal] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!active || started.current) return;
    started.current = true;
    const duration = 1600;
    let startTime: number | null = null;

    const tick = (ts: number) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(eased * to));
      if (p < 1) requestAnimationFrame(tick);
      else setVal(to);
    };

    requestAnimationFrame(tick);
  }, [active, to]);

  return (
    <>
      {prefix}
      {val}
      {suffix}
    </>
  );
}

type Stat =
  | { type: "animated"; to: number; prefix: string; suffix: string; label: string }
  | { type: "static"; display: string; label: string };

const stats: Stat[] = [
  { type: "animated", to: 25, prefix: "$", suffix: "M+", label: "In Facilitated Placements" },
  { type: "animated", to: 150, prefix: "", suffix: "+", label: "Network Members" },
  { type: "animated", to: 20, prefix: "", suffix: "+", label: "Years of Experience" },
  { type: "static", display: "$5M – $100M+", label: "Deal Size Range" },
];

export default function StatsBar() {
  const { ref, inView } = useInView();

  return (
    <div ref={ref} className="bg-brand-navy border-t border-brand-gold/60">
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
              <p className="font-serif text-3xl text-white mb-1">
                {s.type === "animated" ? (
                  <AnimatedStat to={s.to} prefix={s.prefix} suffix={s.suffix} active={inView} />
                ) : (
                  s.display
                )}
              </p>
              <p className="text-stone-400 text-xs tracking-wide uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
