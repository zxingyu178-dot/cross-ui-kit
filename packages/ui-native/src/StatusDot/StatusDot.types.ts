import type { ViewStyle } from 'react-native'

export type StatusDotTone = 'success' | 'warning' | 'danger' | 'info' | 'neutral' | 'primary'

export interface StatusDotProps {
  tone?: StatusDotTone
  size?: number
  outlined?: boolean
  text?: string
  style?: ViewStyle
}
