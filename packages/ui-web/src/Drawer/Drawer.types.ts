import type { ReactNode } from 'react'

export type DrawerPlacement = 'left' | 'right' | 'top' | 'bottom'

export interface DrawerProps {
  /** 是否打开（受控） */
  open?: boolean
  /** 打开状态变化回调 */
  onOpenChange?: (open: boolean) => void
  /** 标题 */
  title?: ReactNode
  /** 抽屉内容 */
  children: ReactNode
  /** 弹出方向（默认 right） */
  placement?: DrawerPlacement
  /** 宽度（左右方向，默认 360）/ 高度（上下方向） */
  size?: number
  /** 外层容器类名 */
  className?: string
}
