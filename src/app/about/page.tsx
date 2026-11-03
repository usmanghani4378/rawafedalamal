import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Eye, HeartHandshake, Leaf, ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/CTABand";
import { ar } from "@/data/bilingual";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `${site.brand.legalName} — a DED-licensed scrap & metal waste trading company based in Deira, Dubai. Learn about our mission, values and compliance.`,
};

export default function AboutPage() {
  return (
    <>
      {/* page banner */}
      <section className="relative">
        <Image src={site.images.about} alt="" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:py-20 sm:px-6">
          <span className="kicker">About Us · <span lang="ar" className="ar-inline">من نحن</span></span>
          <h1 className="heading-xl mt-3 text-white">The Company Behind the Trucks</h1>
          <p className="mt-4 max-w-2xl text-gray-300">
            A registered Dubai business doing scrap the right way — licensed, transparent
            and built for long-term relationships.
          </p>
          <p lang="ar" className="ar mt-3 max-w-2xl text-lg text-blue-100/70">
            {ar.banners.about}
          </p>
        </div>
      </section>

      {/* story */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 lg:gap-12 sm:px-6 lg:grid-cols-2">
          <div>
            <SectionHeading
              kicker="Our Story"
              title="Built in Dubai, for Dubai's Metal Waste"
            />
            <div className="mt-6 space-y-4 leading-relaxed text-steel">
              <p>
                {site.brand.legalName} was established to bring professional, licensed
                trading to a market too often dominated by informal dealers. From our
                base in Al Khabeesi, Deira, we buy scrap and metal waste from every
                corner of Dubai — construction sites, factories, warehouses, offices and
                homes.
              </p>
              <p>
                Our promise is simple: honest scales, market-linked rates, instant
                payment and full compliance with the regulations that govern waste
                trading in the emirate. Every kilo we buy re-enters the metals supply
                chain as raw material — value recovered instead of space lost in
                landfill.
              </p>
              <p>
                Whether you&apos;re a demolition contractor with tonnes of steel or a
                household clearing out a few old AC units, you get the same professional
                service.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={site.images.about}
              alt="Rawafed Alamal facility"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* vision / mission / values */}
      <section className="bg-navy py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading center dark kicker="What Drives Us" title="Vision, Mission & Values" />
          <div className="mt-10 sm:mt-14 grid gap-6 md:grid-cols-3">
            <div className="card-dark p-5 sm:p-7">
              <span className="icon-box"><Eye className="h-6 w-6" /></span>
              <h3 className="heading-sm mt-5 text-white">Our Vision</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-gray-400">
                To be Dubai&apos;s most trusted scrap and metal waste trading house — the
                first name contractors and residents think of when metal needs to move.
              </p>
            </div>
            <div className="card-dark p-5 sm:p-7">
              <span className="icon-box"><HeartHandshake className="h-6 w-6" /></span>
              <h3 className="heading-sm mt-5 text-white">Our Mission</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-gray-400">
                To make selling scrap effortless: one call, fair weighing, instant
                payment, full compliance — for every customer, at every quantity.
              </p>
            </div>
            <div className="card-dark p-5 sm:p-7">
              <span className="icon-box"><Leaf className="h-6 w-6" /></span>
              <h3 className="heading-sm mt-5 text-white">Our Values</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-gray-400">
                Honesty on the scale. Respect for every customer. Safety for our team.
                Responsibility to the environment we all share.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* compliance strip */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="card grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-[auto_1fr_auto]">
            <span className="icon-box icon-box--solid h-16 w-16 !rounded-2xl">
              <ShieldCheck className="h-8 w-8" />
            </span>
            <div>
              <h2 className="heading-sm text-navy">Licensed &amp; Accountable</h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-steel">
                {site.brand.legalName} — {site.license.legalForm}. Registered with the{" "}
                {site.license.issuer}, Trade Licence No.{" "}
                <strong className="text-navy">{site.license.number}</strong>. Our
                operations follow Dubai Municipality waste-trading regulations.
              </p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {[
                  "Verifiable trade licence",
                  "Compliant waste handling",
                  "Registered commercial premises",
                  "Documented transactions",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-ink">
                    <CheckCircle2 className="h-4 w-4 text-eco" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <Link href="/license" className="btn btn-primary">
              License Details <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* HSE */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            center
            kicker="HSE"
            title="Health, Safety & Environment"
            intro="Scrap is heavy, sharp and industrial. We run our yard and collections so that our team, our customers and the city stay safe."
          />
          <div className="mx-auto mt-8 sm:mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
            {[
              {
                title: "Safety First",
                text: "Trained crews, proper lifting equipment and protective gear on every job — from villas to demolition sites.",
              },
              {
                title: "Clean Operations",
                text: "Sorted, organized yard bays and covered transport keep material contained and neighbourhoods clean.",
              },
              {
                title: "100% Recovery",
                text: "Everything we buy is routed to recycling — keeping metal waste out of Dubai's landfill.",
              },
            ].map((item) => (
              <div key={item.title} className="card p-4 sm:p-6 text-center">
                <h3 className="heading-sm text-navy">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-steel">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Put a Licensed Trader on Your Next Load"
        text="Contractors, factories and dealers — ask about account terms and scheduled collections."
      />
    </>
  );
}
