import type { ViewStyle } from 'react-native'

export interface AddressOption {
  value: string
  label: string
  children?: AddressOption[]
}

export interface AddressValue {
  province?: string
  city?: string
  district?: string
}

export interface AddressProps {
  value?: AddressValue
  onChange?: (value: AddressValue) => void
  options?: AddressOption[]
  placeholder?: string
  disabled?: boolean
  style?: ViewStyle
}
