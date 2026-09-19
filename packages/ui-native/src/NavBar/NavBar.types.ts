import type { ReactNode } from 'react'
import type { ViewStyle } from 'react-native'

export interface NavBarProps {
  title?: ReactNode
  left?: ReactNode
  right?: ReactNode
  onBack?: () => void
  showBack?: boolean
  style?: ViewStyle
}
