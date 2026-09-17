import type { ReactNode } from 'react'

export interface PopoverProps {
  /** 触发元素 */
  trigger: ReactNode
  /** 弹出内容 */
  content: ReactNode
  /** 对齐方式（默认 center） */
  align?: 'start' | 'center' | 'end'
  /** 弹出方向（默认 bottom） */
  side?: 'top' | 'right' | 'bottom' | 'left'
  /** 外层容器类名 */
  className?: string
}
