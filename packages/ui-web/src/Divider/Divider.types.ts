export type DividerOrientation = 'horizontal' | 'vertical'
export type DividerType = 'solid' | 'dashed' | 'dotted'
export type DividerTextPosition = 'left' | 'center' | 'right'

export interface DividerProps {
  /** 方向（默认 horizontal） */
  orientation?: DividerOrientation
  /** 线条类型（默认 solid） */
  type?: DividerType
  /** 分割线文字（仅 horizontal 有效） */
  text?: string
  /** 文字位置（默认 center，仅 text 存在时有效） */
  textPosition?: DividerTextPosition
  /** 外层容器类名 */
  className?: string
}
