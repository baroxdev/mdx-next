/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/mdx-next',
  output: 'export',
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  images: {
    domains: ['github.com', 'lh3.googleusercontent.com']
  },
  experimental: {
    appDir: true
  }
}

export default nextConfig
