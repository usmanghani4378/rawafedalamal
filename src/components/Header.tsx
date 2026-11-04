"use client";

/* Sticky site header: slim info bar + simple one-line nav.
   Desktop nav (5 links) appears at >=1024px; below that, hamburger menu. */
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import Logo from "@/components/Logo";
import { site } from "@/data/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // close mobile menu on navigation + lock page scroll while open
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      {/* ── slim info bar (tablets and up) ── */}
      <div className="hidden border-b border-line/60 bg-navy text-xs text-gray-400 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5">
          <span>{site.contact.hoursShort} · Al Khabeesi, Deira, Dubai</span>
          <span>
            DED Trade Licence{" "}
            <strong className="font-semibold text-white">{site.license.number}</strong>
          </span>
        </div>
      </div>

      {/* ── main nav bar ── */}
      <div className="border-b border-line bg-navy/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6">
          <Link href="/" aria-label="Home" className="shrink-0">
            <Logo />
          </Link>

          {/* desktop nav — 5 links, always one line */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {site.nav.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    active ? "text-royal" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2.5">
            <a
              href={`tel:${site.contact.phoneHref}`}
              className="hidden items-center gap-2 whitespace-nowrap text-sm font-semibold text-white transition-colors hover:text-royal xl:flex"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-royal/15">
                <Phone className="h-4 w-4 text-royal" />
              </span>
              {site.contact.phoneDisplay}
            </a>
            {/* mobile hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="flex h-10 w-10 items-center justify-center rounded-md text-white lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* mobile menu */}
        {open && (
          <nav
            className="border-t border-line bg-navy px-4 pb-6 pt-2 lg:hidden"
            aria-label="Mobile"
          >
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block whitespace-nowrap border-b border-line/60 py-3.5 text-base font-medium text-gray-200 hover:text-royal"
              >
                {item.label}
              </Link>
            ))}
            {/* secondary pages */}
            <div className="flex flex-wrap gap-2 pt-4">
              {site.footerNav
                .filter((i) => !site.nav.some((n) => n.href === i.href))
                .map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="whitespace-nowrap rounded-full bg-navy-light px-3.5 py-2 text-xs font-semibold text-gray-300 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
            </div>
            {/* primary CTA inside the mobile menu */}
            <Link href="/contact" className="btn btn-primary mt-4 w-full">
              Get a Quote
            </Link>
            <a
              href={`tel:${site.contact.phoneHref}`}
              className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-navy-light py-3.5 text-base font-semibold text-white"
            >
              <Phone className="h-5 w-5 text-royal" /> {site.contact.phoneDisplay}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
