import type { ViewStyle } from 'react-native'

export type InputNumberSize = 'sm' | 'md' | 'lg'

export interface InputNumberProps {
  value?: number | null
  defaultValue?: number | null
  onChange?: (value: number | null) => void
  min?: number
  max?: number
  step?: number
  precision?: number
  disabled?: boolean
  size?: InputNumberSize
  placeholder?: string
  controls?: boolean
  style?: ViewStyle
}
