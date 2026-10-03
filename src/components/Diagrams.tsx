import { ReactNode } from 'react'

interface DiagramBoxProps {
  title?: string
  children: ReactNode
}

/**
 * A styled container for ASCII or text-based architecture diagrams.
 */
export function DiagramBox({ title, children }: DiagramBoxProps) {
  return (
    <div className="my-8 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
      {title && (
        <div className="px-4 py-2 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            {title}
          </p>
        </div>
      )}
      <div className="p-6 bg-white dark:bg-gray-900 font-mono text-sm text-gray-700 dark:text-gray-300 overflow-x-auto">
        {children}
      </div>
    </div>
  )
}

interface ArchFlowProps {
  steps: { label: string; description: string; color?: string }[]
}

/**
 * A horizontal flow diagram showing how components interact.
 */
export function ArchFlow({ steps }: ArchFlowProps) {
  return (
    <div className="my-8 flex flex-wrap items-center justify-center gap-2">
      {steps.map((step, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className="flex flex-col items-center">
            <div
              className={`px-4 py-2.5 rounded-lg border-2 text-center min-w-[100px] ${
                step.color === 'orange'
                  ? 'border-orange-400 bg-orange-50 dark:bg-orange-950/30 text-orange-700 dark:text-orange-300'
                  : step.color === 'green'
                  ? 'border-green-400 bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-300'
                  : step.color === 'blue'
                  ? 'border-blue-400 bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300'
                  : 'border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
              }`}
            >
              <p className="font-semibold text-sm">{step.label}</p>
              <p className="text-xs mt-0.5 opacity-70">{step.description}</p>
            </div>
          </div>
          {i < steps.length - 1 && (
            <div className="text-gray-400 dark:text-gray-600 font-mono text-lg select-none">
              →
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
