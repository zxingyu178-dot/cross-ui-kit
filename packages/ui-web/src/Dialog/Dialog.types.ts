import type { ReactNode } from 'react'

export interface DialogProps {
  /** 受控可见（受控优先，由外部 state 决定开关） */
  open: boolean
  /** 开关请求：点遮罩/Esc/关闭钮/取消/确认时以 false 回调，由外部决定是否真关 */
  onOpenChange?: (open: boolean) => void
  /** 标题（同时作为无障碍名称） */
  title?: ReactNode
  /** 描述文本（children 缺省时作为正文） */
  description?: ReactNode
  /** 自定义正文（优先于 description） */
  children?: ReactNode
  /** 自定义底部；不传则渲染默认“取消/确定”按钮 */
  footer?: ReactNode
  /** 是否显示取消按钮（默认 true） */
  showCancel?: boolean
  /** 确定按钮文案 */
  confirmText?: string
  /** 取消按钮文案 */
  cancelText?: string
  /** 确定按钮加载中（提交场景：显示 spinner 并禁用） */
  confirmLoading?: boolean
  /** 点击遮罩是否请求关闭（默认 true） */
  closeOnOverlayClick?: boolean
  /** 按 Esc 是否请求关闭（默认 true） */
  closeOnEsc?: boolean
  /** 点击确定；返回 false 可阻止自动关闭（用于异步提交，外部完成后再关闭） */
  onConfirm?: () => void | false
  /** 点击取消/关闭 */
  onCancel?: () => void
  /** 内容容器类名 */
  className?: string
}
