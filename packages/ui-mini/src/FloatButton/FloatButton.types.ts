import type { ReactNode } from 'react'

export interface FloatButtonProps {
  icon?: ReactNode
  onClick?: () => void
  type?: 'primary' | 'default'
  shape?: 'circle' | 'square'
  tooltip?: string
  bottom?: number
  right?: number
  className?: string
}
