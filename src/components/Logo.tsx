/* Logo: company logo image + wordmark. To swap the logo, simply replace
   public/images/logo.png (square, transparent PNG works best). */
import Image from "next/image";
import { site } from "@/data/site";
import { ar } from "@/data/bilingual";

export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <Image
        src="/images/logo.png"
        alt={`${site.brand.name} logo`}
        width={44}
        height={44}
        priority
        className="h-9 w-9 object-contain sm:h-11 sm:w-11"
      />
      <span className="leading-none">
        <span className="flex items-baseline gap-2">
          <span
            className={`block whitespace-nowrap font-display text-xl font-bold uppercase tracking-wide sm:text-2xl ${
              dark ? "text-navy" : "text-white"
            }`}
          >
            {site.brand.name}
          </span>
          <span
            lang="ar"
            className={`ar-inline hidden whitespace-nowrap text-base font-bold xl:inline ${
              dark ? "text-navy/80" : "text-white/85"
            }`}
          >
            {ar.brand.name}
          </span>
        </span>
        <span
          className={`mt-0.5 block whitespace-nowrap text-[0.6rem] font-semibold uppercase tracking-[0.28em] ${
            dark ? "text-steel" : "text-gray-400"
          }`}
        >
          Scrap &amp; Metal Trading
        </span>
      </span>
    </span>
  );
}
