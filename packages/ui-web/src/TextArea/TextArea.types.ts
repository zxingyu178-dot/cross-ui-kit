export interface TextAreaProps {
  /** 输入值 */
  value?: string
  /** 值变化回调 */
  onChange?: (value: string) => void
  /** 占位文字 */
  placeholder?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 行数 */
  rows?: number
  /** 最大长度 */
  maxLength?: number
  /** 是否显示字数统计 */
  showCount?: boolean
  /** 是否自适应高度 */
  autoSize?: boolean
  /** 外层容器类名 */
  className?: string
}
