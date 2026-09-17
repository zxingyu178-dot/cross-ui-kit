import type { ReactNode } from 'react'
import type { ViewStyle } from 'react-native'

export interface FloatButtonProps {
  icon?: ReactNode
  onClick?: () => void
  type?: 'primary' | 'default'
  shape?: 'circle' | 'square'
  tooltip?: string
  bottom?: number
  right?: number
  style?: ViewStyle
}
