export interface InputPasswordProps {
  /** 输入值 */
  value?: string
  /** 值变化回调 */
  onChange?: (value: string) => void
  /** 占位文字 */
  placeholder?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 是否显示切换按钮 */
  visibilityToggle?: boolean
  /** 外层容器类名 */
  className?: string
}
