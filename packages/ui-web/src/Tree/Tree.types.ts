import type { ReactNode } from 'react'

export interface TreeNode {
  /** 唯一标识 */
  key: string
  /** 标题 */
  title: string
  /** 子节点 */
  children?: TreeNode[]
  /** 是否禁用 */
  disabled?: boolean
  /** 自定义图标 */
  icon?: ReactNode
}

export interface TreeProps {
  /** 树形数据 */
  data?: TreeNode[]
  /** 默认展开所有节点 */
  defaultExpandAll?: boolean
  /** 展开的 key 列表（受控） */
  expandedKeys?: string[]
  /** 展开变化回调 */
  onExpand?: (expandedKeys: string[]) => void
  /** 选中的 key 列表（受控） */
  selectedKeys?: string[]
  /** 选中变化回调 */
  onSelect?: (selectedKeys: string[]) => void
  /** 是否禁用 */
  disabled?: boolean
  /** 外层容器类名 */
  className?: string
}
