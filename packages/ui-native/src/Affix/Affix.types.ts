import type { ReactNode } from 'react'
import type { ViewStyle } from 'react-native'

export interface AffixProps {
  offsetTop?: number
  offsetBottom?: number
  onChange?: (affixed: boolean) => void
  children?: ReactNode
  style?: ViewStyle
}
