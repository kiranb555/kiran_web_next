import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true
  },
  webpack: (config) => {
    // Ensure aliases from tsconfig are used in webpack
    if (!config.resolve) {
      config.resolve = {};
    }
    if (!config.resolve.alias) {
      config.resolve.alias = {};
    }
    
    // Add path aliases from tsconfig
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    
    return config;
  }
};

export default nextConfig;
