import type { ReactNode } from 'react'
import type { ViewStyle } from 'react-native'

export interface ProgressRingProps {
  value: number
  size?: number
  strokeWidth?: number
  children?: ReactNode
  tone?: 'primary' | 'success' | 'warning' | 'danger'
  style?: ViewStyle
}
