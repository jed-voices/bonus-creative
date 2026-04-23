import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Vercel expects the default `.next` output during deployment builds.
  distDir: process.env.VERCEL ? '.next' : '.next-build',
  outputFileTracingRoot: process.cwd(),
  experimental: {
    optimizePackageImports: ['lucide-react']
  }
};

export default nextConfig;
