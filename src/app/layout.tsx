import type { Metadata, Viewport } from "next";
import "./globals.css";

/* Self-hosted fonts (no external requests) */
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/barlow-condensed/600.css";
import "@fontsource/barlow-condensed/700.css";
import "@fontsource/cairo/400.css";
import "@fontsource/cairo/600.css";
import "@fontsource/cairo/700.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.seo.siteUrl),
  title: {
    default: site.seo.title,
    template: `%s | ${site.brand.shortName}`,
  },
  description: site.seo.description,
  keywords: site.seo.keywords,
  openGraph: {
    type: "website",
    locale: "en_AE",
    siteName: site.brand.legalName,
    title: site.seo.title,
    description: site.seo.description,
    images: [{ url: site.images.og, width: 1200, height: 630 }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0A1C36",
};

/* Google rich-result data for local SEO (uses details from src/data/site.ts) */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.brand.legalName,
  description: site.seo.description,
  url: site.seo.siteUrl,
  telephone: site.contact.phoneHref,
  email: site.contact.email,
  image: `${site.seo.siteUrl}${site.images.og}`,
  identifier: `DED Trade Licence ${site.license.number}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.contact.addressLines.join(", "),
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  openingHours: site.contact.hours
    .filter((h) => h.time !== "Closed")
    .map((h) => `${h.days} ${h.time}`),
  knowsAbout: site.seo.keywords,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr">
      <body className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1 overflow-x-clip">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
