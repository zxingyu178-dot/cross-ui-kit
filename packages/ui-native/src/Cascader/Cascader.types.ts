import type { ReactNode } from 'react'
import type { ViewStyle } from 'react-native'

export interface CascaderOption {
  value: string
  label: ReactNode
  children?: CascaderOption[]
}

export interface CascaderProps {
  value?: string[]
  defaultValue?: string[]
  onChange?: (value: string[]) => void
  options: CascaderOption[]
  placeholder?: string
  style?: ViewStyle
}
