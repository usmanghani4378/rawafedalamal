/* ==========================================================================
   ⚙️  MAIN SITE SETTINGS — EDIT THIS FILE TO CHANGE THE WHOLE WEBSITE
   ==========================================================================
   Everything on the website (phone numbers, email, address, license details,
   working hours, images, links) is controlled from this one file.

   ✏️  How to edit:  open this file, change the text between the quotes "",
        save, and the site updates. See docs/editing-guide.md for help.
   ========================================================================== */

export const site = {
  /* ---------------------------------------------------------------
     1) BRAND — company names shown in the header, footer & titles
  --------------------------------------------------------------- */
  brand: {
    name: "Rawafed Alamal", // short brand name (header logo text)
    legalName:
      "Rawafed Alamal Scrap & Metal Waste Trading L.L.C", // full legal name (footer, about, license page)
    shortName: "Rawafed Alamal Scrap Trading", // medium name used in meta titles
    tagline: "Licensed Scrap & Metal Waste Trading — Dubai, UAE",
    initials: "RA", // used in the logo mark (you can replace the logo, see guide)
  },

  /* ---------------------------------------------------------------
     2) CONTACT — phone, WhatsApp, email, address  ⚠️ KEEP UPDATED
  --------------------------------------------------------------- */
  contact: {
    // Main landline (from trade license records)
    phoneDisplay: "+971 4 331 1111", // how the number appears on screen
    phoneHref: "+97143311111", // same number, digits only with country code

    // WhatsApp click-to-chat (the green button).
    // ⚠️ ADD THE COMPANY WHATSAPP NUMBER HERE, e.g. "971501234567"
    // (country code first, digits only, NO "+", NO spaces).
    // While this is empty "" the WhatsApp buttons are hidden automatically
    // and the quote form falls back to email.
    whatsapp: "",

    email: "biz.management360@gmail.com",

    // Registered office address (shown in footer + contact page)
    addressLines: [
      "Al Khabeesi Building — Office No 6",
      "Al Khabeesi, Deira",
      "Dubai, United Arab Emirates",
    ],

    // What shows inside the Google Maps embed on the Contact page.
    mapQuery: "Al Khabeesi Building, Al Khabeesi, Deira, Dubai, UAE",

    // Working hours (shown in top bar, contact page & footer)
    hours: [
      { days: "Monday – Saturday", time: "8:00 AM – 6:00 PM" },
      { days: "Sunday", time: "Closed" },
    ],
    // Short version for the top bar
    hoursShort: "Mon–Sat: 8AM–6PM",
  },

  /* ---------------------------------------------------------------
     3) LICENSE & LEGAL — shown on the License page, footer & trust badges
  --------------------------------------------------------------- */
  license: {
    number: "1731345",
    issuer: "Dubai Department of Economic Development (DED)",
    issuerShort: "DED — Dubai",
    activity: "Scrap & Metal Waste Trading",
    status: "Active", // shown as a green badge
    // ⚠️ Add the Dubai Municipality waste-management permit number when available:
    municipalityPermit: "", // e.g. "DM-WM-XXXXX" — leave "" to hide this row
    registeredOwner: "Hind Abdulghaffar Ghuloom Husain",
    legalForm: "Single Owner Company (S.O.C) — Limited Liability Company",
  },

  /* ---------------------------------------------------------------
     4) TRUST BAND — the 4 big claims under the hero section.
        ⚠️ Replace with real figures once available.
  --------------------------------------------------------------- */
  stats: [
    { value: "DED 1731345", label: "Licensed & Registered" },
    { value: "Same-Day", label: "Collection Across Dubai" },
    { value: "100%", label: "Fair Certified Weighing" },
    { value: "Instant", label: "Payment on Pickup" },
  ],

  /* ---------------------------------------------------------------
     5) IMAGES — file paths under /public. To change an image, either
        replace the file (keep the same name) or change the path here.
  --------------------------------------------------------------- */
  images: {
    hero: "/images/hero-bg.jpg", // homepage hero background
    about: "/images/about-yard.jpg", // about page + about teaser
    cta: "/images/og-image.jpg", // bottom call-to-action band background
    og: "/images/og-image.jpg", // social share image (WhatsApp/Google)
  },

  /* ---------------------------------------------------------------
     6) WEBSITE / SEO SETTINGS
  --------------------------------------------------------------- */
  seo: {
    // ⚠️ Change to your real domain when it's live, e.g. "https://rawafedalamal.ae"
    siteUrl: "https://www.rawafedalamal.com",
    title:
      "Rawafed Alamal Scrap & Metal Waste Trading L.L.C | Licensed Scrap Buyers in Dubai",
    description:
      "Licensed scrap & metal waste trading company in Dubai (DED Licence 1731345). We buy ferrous & non-ferrous scrap — steel, copper, brass, aluminum — with pickup across Dubai, certified weighing and instant payment.",
    keywords: [
      "scrap buyers Dubai",
      "scrap metal trading company Dubai",
      "metal scrap collection Dubai",
      "copper scrap buyers Dubai",
      "aluminum scrap buyers Dubai",
      "licensed scrap dealer Dubai",
      "waste metal trading UAE",
    ],
    // Areas we serve — shown on the services page & good for local SEO
    areasServed: [
      "Deira",
      "Al Quoz",
      "Jebel Ali",
      "Dubai Industrial City",
      "Ras Al Khor",
      "DIP",
      "Al Aweer",
      "Business Bay",
      "Dubai Marina",
      "All of Dubai",
    ],
  },

  /* ---------------------------------------------------------------
     7) NAVIGATION MENU — pages listed in the header & footer
  --------------------------------------------------------------- */
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Materials", href: "/materials" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Gallery", href: "/gallery" },
    { label: "License", href: "/license" },
    { label: "Contact", href: "/contact" },
  ],

  /* ---------------------------------------------------------------
     8) SOCIAL MEDIA — add links when available, e.g. "https://instagram.com/..."
        Leave "" to hide.
  --------------------------------------------------------------- */
  social: {
    instagram: "",
    facebook: "",
    linkedin: "",
    twitter: "",
  },
};

export type SiteConfig = typeof site;
