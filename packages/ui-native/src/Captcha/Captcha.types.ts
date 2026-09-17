import type { ViewStyle } from 'react-native'

export interface CaptchaProps {
  value?: string
  onChange?: (value: string) => void
  onSend?: () => void | Promise<void>
  countdown?: number
  disabled?: boolean
  placeholder?: string
  maxLength?: number
  style?: ViewStyle
}
