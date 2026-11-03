/* ==========================================================================
   🧩 MORE WEBSITE CONTENT — process steps, why-us, gallery, FAQs, about page
   ========================================================================== */

import type { IconName } from "@/components/icons";

/* --------------------------------------------------------------------------
   HOW IT WORKS — the 4-step process (/how-it-works + homepage)
-------------------------------------------------------------------------- */
export interface Step {
  title: string;
  text: string;
  icon: IconName;
}

export const steps: Step[] = [
  {
    title: "Contact Us",
    text: "Call, WhatsApp or send the quote form with your material list, rough quantity and location. Photos of the scrap help us quote faster.",
    icon: "MessageCircle",
  },
  {
    title: "Get Today's Rate",
    text: "We confirm a rate based on your material type, quantity and the day's metal market prices — no hidden deductions.",
    icon: "Tag",
  },
  {
    title: "We Collect",
    text: "Our truck and crew come to you — anywhere in Dubai, usually same day. Or bring your scrap to us directly.",
    icon: "Truck",
  },
  {
    title: "Weigh & Get Paid",
    text: "Your load is weighed on certified scales in front of you, and you're paid instantly — cash or bank transfer.",
    icon: "Banknote",
  },
];

/* --------------------------------------------------------------------------
   WHY CHOOSE US — dark section on the homepage
-------------------------------------------------------------------------- */
export interface Reason {
  title: string;
  text: string;
  icon: IconName;
}

export const reasons: Reason[] = [
  {
    title: "Fully Licensed & Compliant",
    text: "A registered Dubai company — DED Trade Licence 1731345 — operating under Dubai Municipality waste-trading rules.",
    icon: "ShieldCheck",
  },
  {
    title: "Certified Weighing",
    text: "Every load is weighed on certified scales with a slip you can verify. What you see is what you're paid for.",
    icon: "Scale",
  },
  {
    title: "Instant Payment",
    text: "Paid on the spot when we weigh your material — cash or direct bank transfer, your choice.",
    icon: "Banknote",
  },
  {
    title: "Same-Day Collection",
    text: "Our trucks cover every area of Dubai — from Deira to Jebel Ali — usually on the same day you call.",
    icon: "Truck",
  },
  {
    title: "Any Quantity",
    text: "From a few kilos of cable at a villa to full container loads from an industrial site — every customer gets the same fair dealing.",
    icon: "Package",
  },
  {
    title: "Recycling First",
    text: "Your scrap re-enters the steel and metals supply chain as raw material — not Dubai's landfill.",
    icon: "Leaf",
  },
];

/* --------------------------------------------------------------------------
   GALLERY — shown on /gallery and previewed on the homepage.
   Add an item: put the image in /public/images/gallery/ then add a line here.
-------------------------------------------------------------------------- */
export interface GalleryItem {
  src: string;
  title: string;
  category: "Collections" | "Yard" | "Materials" | "Export";
}

export const gallery: GalleryItem[] = [
  {
    src: "/images/gallery/rebar-collection.jpg",
    title: "Construction steel collection — Dubai job site",
    category: "Collections",
  },
  {
    src: "/images/gallery/copper-cable.jpg",
    title: "Copper cable grading at our yard",
    category: "Materials",
  },
  {
    src: "/images/gallery/aluminum-bales.jpg",
    title: "Baled aluminum ready for recycling",
    category: "Yard",
  },
  {
    src: "/images/gallery/container-loading.jpg",
    title: "Container loading for export",
    category: "Export",
  },
  {
    src: "/images/gallery/yard-organization.jpg",
    title: "Sorted & organized scrap yard",
    category: "Yard",
  },
  {
    src: "/images/gallery/truck-fleet.jpg",
    title: "Collection fleet heading to site",
    category: "Collections",
  },
  {
    src: "/images/gallery/ac-units.jpg",
    title: "AC units & white metal ready for processing",
    category: "Materials",
  },
  {
    src: "/images/gallery/brass-radiators.jpg",
    title: "Brass radiators — sorted non-ferrous",
    category: "Materials",
  },
];

/* --------------------------------------------------------------------------
   TESTIMONIALS — shown on the homepage.
   ⚠️ Only real client feedback should go here. The section stays hidden
   while this list is empty.
   To add one: { name: "Client name", role: "Site Manager, Company", text: "..." }
-------------------------------------------------------------------------- */
export interface Testimonial {
  name: string;
  role: string;
  text: string;
}

export const testimonials: Testimonial[] = [];

/* --------------------------------------------------------------------------
   FAQ — shown on /how-it-works and used for Google rich results
-------------------------------------------------------------------------- */
export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    q: "Do you pick up scrap from my location?",
    a: "Yes. Our trucks collect from construction sites, warehouses, factories, offices and villas anywhere in Dubai — usually on the same day you contact us. For very small quantities, you're also welcome to bring the material to us.",
  },
  {
    q: "How is the price decided?",
    a: "Rates depend on the material type, grade and quantity, and follow the daily international metal market. Contact us with your material list (photos help) and we'll confirm today's rate before any pickup.",
  },
  {
    q: "How do I know the weight is correct?",
    a: "Every load is weighed on certified scales in front of you, and you receive a weigh slip showing the exact weight and rate. Full transparency is one of our core promises.",
  },
  {
    q: "When and how do I get paid?",
    a: "Immediately after weighing. You choose cash or direct bank transfer — payment is made on the spot, before our truck leaves.",
  },
  {
    q: "What materials do you accept?",
    a: "All ferrous metals (steel, iron, rebar), all non-ferrous metals (copper, brass, aluminum, stainless, lead, zinc), plus AC units, generators, motors, batteries and similar metal-bearing items. See our Materials page for the full list.",
  },
  {
    q: "Are you a licensed company?",
    a: "Yes. Rawafed Alamal Scrap & Metal Waste Trading L.L.C is registered with the Dubai Department of Economic Development — Trade Licence No. 1731345 — and operates in line with Dubai Municipality waste-trading regulations.",
  },
];
