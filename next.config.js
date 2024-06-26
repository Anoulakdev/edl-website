/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['uat-api.edl.com.la'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  reactStrictMode: false,
}

module.exports = nextConfig
