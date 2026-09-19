import type { ReactNode } from 'react'

export interface NoticeBarProps {
  content: ReactNode
  icon?: ReactNode
  action?: ReactNode
  onClose?: () => void
  tone?: 'info' | 'success' | 'warning' | 'danger'
  scrollable?: boolean
  className?: string
}
