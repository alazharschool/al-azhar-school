/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  experimental: {
    // Remove invalid options
  },
  output: 'standalone',
  poweredByHeader: false,
  compress: true,
  generateEtags: false
}

export default nextConfig
