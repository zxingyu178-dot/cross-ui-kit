import type { ReactNode } from 'react'

export interface NavBarProps {
  /** 标题 */
  title?: ReactNode
  /** 左侧内容（默认返回箭头） */
  left?: ReactNode
  /** 右侧内容 */
  right?: ReactNode
  /** 点击返回 */
  onBack?: () => void
  /** 是否显示返回按钮 */
  showBack?: boolean
  /** 外层容器类名 */
  className?: string
}
