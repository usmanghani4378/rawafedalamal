import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  FileCheck2,
  Landmark,
  MapPin,
  ScrollText,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import CTABand from "@/components/CTABand";
import { site } from "@/data/site";
import { ar } from "@/data/bilingual";

export const metadata: Metadata = {
  title: "License & Legal Details",
  description: `${site.brand.legalName} trade licence and registration details — DED Dubai Licence No. ${site.license.number}, ${site.license.activity}.`,
};

export default function LicensePage() {
  return (
    <>
      {/* banner */}
      <section className="bg-navy">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <span className="kicker">License &amp; Legal · <span lang="ar" className="ar-inline">الترخيص والبيانات القانونية</span></span>
          <h1 className="heading-xl mt-3 text-white">
            Verify Us Before You Sell
          </h1>
          <p className="mt-4 max-w-2xl text-gray-300">
            We&apos;re proud to be a registered, licensed business — and we encourage
            every customer to check. Here are our official details.
          </p>
          <p lang="ar" className="ar mt-3 max-w-2xl text-lg text-blue-100/70">
            {ar.banners.license}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* licence card */}
          <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
            <div className="flex items-center justify-between bg-navy px-7 py-5">
              <div className="flex items-center gap-3">
                <Landmark className="h-6 w-6 text-royal" />
                <h2 className="font-display text-xl font-bold uppercase tracking-wide text-white">
                  Certificate of Trade Licence
                </h2>
              </div>
              <span className="rounded-full bg-eco/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-eco ring-1 ring-eco/40">
                {site.license.status}
              </span>
            </div>
            <dl className="divide-y divide-gray-100">
              {[
                {
                  icon: Building2,
                  label: "Registered Company Name",
                  labelAr: "الاسم المسجل للشركة",
                  value: site.brand.legalName.toUpperCase(),
                  valueAr: ar.brand.legalName,
                },
                {
                  icon: BadgeCheck,
                  label: "Trade Licence Number",
                  labelAr: "رقم الرخصة التجارية",
                  value: site.license.number,
                  valueAr: "",
                },
                {
                  icon: Landmark,
                  label: "Issuing Authority",
                  labelAr: "الجهة المُصدِرة",
                  value: site.license.issuer,
                  valueAr: ar.license.issuer,
                },
                {
                  icon: ScrollText,
                  label: "Licensed Activity",
                  labelAr: "النشاط المرخّص",
                  value: site.license.activity,
                  valueAr: ar.license.activity,
                },
                {
                  icon: UserRound,
                  label: "Owner / Legal Representative",
                  labelAr: "المالك / الممثل القانوني",
                  value: site.license.registeredOwner,
                  valueAr: ar.license.owner,
                },
                {
                  icon: FileCheck2,
                  label: "Legal Form",
                  labelAr: "الشكل القانوني",
                  value: site.license.legalForm,
                  valueAr: ar.license.legalForm,
                },
                {
                  icon: MapPin,
                  label: "Registered Office",
                  labelAr: "المكتب المسجّل",
                  value: site.contact.addressLines.join(", "),
                  valueAr: ar.contact.address,
                },
                ...(site.license.municipalityPermit
                  ? [
                      {
                        icon: ShieldCheck,
                        label: "Dubai Municipality Waste Permit",
                        labelAr: "تصريح بلدية دبي للنفايات",
                        value: site.license.municipalityPermit,
                        valueAr: "",
                      },
                    ]
                  : []),
              ].map((row) => (
                <div
                  key={row.label}
                  className="grid gap-1 px-7 py-4 sm:grid-cols-[280px_1fr] sm:gap-4"
                >
                  <dt className="text-xs font-bold uppercase tracking-wider text-steel">
                    <span className="flex items-center gap-2">
                      <row.icon className="h-4 w-4 text-navy" /> {row.label}
                    </span>
                    <span lang="ar" className="ar-inline mt-0.5 block pl-6 text-[0.7rem] normal-case tracking-normal text-steel/80">
                      {row.labelAr}
                    </span>
                  </dt>
                  <dd className="text-sm font-medium text-ink">
                    {row.value}
                    {row.valueAr && (
                      <span lang="ar" className="ar mt-1 block text-xs text-steel">
                        {row.valueAr}
                      </span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* why it matters */}
          <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
            {[
              {
                title: "Why Licensing Matters",
                text: "Selling to a licensed trader protects you: documented transactions, compliant waste handling and a company that answers to regulators — not an anonymous pickup.",
              },
              {
                title: "Regulated Waste Trading",
                text: "Scrap and metal waste trading in Dubai requires DED registration and operates under Dubai Municipality waste-management regulations, which we follow in our yard, transport and documentation.",
              },
              {
                title: "Verify Independently",
                text: "Company registration details can be confirmed with the Dubai Department of Economic Development. Ask us for anything you need to complete your own vendor checks.",
              },
            ].map((item) => (
              <div key={item.title} className="card p-7">
                <h3 className="heading-sm text-navy">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-steel">{item.text}</p>
              </div>
            ))}
          </div>

          {/* vendor note */}
          <div className="mx-auto mt-10 max-w-5xl rounded-xl border border-gray-200 bg-white p-6 text-sm leading-relaxed text-ink">
            <strong>For contractors &amp; procurement teams:</strong> we regularly
            complete vendor-onboarding for main contractors and government suppliers.
            <Link href="/contact" className="ml-1 inline-flex items-center gap-1 font-semibold text-royal hover:text-royal-dark">
              Request our company documents <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTABand
        title="Deal With a Company, Not a Guess"
        text="Licensed, registered and ready to collect — get today's rate for your scrap."
      />
    </>
  );
}
