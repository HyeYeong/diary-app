/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === "production" ?
    "https://hyeyeong.github.io/daily-pieces" : "",
}

module.exports = nextConfig
