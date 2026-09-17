import type { ReactNode } from 'react'

export type GridJustify = 'start' | 'center' | 'end' | 'between' | 'around'
export type GridAlign = 'top' | 'middle' | 'bottom'
export type GridGutter = number | [number, number]

export interface RowProps {
  /** 栅格间距（水平/垂直） */
  gutter?: GridGutter
  /** 水平对齐 */
  justify?: GridJustify
  /** 垂直对齐 */
  align?: GridAlign
  /** 是否换行 */
  wrap?: boolean
  /** 子元素 */
  children?: ReactNode
  /** 外层容器类名 */
  className?: string
}

export interface ColProps {
  /** 栅格占位（1-24） */
  span?: number
  /** 栅格偏移（1-24） */
  offset?: number
  /** 排序 */
  order?: number
  /** 子元素 */
  children?: ReactNode
  /** 外层容器类名 */
  className?: string
}
