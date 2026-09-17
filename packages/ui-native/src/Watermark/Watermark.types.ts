import type { ReactNode } from 'react'
import type { ViewStyle } from 'react-native'

export interface WatermarkProps {
  text?: string
  color?: string
  fontSize?: number
  rotate?: number
  gap?: number
  opacity?: number
  children?: ReactNode
  style?: ViewStyle
}
