import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/CTABand";
import { Icon } from "@/components/icons";
import { materialCategories, notAccepted, materialsDisclaimer } from "@/data/services";

export const metadata: Metadata = {
  title: "Materials We Buy",
  description:
    "Full list of scrap metals we buy in Dubai: steel, iron, rebar, copper, brass, aluminum, stainless steel, lead, zinc, AC units, batteries, motors and more.",
};

export default function MaterialsPage() {
  return (
    <>
      {/* banner */}
      <section className="bg-graphite">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <span className="kicker">Materials We Buy</span>
          <h1 className="heading-xl mt-3 text-white">
            If It&apos;s Metal, <span className="text-molten">It&apos;s Money</span>
          </h1>
          <p className="mt-4 max-w-2xl text-gray-300">
            The complete list of what we buy — sorted or mixed, any quantity, collected
            anywhere in Dubai.
          </p>
        </div>
      </section>

      {/* categories */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {materialCategories.map((cat) => (
              <div key={cat.id} className="card overflow-hidden">
                <div className="flex items-center gap-4 border-b border-gray-100 bg-mist px-6 py-5">
                  <span className="icon-box icon-box--solid">
                    <Icon name={cat.icon} className="h-6 w-6" />
                  </span>
                  <div>
                    <h2 className="heading-sm text-graphite">{cat.title}</h2>
                    <p className="text-xs font-medium text-steel">{cat.note}</p>
                  </div>
                </div>
                <ul className="space-y-3 px-6 py-6">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-ink">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-eco" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* not accepted */}
          <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
            <div className="rounded-xl border border-red-200 bg-red-50 p-7">
              <h3 className="flex items-center gap-2.5 font-display text-xl font-semibold uppercase text-red-700">
                <XCircle className="h-5 w-5" /> What We Cannot Accept
              </h3>
              <ul className="mt-4 space-y-2.5">
                {notAccepted.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-red-900/80">
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-red-900/60">
                Not sure about your item? Ask us — if it contains metal, there&apos;s
                usually a safe, legal way for us to take it.
              </p>
            </div>

            {/* rates disclaimer */}
            <div className="card p-7">
              <h3 className="flex items-center gap-2.5 font-display text-xl font-semibold uppercase text-graphite">
                <AlertTriangle className="h-5 w-5 text-molten" /> About Rates &amp; Prices
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-steel">
                {materialsDisclaimer}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-steel">
                Rates depend on material grade, quantity and contamination levels. Sorted,
                clean material always earns the best price — see our{" "}
                <Link href="/how-it-works" className="font-semibold text-molten hover:text-copper">
                  how it works
                </Link>{" "}
                page for preparation tips.
              </p>
              <Link href="/contact" className="btn btn-primary mt-6">
                Get Today&apos;s Rate <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Send a Photo — Get a Rate"
        text="The fastest way to price unusual scrap: snap a picture, send it over, and we reply with a number."
      />
    </>
  );
}
