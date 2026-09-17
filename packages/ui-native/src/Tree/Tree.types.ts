import type { ReactNode } from 'react'
import type { ViewStyle } from 'react-native'

export interface TreeNode {
  key: string
  title: string
  children?: TreeNode[]
  disabled?: boolean
  icon?: ReactNode
}

export interface TreeProps {
  data?: TreeNode[]
  defaultExpandAll?: boolean
  expandedKeys?: string[]
  onExpand?: (expandedKeys: string[]) => void
  selectedKeys?: string[]
  onSelect?: (selectedKeys: string[]) => void
  disabled?: boolean
  style?: ViewStyle
}
