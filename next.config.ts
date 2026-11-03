import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Local images only — set unoptimized so no extra image server deps are needed.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
