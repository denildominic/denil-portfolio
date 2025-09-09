import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

const nextConfig = {
  experimental: { mdxRs: true },
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: { remarkPlugins: [remarkGfm] },
})
export default withMDX(nextConfig)
