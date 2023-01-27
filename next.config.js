/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com", "external-content.duckduckgo.com"]
  }
}

module.exports = nextConfig
