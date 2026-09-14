import type { ReactNode } from 'react'

/** 开关尺寸 */
export type SwitchSize = 'sm' | 'md'

export interface SwitchProps {
  /** 受控开关态 */
  checked?: boolean
  /** 非受控初值 */
  defaultChecked?: boolean
  /** 开关态变化（三栈统一 boolean 值回调） */
  onCheckedChange?: (checked: boolean) => void
  /** 禁用 */
  disabled?: boolean
  /** 加载中（异步切换，拦截操作并显示 loading，状态待外部确认后再变） */
  loading?: boolean
  /** 尺寸（默认 md） */
  size?: SwitchSize
  /** 开关文本（渲染在右侧，受控时可点文字切换） */
  label?: ReactNode
  /** 外层类名（仅允许 token 化样式） */
  className?: string
}
