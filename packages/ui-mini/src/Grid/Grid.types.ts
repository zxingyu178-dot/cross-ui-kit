import type { ReactNode } from 'react'

export type GridJustify = 'start' | 'center' | 'end' | 'between' | 'around'
export type GridAlign = 'top' | 'middle' | 'bottom'
export type GridGutter = number | [number, number]

export interface RowProps {
  gutter?: GridGutter
  justify?: GridJustify
  align?: GridAlign
  wrap?: boolean
  children?: ReactNode
  className?: string
}

export interface ColProps {
  span?: number
  offset?: number
  order?: number
  children?: ReactNode
  className?: string
}
