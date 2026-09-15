/** 骨架形态：矩形块 / 圆形（头像） / 文本行组 */
export type SkeletonVariant = 'rect' | 'circle' | 'text'

/** 圆形骨架尺寸档（头像常用直径） */
export type SkeletonSize = 'sm' | 'md' | 'lg'

export interface SkeletonProps {
  /** 形态（默认 rect） */
  variant?: SkeletonVariant
  /** circle 直径档：sm 24 / md 40 / lg 56（默认 md） */
  size?: SkeletonSize
  /** variant=text 时的行数（默认 3，末行自动收窄为 60%） */
  lines?: number
  /** 宽度覆盖（默认 rect/text 100%、circle 取 size）；数字 px 或百分比字符串 */
  width?: string | number
  /** 高度覆盖（默认 rect 16、text 行高 12、circle 取 size）；数字 px 或百分比字符串 */
  height?: string | number
  /** 无障碍标签 */
  accessibilityLabel?: string
}
