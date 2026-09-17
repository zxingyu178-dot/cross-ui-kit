import type { ReactNode } from 'react'
import type { ViewStyle } from 'react-native'

export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right'

export interface TooltipProps {
  /** 提示内容 */
  content: ReactNode
  /** 触发元素（native 端点击触发切换） */
  children: ReactNode
  /** 气泡位置（默认 top） */
  placement?: TooltipPlacement
  /** 触发元素与气泡的间距 px（默认 4） */
  sideOffset?: number
  /** 受控可见 */
  open?: boolean
  /** 可见变化回调 */
  onOpenChange?: (open: boolean) => void
  /** 默认可见（非受控） */
  defaultOpen?: boolean
  /** 禁用提示（禁用后仅渲染 children） */
  disabled?: boolean
  /** 外层容器样式 */
  style?: ViewStyle
}
