import type { ReactNode } from 'react'

export interface CellProps {
  title?: ReactNode
  description?: ReactNode
  icon?: ReactNode
  right?: ReactNode
  onClick?: () => void
  clickable?: boolean
  className?: string
}
