import type { ReactNode } from 'react'
import type { ViewStyle } from 'react-native'

export interface BackdropProps {
  open?: boolean
  onClose?: () => void
  children?: ReactNode
  opacity?: number
  style?: ViewStyle
}
