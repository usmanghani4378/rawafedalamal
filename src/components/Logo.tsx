/* Logo: hand-coded SVG mark (recycle arrows around an ingot) + wordmark.
   To use your own logo image instead, see docs/editing-guide.md. */
import { site } from "@/data/site";

export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <rect width="48" height="48" rx="10" fill="#1F6FEB" />
      {/* recycle-style triangle arrows */}
      <g stroke="#0A1C36" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 10.5l5.6 9.7" />
        <path d="M35.2 28.5l-4.2-7.3" />
        <path d="M17 21.2l-4.2 7.3" />
        <path d="M12.8 28.5h11.4" />
        <path d="M29.6 30.4l2.3-4 2.3 4z" fill="#0A1C36" />
        <path d="M24 37.5H13.4l2.3-4h4.6" />
        <path d="M29.7 33.5l4.6 0 2.3 4h-9.2" />
      </g>
    </svg>
  );
}

export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark className="h-9 w-9 sm:h-10 sm:w-10" />
      <span className="leading-none">
        <span
          className={`block font-display text-xl sm:text-2xl font-bold uppercase tracking-wide ${
            dark ? "text-navy" : "text-white"
          }`}
        >
          {site.brand.name}
        </span>
        <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-royal">
          Scrap &amp; Metal Trading
        </span>
      </span>
    </span>
  );
}
