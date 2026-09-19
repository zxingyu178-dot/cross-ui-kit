import type { ViewStyle } from 'react-native'

export interface QRCodeProps {
  value: string
  size?: number
  level?: 'L' | 'M' | 'Q' | 'H'
  color?: string
  bgColor?: string
  style?: ViewStyle
}
