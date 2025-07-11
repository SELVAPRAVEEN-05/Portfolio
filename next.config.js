/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["media.licdn.com"], // 👈 Add this line
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
