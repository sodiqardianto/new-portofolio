/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.sodiqardianto.com",
      },
    ],
    domains: [
      "127.0.0.1",
    ],
  },
};
