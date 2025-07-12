/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["media.licdn.com"], 
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
