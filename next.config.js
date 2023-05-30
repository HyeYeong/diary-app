/** @type {import('next').NextConfig} */
const runtimeCaching = require('next-pwa/cache');
const withPWA = require("next-pwa")({
  dest: 'public',
  register: true,
  skipWaiting: true,
  runtimeCaching,
});

const nextConfig = withPWA({
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === "production" ?
    "https://hyeyeong.github.io/daily-pieces" : "",
})

module.exports = nextConfig;
