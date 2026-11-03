/* XML sitemap for search engines — URLs built from site settings. */
import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.seo.siteUrl;
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/materials",
    "/how-it-works",
    "/gallery",
    "/license",
    "/contact",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
