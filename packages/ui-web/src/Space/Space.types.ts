import type { ReactNode } from 'react'

export type SpaceSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number
export type SpaceDirection = 'horizontal' | 'vertical'
export type SpaceAlign = 'start' | 'center' | 'end' | 'baseline'

export interface SpaceProps {
  /** 间距大小（默认 md） */
  size?: SpaceSize
  /** 方向（默认 horizontal） */
  direction?: SpaceDirection
  /** 对齐方式 */
  align?: SpaceAlign
  /** 是否换行（仅 horizontal 有效） */
  wrap?: boolean
  /** 子元素 */
  children?: ReactNode
  /** 外层容器类名 */
  className?: string
}
