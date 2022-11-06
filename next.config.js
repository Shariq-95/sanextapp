/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:["free4kwallpapers.com"]
  },
  future: {webpack5: true},
}

module.exports = nextConfig
