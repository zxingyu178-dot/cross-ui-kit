export interface TimeRangePickerProps {
  /** 选中值 [start, end]（HH:mm:ss） */
  value?: [string, string]
  /** 值变化回调 */
  onChange?: (value: [string, string]) => void
  /** 占位文字 [startPlaceholder, endPlaceholder] */
  placeholder?: [string, string]
  /** 是否禁用 */
  disabled?: boolean
  /** 连接符 */
  separator?: string
  /** 外层容器类名 */
  className?: string
}
