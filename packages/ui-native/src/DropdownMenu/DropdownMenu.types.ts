import type { ReactNode } from 'react'
import type { ViewStyle } from 'react-native'

export interface DropdownMenuItem {
  key: string
  label: ReactNode
  onClick?: () => void
  disabled?: boolean
  danger?: boolean
  icon?: ReactNode
}

export interface DropdownMenuProps {
  trigger: ReactNode
  items: DropdownMenuItem[]
  align?: 'start' | 'center' | 'end'
  style?: ViewStyle
}
