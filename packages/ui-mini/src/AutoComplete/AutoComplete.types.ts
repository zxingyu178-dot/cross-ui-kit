import type { ReactNode } from 'react'

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
  className?: string
}
