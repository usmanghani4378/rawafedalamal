/* Site footer: brand, quick links, services, contact + license strip. */
import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Logo from "@/components/Logo";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { ar } from "@/data/bilingual";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-gray-400">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        {/* brand */}
        <div>
          <Logo />
          <p lang="ar" className="ar mt-3 text-lg font-bold text-white/90">
            {ar.brand.name}
          </p>
          <p className="mt-3 text-sm leading-relaxed">
            {site.brand.legalName} — a DED-licensed scrap &amp; metal waste trading
            company in Dubai. Fair weighing, instant payment, collection across the
            emirate.
          </p>
          <p lang="ar" className="ar mt-2 text-xs leading-relaxed text-gray-400">
            {ar.footer.line}
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-md border border-line bg-navy-light px-3 py-2 text-xs">
            <span className="h-2 w-2 rounded-full bg-eco" />
            <span>
              DED Trade Licence <strong className="text-white">{site.license.number}</strong>
            </span>
          </div>
        </div>

        {/* quick links */}
        <div>
          <h4 className="font-display text-lg font-semibold uppercase tracking-wide text-white">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {site.footerNav
              .filter((i) => i.href !== "/")
              .map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-royal">
                    {item.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        {/* services */}
        <div>
          <h4 className="font-display text-lg font-semibold uppercase tracking-wide text-white">
            Our Services
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="transition-colors hover:text-royal"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* contact */}
        <div>
          <h4 className="font-display text-lg font-semibold uppercase tracking-wide text-white">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-royal" />
              <span>
                {site.contact.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </li>
            <li>
              <a
                href={`tel:${site.contact.phoneHref}`}
                className="flex gap-2.5 hover:text-royal"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-royal" />
                {site.contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.contact.email}`}
                className="flex gap-2.5 break-all hover:text-royal"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-royal" />
                {site.contact.email}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-royal" />
              <span>
                {site.contact.hours.map((h) => (
                  <span key={h.days} className="block">
                    {h.days}: {h.time}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* bottom bar */}
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs sm:flex-row sm:px-6">
          <p>
            © {year} {site.brand.legalName}. All rights reserved.
          </p>
          <p className="text-gray-500">
            Licensed in Dubai, UAE · {site.license.issuerShort} Licence{" "}
            {site.license.number}
          </p>
          <p className="flex gap-4">
            <Link href="/privacy" className="hover:text-royal">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-royal">
              Terms
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
