import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/CTABand";
import { services } from "@/data/services";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Scrap metal buying, site collection & haulage, sorting and baling, trading & export, demolition site clearance — across Dubai, UAE.",
};

export default function ServicesPage() {
  return (
    <>
      {/* banner */}
      <section className="bg-graphite">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <span className="kicker">Our Services</span>
          <h1 className="heading-xl mt-3 text-white">
            Everything Your Scrap <span className="text-molten">Needs</span>
          </h1>
          <p className="mt-4 max-w-2xl text-gray-300">
            Five services, one licensed partner — from the first phone call to the final
            payment or shipped container.
          </p>
        </div>
      </section>

      {/* service list */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6">
          {services.map((s, i) => (
            <div
              key={s.slug}
              className={`grid items-center gap-10 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div>
                <span className="kicker">{`0${i + 1}`}</span>
                <h2 className="heading-lg mt-3 text-graphite">{s.title}</h2>
                <p className="mt-4 leading-relaxed text-steel">{s.short}</p>
                <ul className="mt-5 space-y-2.5">
                  {s.bullets.slice(0, 3).map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-ink">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-eco" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link href={`/services/${s.slug}`} className="btn btn-dark mt-7">
                  Service Details <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* areas served */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            center
            kicker="Coverage"
            title="We Collect From Every Corner of Dubai"
            intro="Based in Deira and collecting across the emirate — these are just some of the areas we serve daily."
          />
          <div className="mt-10 flex flex-wrap justify-center gap-2.5">
            {site.seo.areasServed.map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-1.5 rounded-full bg-mist px-4 py-2 text-sm font-medium text-ink ring-1 ring-gray-200"
              >
                <MapPin className="h-3.5 w-3.5 text-molten" /> {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Book a Collection Today"
        text="Tell us what you have and where it is — we'll handle the loading, weighing and payment."
      />
    </>
  );
}
