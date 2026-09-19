import type { ReactNode } from 'react'
import type { ViewStyle } from 'react-native'

export interface CellProps {
  title?: ReactNode
  description?: ReactNode
  icon?: ReactNode
  right?: ReactNode
  onClick?: () => void
  clickable?: boolean
  style?: ViewStyle
}
