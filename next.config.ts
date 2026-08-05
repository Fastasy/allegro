import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  // We can add other options if needed, like disabling eslint or typescript checks during build to make migration smoother if we want, but let's keep it strict first.
};

export default nextConfig;
