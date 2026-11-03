/* Big call-to-action band used near the bottom of pages. */
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { WhatsAppGlyph } from "@/components/WhatsAppFloat";
import { site } from "@/data/site";
import { ar } from "@/data/bilingual";

export default function CTABand({
  title = "Got Scrap? Get Today's Rate.",
  titleAr = ar.cta.title,
  text = "One call or message is all it takes — tell us what you have and where it is, and we handle the rest.",
  textAr = ar.cta.text,
}: {
  title?: string;
  titleAr?: string;
  text?: string;
  textAr?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <Image
        src={site.images.cta}
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-navy/85" />
      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
        <h2 className="heading-lg text-white">{title}</h2>
        {titleAr && (
          <p lang="ar" className="ar mt-2 text-2xl font-bold text-blue-200/90">
            {titleAr}
          </p>
        )}
        <p className="mx-auto mt-4 max-w-xl text-gray-300">{text}</p>
        {textAr && (
          <p lang="ar" className="ar mx-auto mt-2 max-w-xl text-blue-100/60">
            {textAr}
          </p>
        )}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="/contact" className="btn btn-primary">
            Get a Free Quote
          </Link>
          <a href={`tel:${site.contact.phoneHref}`} className="btn btn-outline-light">
            <Phone className="h-4 w-4" /> {site.contact.phoneDisplay}
          </a>
          {site.contact.whatsapp && (
            <a
              href={`https://wa.me/${site.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-eco"
            >
              <WhatsAppGlyph className="h-4 w-4" /> WhatsApp
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
