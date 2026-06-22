interface SectionHeaderProps {
  overline?: string;
  heading: string;
  subtext?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeader({
  overline,
  heading,
  subtext,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {overline && (
        <p className="gold-overline mb-3">{overline}</p>
      )}
      <h2
        className={`text-3xl md:text-4xl font-bold leading-tight mb-4 ${
          light ? "text-white" : "text-brand-navy"
        }`}
      >
        {heading}
      </h2>
      {subtext && (
        <p
          className={`text-base md:text-lg leading-relaxed ${
            light ? "text-stone-300" : "text-slate-600"
          }`}
        >
          {subtext}
        </p>
      )}
    </div>
  );
}
