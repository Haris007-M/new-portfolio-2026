// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  // Your existing webpack config
  webpack: (config: { externals: { 'utf-8-validate': string; bufferutil: string; }[]; }) => {
    config.externals.push({
      'utf-8-validate': 'commonjs utf-8-validate',
      'bufferutil': 'commonjs bufferutil',
    });
    return config;
  },
  // Add this empty turbopack config to silence the error
  turbopack: {},
};

module.exports = nextConfig;