import type { ViewStyle } from 'react-native'

export interface InputPasswordProps {
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  disabled?: boolean
  visibilityToggle?: boolean
  style?: ViewStyle
}
