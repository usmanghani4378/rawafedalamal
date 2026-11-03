import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, Phone } from "lucide-react";
import CTABand from "@/components/CTABand";
import { Icon } from "@/components/icons";
import { services } from "@/data/services";
import { site } from "@/data/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return { title: service.title, description: service.short };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== slug);

  return (
    <>
      {/* banner */}
      <section className="relative">
        <Image src={service.image} alt="" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <span className="icon-box icon-box--solid">
            <Icon name={service.icon} className="h-6 w-6" />
          </span>
          <h1 className="heading-xl mt-4 text-white">{service.title}</h1>
          <p className="mt-4 max-w-2xl text-gray-300">{service.short}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_380px]">
          {/* main */}
          <div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-steel hover:text-royal"
            >
              <ArrowLeft className="h-4 w-4" /> All services
            </Link>
            <h2 className="heading-lg mt-6 text-navy">What&apos;s Included</h2>
            <p className="mt-4 leading-relaxed text-steel">{service.description}</p>

            <ul className="mt-8 space-y-3">
              {service.bullets.map((b) => (
                <li
                  key={b}
                  className="card flex items-start gap-3 p-4 text-sm font-medium text-ink"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-eco" />
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="heading-sm text-navy">Have material for this service?</h3>
              <p className="mt-2 text-sm text-steel">
                Send your list and location — we reply with today&apos;s rate and the
                earliest collection slot.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href="/contact" className="btn btn-primary">
                  Request a Quote <ArrowRight className="h-4 w-4" />
                </Link>
                <a href={`tel:${site.contact.phoneHref}`} className="btn btn-outline-light !border-gray-300 !text-navy hover:!border-royal hover:!text-royal">
                  <Phone className="h-4 w-4" /> {site.contact.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

          {/* sidebar: other services */}
          <aside>
            <h3 className="heading-sm text-navy">Other Services</h3>
            <div className="mt-5 space-y-4">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/services/${o.slug}`}
                  className="card group flex items-center gap-4 p-4"
                >
                  <span className="icon-box">
                    <Icon name={o.icon} className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-navy group-hover:text-royal">
                      {o.title}
                    </span>
                    <span className="mt-0.5 line-clamp-1 block text-xs text-steel">
                      {o.short}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <CTABand />
    </>
  );
}
