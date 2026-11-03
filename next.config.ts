import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next's image optimizer (sharp) serves AVIF/WebP at the right size per
  // device — this is the single biggest loading-speed win for the site.
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
