export interface ColorPickerProps {
  /** 当前颜色值（受控，如 "#2563eb"） */
  value?: string
  /** 默认颜色值（非受控） */
  defaultValue?: string
  /** 颜色变化回调 */
  onChange?: (color: string) => void
  /** 预设颜色列表 */
  presetColors?: string[]
  /** 是否禁用 */
  disabled?: boolean
  /** 占位文本 */
  placeholder?: string
  /** 外层容器类名 */
  className?: string
}
