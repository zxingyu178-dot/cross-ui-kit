import type { ReactNode } from 'react'
import type { ViewStyle } from 'react-native'

export type RateSize = 'sm' | 'md' | 'lg'

export interface RateProps {
  value?: number
  defaultValue?: number
  onChange?: (value: number) => void
  count?: number
  allowHalf?: boolean
  disabled?: boolean
  size?: RateSize
  character?: ReactNode
  style?: ViewStyle
}
