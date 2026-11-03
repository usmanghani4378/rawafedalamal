"use client";

/* Sticky site header: top info bar + main nav. Mobile hamburger menu. */
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Clock, Mail, Menu, Phone, X } from "lucide-react";
import Logo from "@/components/Logo";
import { site } from "@/data/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // close mobile menu when navigating
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50">
      {/* ── top info bar ── */}
      <div className="hidden bg-graphite text-gray-300 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5 text-xs">
          <div className="flex items-center gap-5">
            <a
              href={`mailto:${site.contact.email}`}
              className="flex items-center gap-1.5 hover:text-molten"
            >
              <Mail className="h-3.5 w-3.5 text-molten" />
              {site.contact.email}
            </a>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-molten" />
              {site.contact.hoursShort}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <BadgeIcon />
            <span>
              DED Trade Licence <strong className="text-white">{site.license.number}</strong>
            </span>
          </div>
        </div>
      </div>

      {/* ── main nav bar ── */}
      <div className="border-b border-line bg-graphite/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link href="/" aria-label="Home">
            <Logo />
          </Link>

          {/* desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {site.nav.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    active ? "text-molten" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href={`tel:${site.contact.phoneHref}`}
              className="hidden items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-molten xl:flex"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-molten/15">
                <Phone className="h-4 w-4 text-molten" />
              </span>
              {site.contact.phoneDisplay}
            </a>
            <Link href="/contact" className="btn btn-primary !px-4 !py-2.5 text-sm">
              Get a Quote
            </Link>
            {/* mobile hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="flex h-10 w-10 items-center justify-center rounded-md text-white lg:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* mobile menu */}
        {open && (
          <nav className="border-t border-line bg-graphite px-4 pb-5 pt-2 lg:hidden">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block border-b border-line/60 py-3 text-sm font-medium text-gray-200 hover:text-molten"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${site.contact.phoneHref}`}
              className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-iron py-3 text-sm font-semibold text-white"
            >
              <Phone className="h-4 w-4 text-molten" /> {site.contact.phoneDisplay}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}

function BadgeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-molten" fill="currentColor">
      <path d="M12 1l2.4 2.4 3.4-.5.9 3.3 3 1.6-1.2 3.2 1.2 3.2-3 1.6-.9 3.3-3.4-.5L12 21l-2.4-2.4-3.4.5-.9-3.3-3-1.6 1.2-3.2L2.3 7.8l3-1.6.9-3.3 3.4.5L12 1zm-1.2 13.9l5.3-5.3-1.4-1.4-3.9 3.9-1.7-1.7-1.4 1.4 3.1 3.1z" />
    </svg>
  );
}
