import type { ReactNode } from 'react'

/** 语义色（neutral 为中性灰） */
export type BadgeVariant = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'neutral'

/** 形态：soft 浅底深字 / solid 深底白字 / outline 描边 */
export type BadgeTone = 'soft' | 'solid' | 'outline'

/** 尺寸 */
export type BadgeSize = 'sm' | 'md'

export interface BadgeProps {
  /** 徽标内容（文本/图标） */
  children: ReactNode
  /** 语义色（默认 neutral） */
  variant?: BadgeVariant
  /** 形态（默认 soft 浅底） */
  tone?: BadgeTone
  /** 尺寸（默认 md） */
  size?: BadgeSize
  /** 点击回调（传入即可点击） */
  onPress?: () => void
  /** 无障碍标签 */
  accessibilityLabel?: string
}
