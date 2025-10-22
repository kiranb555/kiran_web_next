import type { NextConfig } from "next";

// Set the base path for the environment
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/kiran_web_next';

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'out',
  basePath,
  trailingSlash: true,
  eslint: { ignoreDuringBuilds: true },
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'randomuser.me' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  // Ensure environment variables are included in the build
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;