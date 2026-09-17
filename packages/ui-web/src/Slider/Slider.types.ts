export type SliderOrientation = 'horizontal' | 'vertical'

export interface SliderProps {
  /** 当前值（受控） */
  value?: number
  /** 默认值（非受控，默认 0） */
  defaultValue?: number
  /** 值变化回调 */
  onChange?: (value: number) => void
  /** 最小值（默认 0） */
  min?: number
  /** 最大值（默认 100） */
  max?: number
  /** 步长（默认 1） */
  step?: number
  /** 是否禁用 */
  disabled?: boolean
  /** 方向（默认 horizontal） */
  orientation?: SliderOrientation
  /** 外层容器类名 */
  className?: string
}
