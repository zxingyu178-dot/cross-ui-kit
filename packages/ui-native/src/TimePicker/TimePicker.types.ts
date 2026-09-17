import type { ViewStyle } from 'react-native'

export type TimePickerFormat = 'HH:mm:ss' | 'HH:mm'

export interface TimePickerProps {
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  format?: TimePickerFormat
  placeholder?: string
  style?: ViewStyle
}
