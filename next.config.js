/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: "standalone",
};

module.exports = withContentlayer(nextConfig);
