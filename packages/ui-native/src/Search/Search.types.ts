import type { ViewStyle } from 'react-native'

export interface SearchProps {
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  disabled?: boolean
  onSearch?: (value: string) => void
  enterButton?: boolean
  enterButtonText?: string
  style?: ViewStyle
}
