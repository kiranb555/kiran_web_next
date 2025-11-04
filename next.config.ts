import type { NextConfig } from "next";

// Base path configuration - empty for Vercel, '/kiran_web_next' for GitHub Pages
const isGHPages = process.env.NODE_ENV === 'production' && process.env.VERCEL !== '1';
const basePath = isGHPages ? '/kiran_web_next' : '';

const nextConfig: NextConfig = {
  // Enable static exports for GitHub Pages
  output: 'export',
  // Only set distDir for GitHub Pages
  ...(isGHPages && { distDir: 'out' }),
  // Set basePath only for GitHub Pages
  ...(isGHPages && { basePath }),
  // Enable trailing slashes for better compatibility
  trailingSlash: true,
  // Disable ESLint during builds
  eslint: { ignoreDuringBuilds: true },
  // Image optimization settings
  images: {
    // Disable image optimization for static exports
    unoptimized: true,
    // Allow images from these domains
    remotePatterns: [
      { protocol: 'https', hostname: 'randomuser.me' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  // Environment variables
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  // Enable React strict mode
  reactStrictMode: true,
  // Add CORS headers for API routes
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,DELETE,PATCH,POST,PUT' },
          { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version' },
        ],
      },
    ];
  },
};

export default nextConfig;