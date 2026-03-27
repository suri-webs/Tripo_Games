import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Quick fix — disables optimization entirely
  },
};

export default nextConfig;
