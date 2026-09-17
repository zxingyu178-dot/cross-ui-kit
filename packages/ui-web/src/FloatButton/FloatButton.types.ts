import type { ReactNode } from 'react'

export interface FloatButtonProps {
  /** 图标 */
  icon?: ReactNode
  /** 点击回调 */
  onClick?: () => void
  /** 类型 */
  type?: 'primary' | 'default'
  /** 形状 */
  shape?: 'circle' | 'square'
  /** 提示文字 */
  tooltip?: string
  /** 距底部距离（px） */
  bottom?: number
  /** 距右侧距离（px） */
  right?: number
  /** 外层容器类名 */
  className?: string
}
