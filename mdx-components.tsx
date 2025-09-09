import type { MDXComponents } from 'mdx/types'
import Callout from '@/content/callout'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return { h1: (p) => <h1 className="text-3xl md:text-4xl font-extrabold mt-2" {...p} />, Callout, ...components }
}
