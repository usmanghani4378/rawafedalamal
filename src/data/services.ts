/* ==========================================================================
   🧩 WEBSITE CONTENT — services, materials
   ==========================================================================
   This file controls the text of the main sections of the website.
   Edit the text between quotes "" and save. See docs/editing-guide.md.
   ========================================================================== */

import type { IconName } from "@/components/icons";

/* --------------------------------------------------------------------------
   SERVICES — each service gets its own page: /services/<slug>
-------------------------------------------------------------------------- */
export interface Service {
  slug: string;
  title: string;
  short: string; // card text on the services overview
  description: string; // paragraph on the service page
  bullets: string[]; // checklist on the service page
  image: string; // path under /public
  icon: IconName;
}

export const services: Service[] = [
  {
    slug: "scrap-metal-buying",
    title: "Scrap Metal Buying",
    short:
      "We buy all ferrous and non-ferrous scrap at market-linked rates — fairly weighed, instantly paid.",
    description:
      "Rawafed Alamal buys all types of ferrous and non-ferrous scrap metal in Dubai — from a few kilos of copper cable to full truckloads of steel. Every load is weighed on certified scales in front of you and paid on the spot at rates linked to the daily metal market.",
    bullets: [
      "All ferrous metals: steel, iron, rebar, HMS, turnings",
      "All non-ferrous metals: copper, brass, aluminum, stainless, lead, zinc",
      "Rates linked to daily international metal market prices",
      "Certified weighing with a slip you can verify",
      "Instant payment — cash or bank transfer",
    ],
    image: "/images/services/buying.jpg",
    icon: "Scale",
  },
  {
    slug: "site-collection-haulage",
    title: "Site Collection & Haulage",
    short:
      "Our trucks collect scrap from your site, warehouse or villa — same-day service across Dubai.",
    description:
      "Don't worry about transport — our fleet collects scrap directly from construction sites, warehouses, factories, offices and villas anywhere in Dubai. We load, haul and handle everything, so clearing your metal waste takes one phone call.",
    bullets: [
      "Same-day or scheduled pickup across all Dubai areas",
      "Construction & demolition sites, factories, warehouses",
      "Offices, retail fit-outs and villa cleanouts",
      "Our crew loads the material — you don't lift a thing",
      "Small pickups to full trailer loads",
    ],
    image: "/images/services/collection.jpg",
    icon: "Truck",
  },
  {
    slug: "sorting-processing-baling",
    title: "Sorting, Processing & Baling",
    short:
      "Professional sorting, shearing and baling at our yard to maximise the value of your scrap.",
    description:
      "Mixed scrap is worth less than sorted scrap. At our facility we sort, grade, shear and bale material to prepare it for smelters and mills — which means better rates for our suppliers and cleaner, higher-quality material for recyclers.",
    bullets: [
      "Grading and separation of mixed loads",
      "Shearing of long steel and profile material",
      "Baling of aluminum, tin and light metals",
      "Cable stripping and copper recovery",
      "Clean, organized, compliant yard operations",
    ],
    image: "/images/services/processing.jpg",
    icon: "Recycle",
  },
  {
    slug: "trading-export",
    title: "Scrap Trading & Export",
    short:
      "Containerised scrap trading and export with complete documentation for international buyers.",
    description:
      "We trade and export processed scrap metal in containers to buyers across the region. Our team handles grading, container loading and export documentation, giving international buyers a reliable, compliant Dubai supply partner.",
    bullets: [
      "Container loading of processed & baled scrap",
      "Complete export documentation",
      "Consistent, graded material specifications",
      "Reliable supply from a DED-licensed Dubai trader",
      "Enquiries from international buyers welcome",
    ],
    image: "/images/services/export.jpg",
    icon: "Ship",
  },
  {
    slug: "demolition-site-clearance",
    title: "Demolition & Site Clearance",
    short:
      "Metal waste removal and site clearance support for demolition contractors across Dubai.",
    description:
      "Demolition leaves behind tonnes of valuable steel, rebar and mixed metal. We work with demolition and main contractors to clear metal waste quickly and legally — putting value back into your project instead of cost.",
    bullets: [
      "Removal of steel beams, rebar, profile and mesh",
      "Coordination with demolition programme & site rules",
      "Compliant waste-handling documentation",
      "We buy the metal — clearing your site can pay you",
      "Single loads to multi-truck clearances",
    ],
    image: "/images/services/demolition.jpg",
    icon: "Hammer",
  },
];

/* --------------------------------------------------------------------------
   MATERIALS WE BUY — shown on /materials and previewed on the homepage
-------------------------------------------------------------------------- */
export interface MaterialCategory {
  id: string;
  title: string;
  note: string;
  icon: IconName;
  items: string[];
}

export const materialCategories: MaterialCategory[] = [
  {
    id: "ferrous",
    title: "Ferrous Metals",
    note: "Magnetic metals — steel & iron family",
    icon: "Magnet",
    items: [
      "HMS 1 & 2 (Heavy Melting Steel)",
      "Rebar & construction steel",
      "Structural beams, profiles & plate",
      "Steel turnings & swarf",
      "Cast iron",
      "Tin plate & can scrap",
    ],
  },
  {
    id: "non-ferrous",
    title: "Non-Ferrous Metals",
    note: "Higher-value metals — the best rates",
    icon: "Coins",
    items: [
      "Copper — bare bright, wire, cables",
      "Brass — radiators, mixed, turnings",
      "Aluminum — extrusion, sheets, cans, wheels",
      "Stainless steel 304 / 316",
      "Lead — sheets, batteries",
      "Zinc & electric motors",
    ],
  },
  {
    id: "other",
    title: "Other Accepted Items",
    note: "Metal-bearing equipment & units",
    icon: "Package",
    items: [
      "AC units & compressors",
      "Generators & water pumps",
      "Car batteries",
      "Electric motors & alternators",
      "Radiators & coils",
      "Office & shopfitting metal waste",
    ],
  },
];

// What we do NOT accept — shown on the materials page
export const notAccepted = [
  "Hazardous or chemical waste",
  "Medical waste",
  "Uncertified gas cylinders & pressurized tanks",
  "Radioactive materials",
  "Tires & general household waste",
];

export const materialsDisclaimer =
  "Metal prices change daily with the international market. Rates shared by phone or WhatsApp are valid for that day only — contact us for today's live rate.";
