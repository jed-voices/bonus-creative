import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // This project's Vercel build is configured to read from `.next-build`.
  distDir: '.next-build',
  outputFileTracingRoot: process.cwd(),
  experimental: {
    optimizePackageImports: ['lucide-react']
  }
};

export default nextConfig;
