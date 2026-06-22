interface ServiceCardProps {
  overline: string;
  title: string;
  description: string;
  operationalScope: string;
  strategicProcess: string[];
  icon: React.ReactNode;
  reverse?: boolean;
}

export default function ServiceCard({
  overline,
  title,
  description,
  operationalScope,
  strategicProcess,
  icon,
  reverse = false,
}: ServiceCardProps) {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start py-16 border-b border-stone-200 last:border-0 ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div className={reverse ? "lg:order-2" : ""}>
        <div className="w-14 h-14 bg-brand-navy/5 rounded-lg flex items-center justify-center mb-6">
          {icon}
        </div>
        <p className="gold-overline mb-2">{overline}</p>
        <h2 className="text-2xl md:text-3xl font-bold text-brand-navy leading-tight mb-4">
          {title}
        </h2>
        <p className="text-slate-600 leading-relaxed">{description}</p>
      </div>

      <div className={`space-y-6 ${reverse ? "lg:order-1" : ""}`}>
        {/* Operational Scope */}
        <div className="bg-stone-50 border border-stone-200 rounded-lg p-6">
          <h4 className="text-brand-navy font-semibold text-sm uppercase tracking-wide mb-3">
            Operational Scope
          </h4>
          <p className="text-slate-600 text-sm leading-relaxed">{operationalScope}</p>
        </div>

        {/* Strategic Process */}
        <div className="bg-white border border-stone-200 rounded-lg p-6">
          <h4 className="text-brand-navy font-semibold text-sm uppercase tracking-wide mb-4">
            Strategic Process
          </h4>
          <ol className="space-y-3">
            {strategicProcess.map((step, i) => (
              <li key={i} className="flex gap-3 text-sm text-slate-600">
                <span className="w-5 h-5 rounded-full bg-brand-gold text-white text-xs flex items-center justify-center flex-shrink-0 font-bold mt-0.5">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
