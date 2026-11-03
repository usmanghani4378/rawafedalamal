import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import QuoteForm from "@/components/QuoteForm";
import { WhatsAppGlyph } from "@/components/WhatsAppFloat";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact & Get a Quote",
  description: `Contact ${site.brand.legalName} — call ${site.contact.phoneDisplay}, email ${site.contact.email}, or send the quote form for scrap pickup anywhere in Dubai.`,
};

export default function ContactPage() {
  return (
    <>
      {/* banner */}
      <section className="bg-navy">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <span className="kicker">Contact Us</span>
          <h1 className="heading-xl mt-3 text-white">
            Get Your <span className="text-royal">Free Quote</span>
          </h1>
          <p className="mt-4 max-w-2xl text-gray-300">
            Tell us what scrap you have and where it is — we&apos;ll come back with
            today&apos;s rate and the earliest collection time.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[420px_1fr]">
          {/* contact info */}
          <div className="space-y-4">
            <a
              href={`tel:${site.contact.phoneHref}`}
              className="card flex items-center gap-4 p-5"
            >
              <span className="icon-box icon-box--solid">
                <Phone className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-xs font-bold uppercase tracking-wider text-steel">
                  Call Us
                </span>
                <span className="block text-lg font-bold text-navy">
                  {site.contact.phoneDisplay}
                </span>
              </span>
            </a>

            {site.contact.whatsapp && (
              <a
                href={`https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(
                  "Hello Rawafed Alamal, I would like a scrap metal quote."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="card flex items-center gap-4 p-5"
              >
                <span className="icon-box !bg-eco/10 !text-eco">
                  <WhatsAppGlyph className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-wider text-steel">
                    WhatsApp
                  </span>
                  <span className="block text-lg font-bold text-navy">
                    Chat With Us Now
                  </span>
                </span>
              </a>
            )}

            <a href={`mailto:${site.contact.email}`} className="card flex items-center gap-4 p-5">
              <span className="icon-box">
                <Mail className="h-6 w-6" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-bold uppercase tracking-wider text-steel">
                  Email
                </span>
                <span className="block truncate text-sm font-bold text-navy">
                  {site.contact.email}
                </span>
              </span>
            </a>

            <div className="card p-5">
              <div className="flex items-start gap-4">
                <span className="icon-box">
                  <MapPin className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-steel">
                    Registered Office
                  </p>
                  <p className="mt-1 text-sm font-medium leading-relaxed text-navy">
                    {site.contact.addressLines.map((l) => (
                      <span key={l} className="block">
                        {l}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-5">
              <div className="flex items-start gap-4">
                <span className="icon-box">
                  <Clock className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-steel">
                    Working Hours
                  </p>
                  <p className="mt-1 text-sm font-medium text-navy">
                    {site.contact.hours.map((h) => (
                      <span key={h.days} className="block">
                        <span className="text-steel">{h.days}:</span> {h.time}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-royal/40 bg-royal/10 p-5 text-sm leading-relaxed text-ink">
              <strong>Contractor or factory?</strong> Ask about account terms and
              scheduled weekly collections.
            </div>
          </div>

          {/* form */}
          <div>
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* map */}
      <section aria-label="Map" className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="overflow-hidden rounded-2xl ring-1 ring-gray-200">
            <iframe
              title={`${site.brand.name} location map`}
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                site.contact.mapQuery
              )}&z=15&output=embed`}
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
