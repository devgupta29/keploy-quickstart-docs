import { ReactNode } from 'react'
import { Check } from 'lucide-react'

interface StepsProps {
  children: ReactNode
}

interface StepProps {
  number?: number
  title: string
  children: ReactNode
}

export function Steps({ children }: StepsProps) {
  return (
    <div className="my-8 relative">
      {/* Vertical connector line */}
      <div className="absolute left-5 top-8 bottom-8 w-0.5 bg-gradient-to-b from-orange-300 via-orange-200 to-transparent dark:from-orange-700 dark:via-orange-800" />
      <div className="space-y-8">
        {children}
      </div>
    </div>
  )
}

export function Step({ number, title, children }: StepProps) {
  return (
    <div className="relative flex gap-4">
      {/* Step indicator */}
      <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-md shadow-orange-200 dark:shadow-orange-900/40">
        {number !== undefined ? (
          <span className="text-white font-bold text-sm">{number}</span>
        ) : (
          <Check className="w-4 h-4 text-white" />
        )}
      </div>

      {/* Step content */}
      <div className="flex-1 min-w-0 pt-1.5 pb-2">
        <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <div className="text-gray-700 dark:text-gray-300 text-sm leading-6 [&>p]:mt-0">
          {children}
        </div>
      </div>
    </div>
  )
}
