import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: process.env.NODE_ENV === "development" ? ".next-preview" : ".next",
  images: {
    unoptimized: true,
  },
  /* config options here */
};

export default nextConfig;
