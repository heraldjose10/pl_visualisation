/** @type {import('next').NextConfig} */

const nextConfig = {
  // load images from cdn
  images: {
    domains: ['a.espncdn.com'],
  },
  webpack(config) {
    // Convert all other *.svg imports to React components
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};


module.exports = nextConfig;