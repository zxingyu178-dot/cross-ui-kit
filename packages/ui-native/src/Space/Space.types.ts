import type { ReactNode } from 'react'
import type { ViewStyle } from 'react-native'

export type SpaceSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number
export type SpaceDirection = 'horizontal' | 'vertical'
export type SpaceAlign = 'start' | 'center' | 'end' | 'baseline'

export interface SpaceProps {
  size?: SpaceSize
  direction?: SpaceDirection
  align?: SpaceAlign
  wrap?: boolean
  children?: ReactNode
  style?: ViewStyle
}
