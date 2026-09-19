import type { ReactNode } from 'react'

export interface ProgressRingProps {
  value: number
  size?: number
  strokeWidth?: number
  children?: ReactNode
  tone?: 'primary' | 'success' | 'warning' | 'danger'
  className?: string
}
