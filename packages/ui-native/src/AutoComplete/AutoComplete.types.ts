import type { ReactNode } from 'react'
import type { ViewStyle } from 'react-native'

export interface AutoCompleteOption {
  value: string
  label: ReactNode
  disabled?: boolean
}

export interface AutoCompleteProps {
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  onSelect?: (option: AutoCompleteOption) => void
  options: AutoCompleteOption[]
  placeholder?: string
  disabled?: boolean
  filterOption?: (inputValue: string, option: AutoCompleteOption) => boolean
  style?: ViewStyle
}
