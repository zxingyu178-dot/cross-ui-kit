import type { ReactNode } from 'react'
import type { ViewStyle } from 'react-native'

export type DrawerPlacement = 'left' | 'right' | 'top' | 'bottom'

export interface DrawerProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  title?: ReactNode
  children: ReactNode
  placement?: DrawerPlacement
  size?: number
  style?: ViewStyle
}
