# ✏️ Editing Guide — How To Change Anything on the Website

This website was built so **non-developers can update everything themselves**.
You edit simple text files; the site updates automatically.

> **Golden rule:** all content lives in **`src/data/`** and all images in
> **`public/images/`**. You should almost never need to touch any other file.

---

## 1. Things you'll edit most often

| I want to change… | Open this file | Find this section |
|---|---|---|
| **Phone number** | `src/data/site.ts` | `contact` → `phoneDisplay` + `phoneHref` |
| **WhatsApp number** | `src/data/site.ts` | `contact` → `whatsapp` (see §2 below) |
| **Email address** | `src/data/site.ts` | `contact` → `email` |
| **Address / map** | `src/data/site.ts` | `contact` → `addressLines` / `mapQuery` |
| **Working hours** | `src/data/site.ts` | `contact` → `hours` |
| **License details** | `src/data/site.ts` | `license` |
| **Homepage big numbers** | `src/data/site.ts` | `stats` |
| **Background images** | `src/data/site.ts` **or** replace files in `public/images/` (same name = easiest) | `images` |
| **Services text** | `src/data/services.ts` | `services` |
| **Materials lists** | `src/data/services.ts` | `materialCategories`, `notAccepted` |
| **Gallery photos & captions** | `src/data/content.ts` | `gallery` |
| **Process steps / FAQ** | `src/data/content.ts` | `steps`, `faqs` |
| **Menu items** | `src/data/site.ts` | `nav` |
| **Google/SEO text** | `src/data/site.ts` | `seo` |

All these files are plain text with `// comments` explaining every field —
open them in any editor (Notepad, VS Code) and change the text between the
quotes `"..."`.

---

## 2. WhatsApp number (do this first!)

The WhatsApp button and the quote form are **hidden until you add the number**:

1. Open `src/data/site.ts`
2. Find `whatsapp: ""` inside `contact`
3. Type the number with country code, digits only — e.g. `whatsapp: "971501234567",`
4. Save. The green WhatsApp button now appears on every page, and the quote
   form will send requests straight to that WhatsApp.

---

## 3. Replacing images

**Easiest way:** drop your photo into `public/images/` using the **exact same
file name** as the one you're replacing (see `public/images/README.txt` for
the full list). Nothing else to do.

- Hero background: `hero-bg.jpg` (use a wide photo, 1920px or wider)
- Service images: `services/buying.jpg`, `services/collection.jpg`, etc.
- Gallery: `gallery/*.jpg`

**Adding a NEW gallery photo:** copy the file into `public/images/gallery/`,
then open `src/data/content.ts` and add one entry to the `gallery` list:

```ts
{
  src: "/images/gallery/my-new-photo.jpg",
  title: "Description of the job",
  category: "Collections", // Collections | Yard | Materials | Export
},
```

## 4. Using your own logo

The current logo is a built-in amber mark with the brand name text.
To use a real logo image:

1. Put your file at `public/images/logo.png` (transparent PNG looks best)
2. In `src/components/Logo.tsx`, replace the `<LogoMark … />` line with:
   `<Image src="/images/logo.png" alt={site.brand.name} width={40} height={40} />`
   (add `import Image from "next/image";` at the top of that file)

## 5. Running the site

```bash
npm run dev     # development — live reload while you edit (http://localhost:3000)
npm run build   # production build
npm run start   # serve the production build
```

After editing files, the dev server updates instantly; for production, run
`npm run build` again.

## 6. Going live

- Point your domain (e.g. `rawafedalamal.ae`) at your host — the site deploys
  to any Node host or Vercel/Netlify in one click.
- **Before launch:** update `seo.siteUrl` in `src/data/site.ts` to the real domain.
- Add the site to **Google Business Profile** and Search Console
  (`https://<domain>/sitemap.xml` is already generated).

## 7. Quick reference — file map

```
src/
  data/
    site.ts        ← ⭐ ALL settings: contact, license, hours, images, SEO, menu
    services.ts    ← services + materials lists
    content.ts     ← steps, why-us, gallery, testimonials, FAQ
  components/      ← header, footer, forms, gallery (rarely need edits)
  app/             ← pages (home, about, services, contact…) — edit only for layout changes
public/images/     ← ⭐ ALL photos — replace same-named files to swap images
```
