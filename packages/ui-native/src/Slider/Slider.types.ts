import type { ViewStyle } from 'react-native'

export type SliderOrientation = 'horizontal' | 'vertical'

export interface SliderProps {
  value?: number
  defaultValue?: number
  onChange?: (value: number) => void
  min?: number
  max?: number
  step?: number
  disabled?: boolean
  orientation?: SliderOrientation
  style?: ViewStyle
}
