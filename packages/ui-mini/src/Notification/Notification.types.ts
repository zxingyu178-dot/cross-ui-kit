import type { ReactNode } from 'react'

export type NotificationType = 'success' | 'info' | 'warning' | 'error'

export interface NotificationProps {
  title?: string
  description?: string
  type?: NotificationType
  duration?: number
  onClose?: () => void
  closable?: boolean
  icon?: ReactNode
  className?: string
}
