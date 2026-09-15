/** 进度条语义色调 */
export type ProgressTone = 'primary' | 'success' | 'warning' | 'danger'

/** 轨道尺寸（高度） */
export type ProgressSize = 'sm' | 'md'

export interface ProgressProps {
  /** 当前进度值（受控，0 到 max） */
  value: number
  /** 最大值（默认 100） */
  max?: number
  /** 轨道高度（默认 md：8px；sm：4px） */
  size?: ProgressSize
  /** 语义色调（默认 primary） */
  tone?: ProgressTone
  /** 是否在末尾显示百分比文本（默认 false） */
  showLabel?: boolean
  /** 自定义类名 */
  className?: string
  /** 根节点 id */
  id?: string
}
