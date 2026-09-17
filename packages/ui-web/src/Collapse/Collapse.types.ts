import type { ReactNode } from 'react'

export interface CollapseItem {
  /** 唯一标识 */
  key: string
  /** 标题 */
  title: ReactNode
  /** 内容 */
  content: ReactNode
  /** 是否禁用 */
  disabled?: boolean
}

export interface CollapseProps {
  /** 面板列表 */
  items: CollapseItem[]
  /** 当前展开的 key（受控） */
  activeKey?: string | string[]
  /** 默认展开的 key（非受控） */
  defaultActiveKey?: string | string[]
  /** 展开变化回调 */
  onChange?: (activeKey: string | string[]) => void
  /** 手风琴模式（只展开一个，默认 false） */
  accordion?: boolean
  /** 外层容器类名 */
  className?: string
}
