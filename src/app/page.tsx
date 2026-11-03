/* HOME — the landing page. Section order & strategy documented in ROADMAP.md. */
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  MapPin,
  Phone,
  Quote,
  ShieldCheck,
  Star,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/CTABand";
import GalleryGrid from "@/components/GalleryGrid";
import { Icon } from "@/components/icons";
import { site } from "@/data/site";
import { ar } from "@/data/bilingual";
import { services, materialCategories } from "@/data/services";
import { steps, reasons, gallery, testimonials } from "@/data/content";

export default function HomePage() {
  return (
    <>
      {/* ═══════════ 1) HERO ═══════════ */}
      <section className="relative flex min-h-[88vh] items-center">
        <Image
          src={site.images.hero}
          alt="Rawafed Alamal scrap metal yard in Dubai"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/40" />
        <div className="relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6">
          <div className="max-w-2xl">
            <p className="fade-up kicker">{site.brand.tagline}</p>
            <h1 className="fade-up fade-up-1 heading-xl mt-4 text-white">
              We Buy Your Scrap Metal.{" "}
              <span className="text-royal">Fairly Weighed. Instantly Paid.</span>
            </h1>
            <p className="fade-up fade-up-2 mt-6 max-w-xl text-lg leading-relaxed text-gray-300">
              {site.brand.legalName} is a licensed Dubai company buying ferrous and
              non-ferrous scrap from contractors, factories, dealers and households —
              with pickup across the emirate and same-day payment.
            </p>
            <p
              lang="ar"
              className="ar fade-up fade-up-2 mt-3 max-w-xl text-lg text-blue-100/70"
            >
              {ar.hero.paragraph}
            </p>
            <div className="fade-up fade-up-3 mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary">
                Get a Free Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={`tel:${site.contact.phoneHref}`} className="btn btn-outline-light">
                <Phone className="h-4 w-4" /> {site.contact.phoneDisplay}
              </a>
            </div>
            <div className="fade-up fade-up-4 mt-9 flex flex-wrap gap-2.5">
              <span className="chip">
                <BadgeCheck className="h-4 w-4 text-royal" />
                DED Licence {site.license.number}
              </span>
              <span className="chip">
                <ShieldCheck className="h-4 w-4 text-royal" />
                Municipality Compliant
              </span>
              <span className="chip">
                <MapPin className="h-4 w-4 text-royal" />
                Pickup Across Dubai
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ 2) TRUST / STATS BAND ═══════════ */}
      <section className="bg-royal">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 sm:px-6 lg:grid-cols-4">
          {site.stats.map((s, i) => (
            <div key={s.label} className="text-center lg:text-left">
              <p className="font-display text-3xl font-bold uppercase text-navy sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-sm font-semibold text-navy/75">{s.label}</p>
              {ar.stats[i] && (
                <p lang="ar" className="ar-inline text-xs font-bold text-navy/60">
                  {ar.stats[i]}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════ 3) SERVICES ═══════════ */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              kicker="What We Do"
              title="Complete Scrap Metal Services"
              titleAr={ar.sections.services}
              intro="From a single pickup load to full container exports — one licensed partner for everything your scrap needs."
            />
            <Link
              href="/services"
              className="hidden items-center gap-1.5 font-semibold text-navy hover:text-royal sm:inline-flex"
            >
              All services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="card group p-6">
                <span className="icon-box">
                  <Icon name={s.icon} className="h-6 w-6" />
                </span>
                <h3 className="heading-sm mt-5 text-navy group-hover:text-royal">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-steel">{s.short}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-royal">
                  Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
            {/* CTA card */}
            <div className="card flex flex-col justify-between bg-navy p-6">
              <div>
                <span className="icon-box icon-box--solid">
                  <Phone className="h-6 w-6" />
                </span>
                <h3 className="heading-sm mt-5 text-white">Not Sure What You Have?</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-gray-400">
                  Send us a photo of your scrap on WhatsApp and we&apos;ll tell you what
                  it&apos;s worth.
                </p>
              </div>
              <Link href="/contact" className="btn btn-primary mt-6">
                Ask Us — It&apos;s Free
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ 4) MATERIALS PREVIEW ═══════════ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            center
            kicker="Materials We Buy"
            title="If It's Metal, We'll Buy It"
            titleAr={ar.sections.materials}
            intro="We purchase the full range of ferrous and non-ferrous metals — sorted or mixed, any quantity."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {materialCategories.map((cat) => (
              <div key={cat.id} className="card p-7">
                <div className="flex items-center gap-3.5">
                  <span className="icon-box">
                    <Icon name={cat.icon} className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="heading-sm text-navy">{cat.title}</h3>
                    <p className="text-xs font-medium text-steel">{cat.note}</p>
                  </div>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {cat.items.slice(0, 4).map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-eco" />
                      {item}
                    </li>
                  ))}
                </ul>
                {cat.items.length > 4 && (
                  <p className="mt-3 text-xs font-medium text-steel">
                    + {cat.items.length - 4} more — see full list
                  </p>
                )}
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/materials" className="btn btn-dark">
              View All Materials &amp; Rates Info <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ 5) HOW IT WORKS ═══════════ */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            center
            kicker="How It Works"
            title="Scrap Gone in 4 Simple Steps"
            titleAr={ar.sections.how}
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div key={step.title} className="relative">
                {/* connector line */}
                {i < steps.length - 1 && (
                  <span className="absolute left-[calc(50%+3rem)] top-8 hidden h-0.5 w-[calc(100%-6rem)] bg-gradient-to-r from-royal/60 to-transparent lg:block" />
                )}
                <div className="flex flex-col items-center text-center">
                  <div className="relative">
                    <span className="icon-box icon-box--solid h-16 w-16 !rounded-2xl">
                      <Icon name={step.icon} className="h-8 w-8" />
                    </span>
                    <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-navy font-display text-sm font-bold text-royal ring-2 ring-mist">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="heading-sm mt-5 text-navy">{step.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-steel">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/how-it-works" className="font-semibold text-royal hover:text-royal-dark">
              More details &amp; FAQ →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ 6) WHY CHOOSE US (dark) ═══════════ */}
      <section className="bg-navy py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            center
            dark
            kicker="Why Rawafed Alamal"
            title="The Licensed Way to Sell Your Scrap"
            titleAr={ar.sections.why}
            intro="Anyone with a pickup truck can offer to buy your metal. Here's what you get with a registered Dubai trading company."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r) => (
              <div key={r.title} className="card-dark p-7">
                <span className="icon-box">
                  <Icon name={r.icon} className="h-6 w-6" />
                </span>
                <h3 className="heading-sm mt-5 text-white">{r.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-gray-400">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 7) ABOUT TEASER ═══════════ */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={site.images.about}
                alt="Inside the Rawafed Alamal scrap trading facility"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 rounded-xl bg-royal px-6 py-5 shadow-xl sm:right-6">
              <p className="font-display text-2xl font-bold uppercase leading-none text-navy">
                Dubai
              </p>
              <p className="mt-1 text-xs font-semibold text-navy/70">
                Registered &amp; Operating Locally
              </p>
            </div>
          </div>
          <div>
            <SectionHeading
              kicker="About Us"
              title="A Dubai Scrap House You Can Verify"
              titleAr={ar.sections.about}
              intro={`${site.brand.legalName} is a registered single-owner limited liability company based in Deira, Dubai, trading scrap and metal waste under DED licence ${site.license.number}.`}
            />
            <ul className="mt-6 space-y-3">
              {[
                "Registered with Dubai DED — licence you can verify",
                "Operating in line with Dubai Municipality waste-trading rules",
                "Serving contractors, factories, dealers & households",
                "Transparent weighing and same-day payment, every load",
              ].map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-ink">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-eco" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/about" className="btn btn-dark">
                Our Story
              </Link>
              <Link href="/license" className="btn btn-outline-light !border-gray-300 !text-navy hover:!border-royal hover:!text-royal">
                <ShieldCheck className="h-4 w-4" /> View License Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ 8) GALLERY PREVIEW ═══════════ */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              kicker="Our Work"
              title="Recent Collections & Yard Work"
              titleAr={ar.sections.gallery}
            />
            <Link
              href="/gallery"
              className="hidden items-center gap-1.5 font-semibold text-navy hover:text-royal sm:inline-flex"
            >
              Full gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10">
            <GalleryGrid items={gallery.slice(0, 6)} />
          </div>
        </div>
      </section>

      {/* ═══════════ 9) TESTIMONIALS (renders only when added in content.ts) ═══════════ */}
      {testimonials.length > 0 && (
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <SectionHeading center kicker="Testimonials" title="What Our Clients Say" />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {testimonials.map((t) => (
                <figure key={t.name} className="card p-7">
                  <Quote className="h-7 w-7 text-royal" />
                  <blockquote className="mt-4 text-sm leading-relaxed text-ink">
                    {t.text}
                  </blockquote>
                  <figcaption className="mt-5 flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-royal text-royal" />
                    ))}
                  </figcaption>
                  <p className="mt-2 text-sm font-semibold text-navy">{t.name}</p>
                  <p className="text-xs text-steel">{t.role}</p>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════ 10) FINAL CTA ═══════════ */}
      <CTABand />
    </>
  );
}
