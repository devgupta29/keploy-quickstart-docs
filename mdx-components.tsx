import type { MDXComponents } from 'mdx/types'
import { Callout } from '@/components/Callout'
import { Step, Steps } from '@/components/Steps'
import { CodeBlock } from '@/components/CodeBlock'

/**
 * Global MDX component overrides.
 * Applies to ALL .mdx files in the project.
 * Custom components imported here are available directly in MDX without needing an import.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Override native HTML elements for consistent documentation styling
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mt-12 mb-4 first:mt-0">
        {children}
      </h1>
    ),
    h2: ({ children, id }) => (
      <h2
        id={id}
        className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mt-10 mb-3 scroll-mt-20 group"
      >
        <a href={`#${id}`} className="no-underline hover:underline">
          {children}
        </a>
      </h2>
    ),
    h3: ({ children, id }) => (
      <h3
        id={id}
        className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-2 scroll-mt-20"
      >
        {children}
      </h3>
    ),
    h4: ({ children, id }) => (
      <h4
        id={id}
        className="text-lg font-semibold text-gray-800 dark:text-gray-100 mt-6 mb-2 scroll-mt-20"
      >
        {children}
      </h4>
    ),
    p: ({ children }) => (
      <p className="text-gray-700 dark:text-gray-300 leading-7 mb-4">{children}</p>
    ),
    a: ({ children, href }) => (
      <a
        href={href}
        className="text-orange-600 dark:text-orange-400 font-medium hover:underline underline-offset-4"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-outside pl-6 mb-4 space-y-1 text-gray-700 dark:text-gray-300">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-outside pl-6 mb-4 space-y-1 text-gray-700 dark:text-gray-300">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="leading-7">{children}</li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-orange-400 pl-4 my-4 italic text-gray-600 dark:text-gray-400">
        {children}
      </blockquote>
    ),
    code: ({ children, className }) => {
      // Inline code (no language class)
      if (!className) {
        return (
          <code className="bg-gray-100 dark:bg-gray-800 text-orange-600 dark:text-orange-400 px-1.5 py-0.5 rounded text-sm font-mono">
            {children}
          </code>
        )
      }
      return <code className={className}>{children}</code>
    },
    pre: ({ children }) => (
      <div className="relative my-6 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
        <pre className="overflow-x-auto p-4 bg-gray-950 text-gray-100 text-sm font-mono leading-6">
          {children}
        </pre>
      </div>
    ),
    hr: () => <hr className="my-8 border-gray-200 dark:border-gray-700" />,
    strong: ({ children }) => (
      <strong className="font-semibold text-gray-900 dark:text-white">{children}</strong>
    ),
    // Make custom components available in MDX without imports
    Callout,
    Step,
    Steps,
    CodeBlock,
    ...components,
  }
}
