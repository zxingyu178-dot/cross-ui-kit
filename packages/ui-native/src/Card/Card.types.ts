import type { ReactNode } from 'react'

/** 卡片形态：outlined 描边（默认）/ elevated 投影 */
export type CardVariant = 'outlined' | 'elevated'

export interface CardProps {
  /** 卡片形态，默认 outlined */
  variant?: CardVariant
  children?: ReactNode
}

export interface CardHeaderProps {
  /** 标题（渲染为 CardTitle） */
  title?: ReactNode
  /** 标题下的次要描述（渲染为 CardDescription） */
  description?: ReactNode
  /** 头部右侧操作区（按钮 / 图标 / 链接） */
  action?: ReactNode
}

export interface CardSubPartProps {
  children?: ReactNode
}
