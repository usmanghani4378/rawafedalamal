import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/CTABand";
import { Icon } from "@/components/icons";
import { steps, faqs } from "@/data/content";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Selling scrap metal in Dubai in 4 steps: contact us, get today's rate, we collect, weigh on certified scales and pay instantly. Plus FAQ.",
};

const tips = [
  "Sort your metals if you can — separated copper, brass and aluminum earn more than mixed loads.",
  "Keep cables insulated if stripping is hard; we also buy insulated cable at adjusted rates.",
  "Have the scrap accessible — ground-floor or gate-side access speeds up loading.",
  "Send photos with your enquiry for the most accurate indicative rate.",
];

export default function HowItWorksPage() {
  return (
    <>
      {/* banner */}
      <section className="bg-navy">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <span className="kicker">How It Works</span>
          <h1 className="heading-xl mt-3 text-white">
            From Call to Cash in <span className="text-royal">4 Steps</span>
          </h1>
          <p className="mt-4 max-w-2xl text-gray-300">
            No accounts, no paperwork marathons, no waiting for transfers. This is how
            selling scrap should work.
          </p>
        </div>
      </section>

      {/* steps */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div key={step.title} className="card relative p-7">
                <span className="absolute right-6 top-5 font-display text-5xl font-bold text-royal/25">
                  {i + 1}
                </span>
                <span className="icon-box icon-box--solid">
                  <Icon name={step.icon} className="h-6 w-6" />
                </span>
                <h2 className="heading-sm mt-5 text-navy">{step.title}</h2>
                <p className="mt-2.5 text-sm leading-relaxed text-steel">{step.text}</p>
              </div>
            ))}
          </div>

          {/* transparency promise */}
          <div className="mt-14 grid gap-6 rounded-2xl bg-navy p-8 sm:p-10 lg:grid-cols-[auto_1fr] lg:items-center">
            <span className="icon-box icon-box--solid mx-auto h-16 w-16 !rounded-2xl">
              <CheckCircle2 className="h-8 w-8" />
            </span>
            <div className="text-center lg:text-left">
              <h2 className="heading-sm text-white">Our Transparency Promise</h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                The weighbridge slip shows the exact weight; the rate is agreed before
                loading; and payment leaves the same conversation. If anything on your
                slip doesn&apos;t match what we said, you&apos;re free to walk away — no
                hard feelings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* prep tips */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            center
            kicker="Pro Tips"
            title="Get More For Your Scrap"
            intro="A little preparation can noticeably raise your rate."
          />
          <div className="mx-auto mt-12 max-w-3xl space-y-4">
            {tips.map((tip) => (
              <div key={tip} className="flex items-start gap-3.5 rounded-xl bg-mist p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-eco" />
                <p className="text-sm leading-relaxed text-ink">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <SectionHeading center kicker="FAQ" title="Frequently Asked Questions" />
          <div className="faq card mt-12 px-7 py-2">
            {faqs.map((f) => (
              <details key={f.q}>
                <summary className="text-ink">{f.q}</summary>
                <p className="faq-a">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/contact" className="btn btn-primary">
              Ask Us Anything <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
