import type { ViewStyle } from 'react-native'

export interface OtpInputProps {
  value?: string
  onChange?: (value: string) => void
  length?: number
  disabled?: boolean
  password?: boolean
  style?: ViewStyle
}
