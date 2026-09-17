import type { ReactNode } from 'react'

export interface TourStep {
  title: string
  description: string
  target?: string
  content?: ReactNode
}

export interface TourProps {
  steps?: TourStep[]
  current?: number
  onChange?: (current: number) => void
  onFinish?: () => void
  onClose?: () => void
  mask?: boolean
  prevText?: string
  nextText?: string
  finishText?: string
  skipText?: string
  showSkip?: boolean
  className?: string
}
