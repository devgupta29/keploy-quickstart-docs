import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow .md and .mdx files as pages/routes
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}

// When using Turbopack (Next.js 16 default), plugin names must be strings,
// not imported function references. Turbopack cannot serialize JS functions to Rust.
// See: node_modules/next/dist/docs/01-app/02-guides/mdx.md#using-plugins-with-turbopack
const withMDX = createMDX({
  options: {
    remarkPlugins: [
      'remark-gfm',
    ],
    rehypePlugins: [
      'rehype-slug',
      ['rehype-autolink-headings', { behavior: 'wrap' }],
    ],
  },
})

export default withMDX(nextConfig)
