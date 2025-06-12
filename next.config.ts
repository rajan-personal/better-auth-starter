import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Turbopack configuration (stable as of Next.js 15)
  turbopack: {
    // You can add turbopack-specific options here if needed
  },
  
  // Other optimizations
  typescript: {
    // Disable type checking during build (handled by CI/development tools)
    ignoreBuildErrors: false,
  },
  
  eslint: {
    // Disable ESLint during builds (handled by CI/development tools)
    ignoreDuringBuilds: false,
  },
  
  // Enable experimental features if needed
  experimental: {
    // Add any experimental features here
  },
};

export default nextConfig;
