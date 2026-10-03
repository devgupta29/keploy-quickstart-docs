import { ReactNode } from 'react'
import { AlertCircle, Info, Lightbulb, TriangleAlert, Zap } from 'lucide-react'

type CalloutType = 'note' | 'tip' | 'warning' | 'danger' | 'info'

interface CalloutProps {
  type?: CalloutType
  title?: string
  children: ReactNode
}

const config: Record<
  CalloutType,
  { icon: typeof Info; bg: string; border: string; titleColor: string; textColor: string; defaultTitle: string }
> = {
  note: {
    icon: Info,
    bg: 'bg-blue-50 dark:bg-blue-950/40',
    border: 'border-blue-300 dark:border-blue-700',
    titleColor: 'text-blue-800 dark:text-blue-300',
    textColor: 'text-blue-700 dark:text-blue-400',
    defaultTitle: 'Note',
  },
  tip: {
    icon: Lightbulb,
    bg: 'bg-green-50 dark:bg-green-950/40',
    border: 'border-green-300 dark:border-green-700',
    titleColor: 'text-green-800 dark:text-green-300',
    textColor: 'text-green-700 dark:text-green-400',
    defaultTitle: 'Tip',
  },
  warning: {
    icon: TriangleAlert,
    bg: 'bg-yellow-50 dark:bg-yellow-950/40',
    border: 'border-yellow-300 dark:border-yellow-700',
    titleColor: 'text-yellow-800 dark:text-yellow-300',
    textColor: 'text-yellow-700 dark:text-yellow-400',
    defaultTitle: 'Warning',
  },
  danger: {
    icon: AlertCircle,
    bg: 'bg-red-50 dark:bg-red-950/40',
    border: 'border-red-300 dark:border-red-700',
    titleColor: 'text-red-800 dark:text-red-300',
    textColor: 'text-red-700 dark:text-red-400',
    defaultTitle: 'Danger',
  },
  info: {
    icon: Zap,
    bg: 'bg-orange-50 dark:bg-orange-950/40',
    border: 'border-orange-300 dark:border-orange-700',
    titleColor: 'text-orange-800 dark:text-orange-300',
    textColor: 'text-orange-700 dark:text-orange-400',
    defaultTitle: 'Info',
  },
}

export function Callout({ type = 'note', title, children }: CalloutProps) {
  const { icon: Icon, bg, border, titleColor, textColor, defaultTitle } = config[type]

  return (
    <div className={`my-6 flex gap-3 rounded-lg border p-4 ${bg} ${border}`}>
      <Icon className={`w-5 h-5 mt-0.5 shrink-0 ${titleColor}`} />
      <div className="flex-1 min-w-0">
        <p className={`font-semibold text-sm mb-1 ${titleColor}`}>
          {title ?? defaultTitle}
        </p>
        <div className={`text-sm leading-6 ${textColor} [&>p]:mb-0 [&>p]:leading-6`}>
          {children}
        </div>
      </div>
    </div>
  )
}
