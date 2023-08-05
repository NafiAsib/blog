/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: "standalone",
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = withContentlayer(nextConfig);
