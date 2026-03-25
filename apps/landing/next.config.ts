import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/landing-v2.html",
      },
    ];
  },
};

export default nextConfig;
