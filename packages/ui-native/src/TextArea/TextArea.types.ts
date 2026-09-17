import type { ViewStyle } from 'react-native'

export interface TextAreaProps {
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  disabled?: boolean
  rows?: number
  maxLength?: number
  showCount?: boolean
  autoSize?: boolean
  style?: ViewStyle
}
