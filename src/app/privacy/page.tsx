import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy of ${site.brand.legalName}.`,
};

export default function PrivacyPage() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <span className="kicker">Legal</span>
        <h1 className="heading-lg mt-3 text-navy">Privacy Policy</h1>
        <p className="mt-2 text-sm text-steel">Last updated: November 2026</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-ink">
          <p>
            {site.brand.legalName} (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;)
            respects your privacy. This policy explains what information we collect when
            you use our website and how we handle it.
          </p>
          <div>
            <h2 className="heading-sm text-navy">1. Information We Collect</h2>
            <p className="mt-2">
              When you contact us by phone, WhatsApp, email or the quote form, we receive
              the details you provide: your name, phone number, pickup location, and
              information about the material you want to sell. Our website does not use
              tracking cookies or advertising networks by default.
            </p>
          </div>
          <div>
            <h2 className="heading-sm text-navy">2. How We Use It</h2>
            <p className="mt-2">
              We use your details solely to quote, arrange collections, complete payment
              and keep required transaction records. We do not sell or share your
              personal information with third parties except where required by law or
              regulation.
            </p>
          </div>
          <div>
            <h2 className="heading-sm text-navy">3. Data Retention</h2>
            <p className="mt-2">
              We keep transaction records only as long as required for accounting and
              regulatory compliance in the UAE, after which they are securely disposed
              of.
            </p>
          </div>
          <div>
            <h2 className="heading-sm text-navy">4. Your Rights</h2>
            <p className="mt-2">
              You may ask us what details we hold about you, request corrections, or ask
              us to delete information we no longer need. Contact us at{" "}
              <a href={`mailto:${site.contact.email}`} className="font-semibold text-royal hover:text-royal-dark">
                {site.contact.email}
              </a>{" "}
              or {site.contact.phoneDisplay}.
            </p>
          </div>
          <div>
            <h2 className="heading-sm text-navy">5. Contact</h2>
            <p className="mt-2">
              {site.brand.legalName}, {site.contact.addressLines.join(", ")}.{" "}
              {site.contact.phoneDisplay} · {site.contact.email}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
