import type { ReactNode } from 'react'

/** 轻提示语义类型（决定图标与语义色） */
export type ToastType = 'info' | 'success' | 'warning' | 'error' | 'loading'

/** 展示位置 */
export type ToastPosition = 'top' | 'center' | 'bottom'

export interface ToastProps {
  /** 受控可见（受控优先，由外部 state 决定） */
  open: boolean
  /** 开关请求：自动消失时以 false 回调 */
  onOpenChange?: (open: boolean) => void
  /** 提示文本内容（建议传字符串） */
  message: ReactNode
  /** 语义类型（默认 info；loading 建议配合 duration=0 由外部控制关闭） */
  type?: ToastType
  /** 自动关闭时长（毫秒，默认 2400；传 0 表示常驻不自动关） */
  duration?: number
  /** 展示位置（默认 center；绝对定位，需挂在页面根容器内） */
  position?: ToastPosition
  /** 完全关闭后回调 */
  onClose?: () => void
  /** 无障碍标签（默认朗读 message） */
  accessibilityLabel?: string
}
