const nextTranslate = require("next-translate-plugin");
/** @type {import('next').NextConfig} */

const nextConfig = nextTranslate({
  reactStrictMode: true,
  images: {
    domains: ["picsum.photos"],
  },
});

module.exports = nextConfig;