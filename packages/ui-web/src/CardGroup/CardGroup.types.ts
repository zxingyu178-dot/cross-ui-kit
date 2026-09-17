import type { ReactNode } from 'react'

export interface CardGroupItem {
  /** 唯一标识 */
  key: string
  /** 卡片标题 */
  title?: string
  /** 卡片内容 */
  content?: ReactNode
  /** 卡片封面图 */
  cover?: string
  /** 卡片额外操作 */
  extra?: ReactNode
}

export interface CardGroupProps {
  /** 卡片列表 */
  items?: CardGroupItem[]
  /** 列数（响应式：默认 1，md 2，lg 3） */
  columns?: 1 | 2 | 3 | 4
  /** 卡片间距（px） */
  gutter?: number
  /** 子元素（自定义卡片） */
  children?: ReactNode
  /** 外层容器类名 */
  className?: string
}
