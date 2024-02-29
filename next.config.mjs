/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  generateEtags: false,
  basePath: '/mdx-next',
  output: 'standalone',
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  experimental: {
    appDir: true
  },
  images: {
    domains: ['github.com', 'lh3.googleusercontent.com']
  }
}

export default nextConfig
