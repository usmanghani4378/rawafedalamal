import type { Metadata } from "next";
import CTABand from "@/components/CTABand";
import GalleryGrid from "@/components/GalleryGrid";
import { gallery } from "@/data/content";

export const metadata: Metadata = {
  title: "Gallery — Our Work",
  description:
    "Photos from Rawafed Alamal's scrap collections, yard operations and export loading across Dubai.",
};

export default function GalleryPage() {
  return (
    <>
      {/* banner */}
      <section className="bg-graphite">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <span className="kicker">Gallery</span>
          <h1 className="heading-xl mt-3 text-white">
            Our Work, <span className="text-molten">Unfiltered</span>
          </h1>
          <p className="mt-4 max-w-2xl text-gray-300">
            Collections, yard operations and export loading — real work by a licensed
            Dubai scrap trading company.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <GalleryGrid items={gallery} />
        </div>
      </section>

      <CTABand
        title="Your Site Could Be Our Next Job"
        text="Send us your location and material list — we'll do the rest."
      />
    </>
  );
}
