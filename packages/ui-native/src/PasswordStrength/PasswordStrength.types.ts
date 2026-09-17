import type { ViewStyle } from 'react-native'

export interface PasswordStrengthProps {
  value: string
  minLength?: number
  style?: ViewStyle
}

export type StrengthLevel = 'empty' | 'weak' | 'medium' | 'strong'
