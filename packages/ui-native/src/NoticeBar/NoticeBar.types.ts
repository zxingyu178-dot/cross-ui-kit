import type { ReactNode } from 'react'
import type { ViewStyle } from 'react-native'

export interface NoticeBarProps {
  content: ReactNode
  icon?: ReactNode
  action?: ReactNode
  onClose?: () => void
  tone?: 'info' | 'success' | 'warning' | 'danger'
  scrollable?: boolean
  style?: ViewStyle
}
