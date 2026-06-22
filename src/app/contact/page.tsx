import ContactForm from "@/components/contact/ContactForm";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Contact | Global Investor Circle",
  description: "Submit a confidential inquiry to Global Investor Circle.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-brand-navy pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-brand-gold" />
            <span className="overline-label text-brand-gold">Get In Touch</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl text-white leading-tight max-w-xl">
            Begin a Confidential Inquiry
          </h1>
          <p className="text-stone-400 mt-4 max-w-md leading-relaxed">
            All communications are handled with strict discretion. Your identity is never shared without explicit consent.
          </p>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
      </div>

      <div className="py-20 bg-brand-warm">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

            {/* Left — contact details */}
            <div className="lg:col-span-2 space-y-10">
              {/* Broker card */}
              <div className="bg-white border border-stone-200 p-8">
                <p className="overline-label mb-4">Licensed Representative</p>
                <p className="font-serif text-xl text-brand-charcoal mb-0.5">{siteConfig.broker}</p>
                <p className="text-brand-gold text-xs tracking-widest uppercase mb-5">
                  {siteConfig.brokerTitle} · {siteConfig.brokerCompany}
                </p>
                <div className="space-y-3 border-t border-stone-100 pt-5">
                  <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 text-sm text-slate-600 hover:text-brand-navy transition-colors">
                    <svg className="w-4 h-4 text-brand-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {siteConfig.phone}
                  </a>
                  <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-sm text-slate-600 hover:text-brand-navy transition-colors">
                    <svg className="w-4 h-4 text-brand-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {siteConfig.email}
                  </a>
                  <a
                    href={siteConfig.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-sm text-slate-600 hover:text-brand-navy transition-colors"
                  >
                    <svg className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {siteConfig.address}
                  </a>
                </div>
              </div>

              {/* Confidentiality note */}
              <div className="border-l-2 border-brand-gold pl-5">
                <p className="text-brand-charcoal font-semibold text-sm mb-2">Confidentiality Policy</p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  All inquiries are governed by strict confidentiality protocols. We do not share your information with third parties without your explicit prior consent.
                </p>
              </div>

              {/* Response time */}
              <div className="border-l-2 border-stone-300 pl-5">
                <p className="text-brand-charcoal font-semibold text-sm mb-2">Response Time</p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Qualified inquiries receive a personal response within 1–2 business days. All communications are handled directly by our team — not an automated system.
                </p>
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-3 bg-white border border-stone-200 p-8 md:p-10">
              <p className="font-serif text-2xl text-brand-charcoal mb-2">Send an Inquiry</p>
              <p className="text-slate-400 text-sm mb-8 pb-8 border-b border-stone-100">
                Please complete the form below. The more detail you provide, the more precisely we can match you to relevant opportunities or capital.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
