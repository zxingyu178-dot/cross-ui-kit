import type { ReactNode } from 'react'

/** 尺寸：sm 32 / md 40 / lg 48 */
export type AvatarSize = 'sm' | 'md' | 'lg'

/** 形状：circle 圆形（默认）/ square 圆角方形 */
export type AvatarShape = 'circle' | 'square'

export interface AvatarProps {
  /** 头像图片地址；传入且未加载失败时显示图片 */
  src?: string
  /** 名称；无图片（或图片失败）时取首字符作为文字头像 */
  name?: string
  /** 尺寸，默认 md */
  size?: AvatarSize
  /** 形状，默认 circle */
  shape?: AvatarShape
  /** 自定义内容（图标等），优先级高于 src/name */
  children?: ReactNode
}
