export type InputNumberSize = 'sm' | 'md' | 'lg'

export interface InputNumberProps {
  /** 当前值（受控） */
  value?: number | null
  /** 默认值（非受控） */
  defaultValue?: number | null
  /** 值变化回调 */
  onChange?: (value: number | null) => void
  /** 最小值 */
  min?: number
  /** 最大值 */
  max?: number
  /** 步长（默认 1） */
  step?: number
  /** 小数精度 */
  precision?: number
  /** 是否禁用 */
  disabled?: boolean
  /** 尺寸（默认 md） */
  size?: InputNumberSize
  /** 占位文本 */
  placeholder?: string
  /** 是否显示加减按钮（默认 true） */
  controls?: boolean
  /** 外层容器类名 */
  className?: string
}
