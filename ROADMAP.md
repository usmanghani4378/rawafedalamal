# 🌐 Development Roadmap — Rawafed Alamal (Scrap & Metal Waste Trading L.L.C, Dubai)

> **Status:** Planning v2 · **Date:** Nov 2026 · **Owner:** Rawafed Alamal + Dev
> Company legal details are now **verified from the EJARI certificate** — see [`docs/company-profile.md`](docs/company-profile.md).

---

## 1. Purpose & Business Goals

**Company:** **RAWAFED ALAMAL SCRAP & METAL WASTE TRADING L.L.C (S.O.C)** — licensed scrap & metal waste trading company in Dubai, UAE. DED trade licence **No. 1731345** (verified from EJARI certificate; Dubai Municipality waste-trading permit expected under activity code **4669.75** — to be confirmed). Office: Al Khabeesi Building, Office 6, Al Khabeesi, Deira, Dubai. Owner: Hind Abdulghaffar Ghuloom Husain.

**Why the website exists (in priority order):**

| # | Goal | What success looks like |
|---|------|--------------------------|
| 1 | **Lead generation** | Quote requests, WhatsApp chats, phone calls from sellers of scrap metal |
| 2 | **Trust & credibility** | Visitors instantly see it's a *licensed, registered* Dubai company — not a informal trader |
| 3 | **Showcase work** | Photo gallery of yard operations, collections, processed materials, client jobs |
| 4 | **Education** | What materials are bought, how pricing works, how pickup works |
| 5 | **Local SEO** | Rank on Google for "scrap buyers in Dubai", "metal scrap trading Dubai", etc. |

**Primary conversion actions:** WhatsApp click-to-chat · "Get a Quote" form · click-to-call.

---

## 2. Target Audience

| Persona | Who they are | What they need on the site |
|---------|-------------|---------------------------|
| **Contractors & demolition firms** | Construction/demolition sites with steel, copper cable, rebar | Proof of licensed bulk buying, pickup/haulage, fast payment |
| **Factories & warehouses** | Ongoing industrial scrap (aluminum, stainless, steel offcuts) | Reliability, account-based relationship, scheduled collection |
| **Scrap dealers / exporters** | Smaller traders looking to offload aggregated material | Fair pricing signals, materials list, container/export capability |
| **Facility & property managers** | Office/retail cleanouts, AC units, cables, e-waste | Easy booking, professional image, compliance assurance |
| **Households / walk-ins** | Individual sellers with small quantities | Simple "what we buy" list, location, WhatsApp quick contact |

**Language note:** Trade audience in Dubai is mixed (English business + Hindi/Urdu/Arabic speakers). **English-first with optional Arabic (RTL)** is the recommended scope.

---

## 3. Brand & Design Direction

### 3.1 Logo
- Concept: industrial wordmark — **"RAWAFED AL AMAL"** in bold condensed caps, with a mark combining a **recycle arrow + ingot/gear**.
- Needs: full logo, icon-only mark, white/knockout version. *(Placeholder until client provides one — an AI draft logo can be generated in the design phase.)*

### 3.2 Color Palette

Industrial + trustworthy + eco. Dark steel base, molten-amber accent, green eco cue.

| Role | Name | Hex | Usage |
|------|------|-----|-------|
| Primary dark | Graphite Steel | `#1C1F26` | Header, footer, headings, dark sections |
| Secondary dark | Iron Grey | `#343B45` | Cards, alternating sections |
| **Primary accent (CTA)** | Molten Amber | `#F59E0B` | Buttons, links, highlights, badges |
| Accent hover | Copper | `#D97706` | Hover states on amber |
| Eco cue | Recycle Green | `#2E9E5B` | "Recycling/sustainability" icons & tags |
| Light bg | Off-White Steel | `#F6F7F9` | Page background |
| White | Pure White | `#FFFFFF` | Cards, contrast sections |
| Text | Charcoal Text | `#23272F` | Body text on light |
| Muted text | Steel Grey | `#6B7280` | Secondary text, captions |

### 3.3 Typography (Google Fonts)

| Use | Font | Weights | Why |
|-----|------|---------|-----|
| Headings | **Barlow Condensed** (or Archivo) | 600/700 | Industrial, tall, reads like steel signage |
| Body | **Inter** | 400/500/600 | Clean, highly legible at small sizes |
| Arabic (if EN+AR) | **IBM Plex Sans Arabic** or Cairo | 400/700 | Pairs well; full RTL support |

- Base size 16px; heading scale 2×–3×; generous line-height (1.6 body).
- Numbers/prices can use tabular figures.

### 3.4 Iconography & Imagery
- **Icons:** solid industrial line icons (Lucide / Font Awesome) — truck, scale, magnet, factory, recycle, shield-check.
- **Photography style:** real yard photos first (client-provided), supplemented by high-quality stock/AI imagery: scrapyard gantry cranes, sorted metal bales, copper wire, container loading, trucks on Dubai roads.
- **Avoid:** clichéd "green leaf recycling"-only look; we want *heavy industry done professionally*.

### 3.5 Tone of Voice
Confident, direct, plain-spoken. "We buy your scrap metal — fairly weighed, instantly paid." No fluff.

---

## 4. Site Structure (Sitemap)

```
Home
├── About Us
│     ├── Our Story / Vision & Mission
│     ├── License & Certifications (DED + Dubai Municipality)
│     └── Health, Safety & Environment (HSE)
├── Services
│     ├── Scrap Buying (ferrous & non-ferrous)
│     ├── Collection & Haulage (site pickup)
│     ├── Demolition & Site Clearance Support
│     ├── Sorting, Processing & Baling
│     └── Trading & Export (containers)
├── Materials We Buy        ← high-SEO-value page + price table
│     ├── Ferrous: Steel, Iron, HMS, Rebar, Tin
│     ├── Non-Ferrous: Copper, Brass, Aluminum, Lead, Stainless, Cables
│     └── Others: Batteries, AC units, E-waste (as licensed)
├── How It Works            ← 4-step process (Call → Quote → Pickup → Weigh & Pay)
├── Projects / Gallery      ← showcase of work (the "portfolio")
├── Why Choose Us           ← licensed, fair scales, instant payment, fleet
├── Testimonials            ← can live on Home + dedicated block
├── Blog / News             ← optional Phase 2 (SEO engine)
├── Contact / Get a Quote   ← form + WhatsApp + map + hours
└── Legal
      ├── Privacy Policy
      └── Terms of Trade
```

---

## 5. Page-by-Page Blueprint

| Page | Goal | Key sections | Primary CTA |
|------|------|--------------|-------------|
| **Home** | Instant trust + route to quote | Hero (headline + CTA), trust strip (license badge, years, tonnage handled), services grid, materials preview, process steps, gallery highlights, testimonials, contact band | Get a Quote / WhatsApp |
| **About** | Humanize + credibility | Story, vision/mission, values, license & permits block, HSE commitments, team (optional) | Contact us |
| **Services** | Show full capability | 5 service cards with detail sections, fleet/equipment list, coverage areas in Dubai | Request pickup |
| **Materials We Buy** | Answer "do they take X?" | Table of materials + indicative rates*, do/don't list, preparation tips | Get today's rate |
| **How It Works** | Remove friction | 4 illustrated steps, payment methods, weighing transparency (certified scales) | Start with WhatsApp |
| **Gallery / Projects** | Showcase work | Filterable grid (collections, yard, exports, before/after), captions per project | View services |
| **Why Choose Us** | Beat competitors | Licensed & registered, certified weighing, same-day pickup, instant payment, safety-first | Get a Quote |
| **Contact / Quote** | Convert | Smart quote form (material type, qty, location, photo upload), WhatsApp deep link, click-to-call, Google Maps embed, working hours | Submit / WhatsApp |
| **Privacy / Terms** | Legal hygiene | Standard policy text (required for forms/analytics) | — |

*Indicative rates disclaimer: metal prices fluctuate daily; site shows "call/WhatsApp for today's rate" to avoid stale pricing liability.

---

## 6. Functional Requirements

1. **WhatsApp click-to-chat** — floating button + inline CTAs (essential in UAE B2B trade).
2. **Quote request form** — name, phone, material type(s), estimated quantity, location, photo upload; emails to company inbox.
3. **Click-to-call** tel: links throughout.
4. **Sticky header** with phone + quote CTA; mobile-first responsive.
5. **Bilingual EN/AR** (optional, decision needed): language toggle, full RTL layout.
6. **Gallery** with categories & lightbox.
7. **Google Maps embed** of yard/office location.
8. **License trust strip** — DED licence no., Dubai Municipality permit reference in footer.
9. **SEO foundation** — semantic HTML, meta tags, Open Graph, `LocalBusiness` + `Organization` schema.org JSON-LD, XML sitemap, robots.txt.
10. **Analytics** — Google Analytics 4 + Google Business Profile link.
11. **Performance & accessibility** — 90+ Lighthouse targets, WCAG AA contrast, lazy-loaded images.
12. **Security/privacy** — HTTPS, spam protection on form (honeypot + simple captcha).

---

## 7. Tech Stack (recommended)

| Option | Pros | Cons | Verdict |
|--------|------|------|---------|
| **A. Next.js (static) + Tailwind CSS** ⭐ | Fast, SEO-excellent, easy future blog/CMS, modern DX | Slight build complexity | **Recommended** |
| B. Plain HTML/CSS/JS | Dead simple, free hosting anywhere | Harder to scale, repetitive markup | Fine for v0 prototype |
| C. WordPress | Client can self-edit | Slower, maintenance/security overhead, design constraints | Only if client insists on self-editing |

- **Hosting:** Vercel (free tier) or Netlify; domain e.g. `rawafedalamal.ae` / `.com`.
- **Forms:** Formspree/Netlify Forms or lightweight serverless endpoint.
- **Content:** Markdown/JSON data files for materials & gallery (easy price updates).

---

## 8. SEO & Local Visibility Plan

- **Keyword targets:** scrap buyers in Dubai, scrap metal trading company Dubai, copper/brass/aluminum scrap buyers Dubai, waste metal collection Dubai, licensed scrap dealer Dubai.
- **On-page:** keyword-mapped H1s, alt text on all gallery images, location mentions (Dubai + areas served: Al Quoz, Jebel Ali, DIP, Ras Al Khor…).
- **Schema:** `LocalBusiness` ( ScrapMetalDealer category), service schema, FAQ schema on How It Works.
- **Off-page:** Google Business Profile with yard photos, Google Maps pin, UAE directories.

---

## 9. Development Roadmap (Phases)

| Phase | Scope | Deliverables | Est. time |
|-------|-------|--------------|-----------|
| **0 — Discovery & Content** | Collect brand assets, license details, photos, material list, contact info | Content checklist complete (see §10) | 2–4 days (client-dependent) |
| **1 — Design** | Design system + homepage mockup | Palette/typography applied, hero + section mockups, logo direction | 2–3 days |
| **2 — Core Build** | Home, About, Services, Materials, Contact | Responsive pages, components, forms wired | 4–5 days |
| **3 — Full Site** | How It Works, Gallery, Why Choose Us, Legal, i18n/RTL (if approved) | All pages complete | 3–4 days |
| **4 — SEO & QA** | Meta, schema, sitemap, performance, cross-browser/device QA, form testing | Lighthouse 90+, QA sign-off | 2 days |
| **5 — Launch** | Domain + DNS, hosting, GBP setup, analytics | Site live, indexed | 1 day |
| **6 — Post-launch** | Blog engine, rate-update workflow, monthly photo drops, maintenance | Ongoing | Ongoing |

**Total to launch: ~3–4 weeks** (content being the main variable).

---

## 10. Content Checklist (what the client must provide)

- [x] Exact legal company name (as on licence) + licence/permit numbers to display — **verified: DED licence 1731345**
- [x] Yard/office address — **Al Khabeesi Bldg, Office 6, Al Khabeesi, Deira, Dubai** (Maps pin pending)
- [x] Email — biz.management360@gmail.com
- [ ] WhatsApp / mobile number
- [ ] Working hours
- [ ] Logo files (or approve AI-drafted logo)
- [ ] Materials bought + any rate guidance (or "call for rate")
- [ ] Real photos: yard, fleet, crew, collections, loaded containers, client sites (with permission)
- [ ] Service list confirmation (do they do demolition support? export?)
- [ ] Testimonials or client names (optional)
- [ ] Domain preference (`rawafedalamal.ae` / `.com`?)

---

## 11. Future Enhancements (Phase 6+)

- Blog/news for SEO (metal market updates, recycling tips)
- Live/indicative LME-linked price ticker
- Careers page
- Customer portal (collection requests history)
- Arabic content expansion

---

## 12. Decisions & Open Questions

### ✅ Resolved (Nov 2026)
1. **Legal name & licence** — verified from EJARI certificate: `RAWAFED ALAMAL SCRAP & METAL WASTE TRADING L.L.C (S.O.C)`, DED licence **1731345**, office in Al Khabeesi, Deira. → [`docs/company-profile.md`](docs/company-profile.md)
2. **Languages** — *(default)* English first; build RTL-ready so Arabic can be added in Phase 6 without rework.
3. **Tech stack** — *(default)* Next.js + Tailwind CSS (Option A).
4. **Content** — *(default)* AI-drafted logo + AI/stock placeholder imagery, swapped for real photos as the client supplies them.

### ⚠️ Still blocking launch content
1. **WhatsApp / mobile number** — the primary CTA needs it (landline 04 331 1111 is on the certificate).
2. **Working hours** for Contact page & Google Business Profile.
3. **Activity list on the licence** — exact wording for Services (buying only? collection? export?) and whether the Dubai Municipality waste permit number can be displayed.
4. **Domain** — `rawafedalamal.ae` / `.com`.
5. **Google Maps pin** — office (Al Khabeesi) and/or yard location.
