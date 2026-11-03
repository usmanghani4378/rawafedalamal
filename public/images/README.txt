WEBSITE IMAGES — HOW TO REPLACE
================================

Every image on the website lives in this folder. To change any image,
simply REPLACE the file with your own photo USING THE SAME FILE NAME.
No code changes needed.

Files:
  hero-bg.jpg              → Homepage hero background (use a wide, 1920px+ photo)
  about-yard.jpg           → About page photo
  og-image.jpg             → Social share preview (WhatsApp/Google) — 1200x630 recommended
  services/buying.jpg      → Service: Scrap Metal Buying
  services/collection.jpg  → Service: Site Collection & Haulage
  services/processing.jpg  → Service: Sorting, Processing & Baling
  services/export.jpg      → Service: Scrap Trading & Export
  services/demolition.jpg  → Service: Demolition & Site Clearance
  gallery/*.jpg            → Gallery photos (add/remove entries in src/data/content.ts)

Tips:
  - Use .jpg files, reasonably compressed (under ~500 KB each for fast loading).
  - After replacing files, run:  npm run build  and restart the site.
