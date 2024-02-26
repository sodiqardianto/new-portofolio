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
      // "vuejs.org",
      // "www.w3.org",
      // "upload.wikimedia.org",
      // "getbootstrap.com",
      // "www.material-tailwind.com",
      // "w7.pngwing.com",
      // "nodejs.org",
      // "www.postgresql.org",
      // "avatars.githubusercontent.com",
      // "github.githubassets.com",
      // "cdn.sanity.io",
      // "i.pngimg.me",
    ],
  },
};
