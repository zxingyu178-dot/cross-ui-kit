import type { ReactNode } from 'react'
import type { ViewStyle } from 'react-native'

export interface PopoverProps {
  trigger: ReactNode
  content: ReactNode
  align?: 'start' | 'center' | 'end'
  side?: 'top' | 'right' | 'bottom' | 'left'
  style?: ViewStyle
}
