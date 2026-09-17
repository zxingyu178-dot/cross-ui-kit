import type { ViewStyle } from 'react-native'

export interface TimeRangePickerProps {
  value?: [string, string]
  onChange?: (value: [string, string]) => void
  placeholder?: [string, string]
  disabled?: boolean
  separator?: string
  style?: ViewStyle
}
