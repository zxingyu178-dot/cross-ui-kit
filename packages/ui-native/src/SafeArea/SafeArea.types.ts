import type { ReactNode } from 'react'
import type { ViewStyle } from 'react-native'

export interface SafeAreaProps {
  children: ReactNode
  position?: 'top' | 'bottom' | 'all'
  style?: ViewStyle
}
