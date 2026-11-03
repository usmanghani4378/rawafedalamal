"use client";

/* Filterable photo gallery with a simple lightbox. Images & captions come
   from src/data/content.ts (gallery array). */
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryItem } from "@/data/content";

const FILTERS = ["All", "Collections", "Yard", "Materials", "Export"] as const;

export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [selected, setSelected] = useState<number | null>(null);

  const visible = useMemo(
    () => (filter === "All" ? items : items.filter((i) => i.category === filter)),
    [filter, items]
  );

  // lock page scroll while the lightbox is open
  useEffect(() => {
    document.body.style.overflow = selected !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  // keyboard controls for the lightbox
  useEffect(() => {
    if (selected === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowRight")
        setSelected((s) => (s === null ? null : (s + 1) % visible.length));
      if (e.key === "ArrowLeft")
        setSelected((s) =>
          s === null ? null : (s - 1 + visible.length) % visible.length
        );
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected, visible.length]);

  return (
    <div>
      {/* filter chips */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => {
              setFilter(f);
              setSelected(null);
            }}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              filter === f
                ? "bg-royal text-navy"
                : "bg-white text-steel ring-1 ring-gray-200 hover:text-navy"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((item, idx) => (
          <button
            key={item.src}
            onClick={() => setSelected(idx)}
            className="group relative block aspect-[4/3] overflow-hidden rounded-xl text-left ring-1 ring-gray-200"
          >
            <Image
              src={item.src}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-navy/85 via-transparent to-transparent opacity-90" />
            <span className="absolute bottom-0 left-0 right-0 p-4">
              <span className="block text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white/75">
                {item.category}
              </span>
              <span className="block text-sm font-semibold leading-snug text-white">
                {item.title}
              </span>
            </span>
          </button>
        ))}
      </div>

      {/* lightbox */}
      {selected !== null && visible[selected] && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/95 p-4"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation();
              setSelected((s) =>
                s === null ? null : (s - 1 + visible.length) % visible.length
              );
            }}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation();
              setSelected((s) => (s === null ? null : (s + 1) % visible.length));
            }}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <figure
            className="max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={visible[selected].src}
              alt={visible[selected].title}
              width={1200}
              height={900}
              className="max-h-[60vh] w-auto rounded-lg object-contain sm:max-h-[78vh]"
            />
            <figcaption className="mt-3 text-center text-sm text-gray-300">
              {visible[selected].title}
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
