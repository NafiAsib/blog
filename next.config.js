/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");
const nextConfig = {
  output: "standalone",
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = withContentlayer(nextConfig);
