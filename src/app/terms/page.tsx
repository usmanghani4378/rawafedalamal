import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Trade",
  description: `Terms of trade of ${site.brand.legalName}.`,
};

export default function TermsPage() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <span className="kicker">Legal</span>
        <h1 className="heading-lg mt-3 text-navy">Terms of Trade</h1>
        <p className="mt-2 text-sm text-steel">Last updated: November 2026</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-ink">
          <p>
            These terms apply to all scrap and metal waste purchases made by{" "}
            {site.brand.legalName} (&quot;we&quot;, &quot;us&quot;) from sellers in the
            UAE.
          </p>
          <div>
            <h2 className="heading-sm text-navy">1. Ownership &amp; Right to Sell</h2>
            <p className="mt-2">
              By offering material to us, you confirm that you own it or are authorised
              to sell it, and that it is not stolen or subject to any dispute. We may
              refuse or report any transaction where ownership is unclear.
            </p>
          </div>
          <div>
            <h2 className="heading-sm text-navy">2. Pricing</h2>
            <p className="mt-2">
              Rates are agreed before or at the point of collection and depend on
              material type, grade, weight and market prices on the day. Quotations are
              indicative until material is inspected and weighed.
            </p>
          </div>
          <div>
            <h2 className="heading-sm text-navy">3. Weighing &amp; Payment</h2>
            <p className="mt-2">
              All material is weighed on certified scales. Payment is made immediately
              after weighing, in cash or by bank transfer, as agreed with the seller.
            </p>
          </div>
          <div>
            <h2 className="heading-sm text-navy">4. Prohibited Materials</h2>
            <p className="mt-2">
              We do not accept hazardous, medical, radioactive or otherwise prohibited
              waste. Where such material is discovered in a delivered load, the load may
              be rejected and returned at the seller&apos;s cost.
            </p>
          </div>
          <div>
            <h2 className="heading-sm text-navy">5. Compliance</h2>
            <p className="mt-2">
              We operate under DED Trade Licence {site.license.number} and in line with
              applicable UAE and Dubai Municipality regulations. Sellers may be asked
              for identification as required by law.
            </p>
          </div>
          <div>
            <h2 className="heading-sm text-navy">6. Contact</h2>
            <p className="mt-2">
              Questions about these terms: {site.contact.phoneDisplay} ·{" "}
              {site.contact.email}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
