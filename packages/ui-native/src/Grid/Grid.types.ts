import type { ReactNode } from 'react'
import type { ViewStyle } from 'react-native'

export type GridJustify = 'start' | 'center' | 'end' | 'between' | 'around'
export type GridAlign = 'top' | 'middle' | 'bottom'
export type GridGutter = number | [number, number]

export interface RowProps {
  gutter?: GridGutter
  justify?: GridJustify
  align?: GridAlign
  wrap?: boolean
  children?: ReactNode
  style?: ViewStyle
}

export interface ColProps {
  span?: number
  offset?: number
  order?: number
  children?: ReactNode
  style?: ViewStyle
}
