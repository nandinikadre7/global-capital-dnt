"use client";
import Image from "next/image";
import { teamMembers } from "@/lib/team-data";
import { useInView } from "@/hooks/useInView";

export default function TeamGrid() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="py-28 bg-brand-warm">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div
          className={`mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="gold-rule" />
            <span className="overline-label">Our Team</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-brand-charcoal">
            The People Behind the Platform
          </h2>
        </div>

        <div className="flex justify-center"><div className="w-full max-w-xs">
          {teamMembers.map((member, i) => (
            <div
              key={member.name}
              className={`group transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Photo */}
              <div className="relative w-full mb-5 bg-stone-200">
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Hover contact overlay — only for members with contact info */}
                {member.email && (
                  <div className="absolute inset-0 bg-brand-navy/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 p-4">
                    <a href={`mailto:${member.email}`} className="text-white text-xs tracking-wide hover:text-brand-gold transition-colors text-center break-all">
                      {member.email}
                    </a>
                    {member.phone && (
                      <a href={`tel:${member.phone}`} className="text-stone-300 text-sm hover:text-brand-gold transition-colors">
                        {member.phone}
                      </a>
                    )}
                  </div>
                )}
              </div>

              <p className="font-serif text-lg text-brand-charcoal mb-0.5 text-center">{member.name}</p>
              <p className="text-brand-gold text-xs tracking-widest uppercase mb-1 text-center">{member.role}</p>
              <p className="text-slate-400 text-xs mb-3 text-center">{member.company}</p>
              <p className="text-slate-500 text-sm leading-relaxed text-center">{member.bio}</p>
            </div>
          ))}
        </div></div>
      </div>
    </section>
  );
}
