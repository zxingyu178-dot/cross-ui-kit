import type { ReactNode } from 'react'

/** 语义色（neutral 为中性灰），与 Badge 同一套调色板 */
export type TagVariant = 'neutral' | 'primary' | 'success' | 'warning' | 'danger' | 'info'

/** 形态：soft 浅底深字（默认）/ solid 深底白字 / outline 描边 */
export type TagTone = 'soft' | 'solid' | 'outline'

/** 尺寸 */
export type TagSize = 'sm' | 'md'

export interface TagProps {
  /** 标签内容（文本 / 图标+文本） */
  children: ReactNode
  /** 语义色，默认 neutral */
  variant?: TagVariant
  /** 形态，默认 soft；selected 时强制 solid */
  tone?: TagTone
  /** 尺寸，默认 md */
  size?: TagSize
  /** 选中态（筛选场景），选中后渲染为实心高亮，配合 onPress 切换 */
  selected?: boolean
  /** 是否显示关闭 ×，配合 onClose 使用 */
  closable?: boolean
  /** 禁用（不可点 / 不可关闭，降透明） */
  disabled?: boolean
  /** 点击关闭 × 触发（阻止冒泡，不触发标签本身 onPress） */
  onClose?: () => void
  /** 点击标签本身（筛选切换） */
  onPress?: () => void
  className?: string
}
