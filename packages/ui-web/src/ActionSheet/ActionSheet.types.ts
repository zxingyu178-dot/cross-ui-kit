import type { ReactNode } from 'react'

export interface ActionSheetAction {
  key: string
  label: ReactNode
  /** 是否危险操作 */
  danger?: boolean
  /** 是否禁用 */
  disabled?: boolean
}

export interface ActionSheetProps {
  /** 是否打开 */
  open: boolean
  /** 动作列表 */
  actions: ActionSheetAction[]
  /** 标题 */
  title?: ReactNode
  /** 关闭按钮文字 */
  cancelText?: string
  /** 选中动作 */
  onSelect?: (key: string) => void
  /** 关闭 */
  onClose?: () => void
  /** 外层容器类名 */
  className?: string
}
