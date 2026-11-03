# Rawafed Alamal — Company Website

Website for **Rawafed Alamal Scrap & Metal Waste Trading L.L.C** — a DED-licensed
scrap & metal waste trading company (Licence No. 1731345) in Dubai, UAE.

Built with **Next.js 15 + Tailwind CSS v4 + TypeScript**. Fully config-driven:
contact details, license info, services, materials, gallery and images are all
editable from plain data files — see **[docs/editing-guide.md](docs/editing-guide.md)**.

## Quick start

```bash
npm install
npm run dev      # → http://localhost:3000
npm run build && npm run start   # production
```

## Pages

| Route | Purpose |
|---|---|
| `/` | Landing page: hero, trust band, services, materials, process, why-us, gallery, CTA |
| `/about` | Story, vision/mission/values, HSE, compliance |
| `/license` | Trade licence & legal details (trust page) |
| `/services` + `/services/[slug]` | 5 services, each with a detail page |
| `/materials` | Materials we buy / don't accept + rate policy |
| `/how-it-works` | 4-step process, tips, FAQ |
| `/gallery` | Filterable photo gallery with lightbox |
| `/contact` | Quote form (WhatsApp/email), contact cards, Google map |
| `/privacy`, `/terms` | Legal pages |
| `/sitemap.xml`, `/robots.txt` | Auto-generated SEO routes |

## Key files

- `src/data/site.ts` — ⭐ all settings (phone, WhatsApp, email, license, images, SEO)
- `src/data/services.ts` — services & materials content
- `src/data/content.ts` — steps, why-us, gallery, FAQ, testimonials
- `src/app/globals.css` — design tokens (colors, fonts)
- `public/images/` — all photos (replace same-named files to swap)

## Planning documents

- [`ROADMAP.md`](ROADMAP.md) — strategy, design system, sitemap, phases
- [`docs/company-profile.md`](docs/company-profile.md) — verified company data (from EJARI certificate)
- [`docs/editing-guide.md`](docs/editing-guide.md) — how to edit the site

## Before launch checklist

1. Add the WhatsApp number in `src/data/site.ts` (buttons appear automatically)
2. Replace placeholder images in `public/images/` with real yard photos
3. Set the real domain in `seo.siteUrl`
4. Confirm working hours
5. Set up Google Business Profile + Search Console
