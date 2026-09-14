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
  /** 加载中（异步切换，拦截操作并在滑块内显示 spinner） */
  loading?: boolean
  /** 尺寸（默认 md） */
  size?: SwitchSize
  /** 开关文本（渲染在右侧） */
  label?: ReactNode
  /** 无障碍标签（默认取字符串 label） */
  accessibilityLabel?: string
}
