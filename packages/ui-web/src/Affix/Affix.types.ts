import type { ReactNode } from 'react'

export interface AffixProps {
  /** 距离窗口顶部达到指定偏移量后触发（px） */
  offsetTop?: number
  /** 距离窗口底部达到指定偏移量后触发（px） */
  offsetBottom?: number
  /** 固定状态改变时触发回调 */
  onChange?: (affixed: boolean) => void
  /** 子元素 */
  children?: ReactNode
  /** 外层容器类名 */
  className?: string
}
