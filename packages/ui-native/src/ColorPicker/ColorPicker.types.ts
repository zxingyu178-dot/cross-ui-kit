import type { ViewStyle } from 'react-native'

export interface ColorPickerProps {
  value?: string
  defaultValue?: string
  onChange?: (color: string) => void
  presetColors?: string[]
  disabled?: boolean
  placeholder?: string
  style?: ViewStyle
}
