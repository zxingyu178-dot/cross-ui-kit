import type { ReactNode } from 'react'

export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'caption'

export interface TypographyProps {
  /** 变体 */
  variant?: TypographyVariant
  /** 文字颜色 */
  color?: string
  /** 是否省略（单行） */
  ellipsis?: boolean
  /** 是否加粗 */
  bold?: boolean
  /** 子元素 */
  children?: ReactNode
  /** 外层容器类名 */
  className?: string
}
