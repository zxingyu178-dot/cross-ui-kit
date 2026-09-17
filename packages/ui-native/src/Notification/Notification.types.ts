import type { ReactNode } from 'react'
import type { ViewStyle } from 'react-native'

export type NotificationType = 'success' | 'info' | 'warning' | 'error'

export interface NotificationProps {
  title?: string
  description?: string
  type?: NotificationType
  duration?: number
  onClose?: () => void
  closable?: boolean
  icon?: ReactNode
  style?: ViewStyle
}
