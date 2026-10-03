'use client'

import { useState } from 'react'
import { Copy, Check, Terminal } from 'lucide-react'

interface CodeBlockProps {
  /** The code string to display */
  code: string
  /** Language for syntax highlighting label */
  language?: string
  /** Optional filename to display in the header */
  filename?: string
  /** Whether this is a terminal/shell command block */
  isCommand?: boolean
}

export function CodeBlock({ code, language = 'bash', filename, isCommand = false }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="my-6 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-2">
          {isCommand && (
            <Terminal className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" />
          )}
          {filename ? (
            <span className="text-xs font-medium text-gray-600 dark:text-gray-400 font-mono">
              {filename}
            </span>
          ) : (
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
              {language}
            </span>
          )}
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-green-500" />
              <span className="text-green-500">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code content */}
      <pre className="overflow-x-auto p-4 bg-gray-950 text-gray-100 text-sm font-mono leading-6 m-0">
        <code className={`language-${language}`}>{code.trim()}</code>
      </pre>
    </div>
  )
}
