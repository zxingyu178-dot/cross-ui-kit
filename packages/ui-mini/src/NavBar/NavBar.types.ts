import type { ReactNode } from 'react'

export interface NavBarProps {
  title?: ReactNode
  left?: ReactNode
  right?: ReactNode
  onBack?: () => void
  showBack?: boolean
  className?: string
}
