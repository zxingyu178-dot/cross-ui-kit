import type { ReactNode } from 'react'

export interface AvatarGroupItem {
  /** 唯一标识 */
  key: string
  /** 头像图片地址 */
  src?: string
  /** 头像文字（无 src 时显示） */
  text?: string
  /** 头像背景色 */
  color?: string
}

export interface AvatarGroupProps {
  /** 头像列表 */
  items?: AvatarGroupItem[]
  /** 最大显示数量（超出显示 +N） */
  max?: number
  /** 头像大小（px） */
  size?: number
  /** 头像形状 */
  shape?: 'circle' | 'square'
  /** 子元素（自定义头像） */
  children?: ReactNode
  /** 外层容器类名 */
  className?: string
}
