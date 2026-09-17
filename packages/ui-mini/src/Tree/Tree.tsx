/**
 * Tree 树形控件（mini：小程序 / 移动 H5）—— View+Text 自建，
 * 树形结构，支持展开/折叠、选中、禁用。
 */
import { Text, View } from '@tarojs/components'
import { useState } from 'react'
import type { TreeNode, TreeProps } from './Tree.types'
import './Tree.scss'

function getAllKeys(nodes: TreeNode[]): string[] {
  const keys: string[] = []
  const traverse = (list: TreeNode[]) => {
    list.forEach((node) => {
      if (node.children && node.children.length > 0) {
        keys.push(node.key)
        traverse(node.children)
      }
    })
  }
  traverse(nodes)
  return keys
}

function TreeItem({
  node,
  level,
  expandedKeys,
  selectedKeys,
  onToggle,
  onSelectNode,
  disabled,
}: {
  node: TreeNode
  level: number
  expandedKeys: string[]
  selectedKeys: string[]
  onToggle: (key: string) => void
  onSelectNode: (key: string) => void
  disabled?: boolean
}) {
  const hasChildren = node.children && node.children.length > 0
  const isExpanded = expandedKeys.includes(node.key)
  const isSelected = selectedKeys.includes(node.key)
  const isDisabled = disabled || node.disabled

  return (
    <View>
      <View
        className={`kit-tree__node ${isSelected ? 'kit-tree__node--selected' : ''} ${isDisabled ? 'kit-tree__node--disabled' : ''}`}
        style={{ paddingLeft: `${level * 16 + 8}px` }}
        onClick={() => !isDisabled && onSelectNode(node.key)}
      >
        {hasChildren ? (
          <Text
            className={`kit-tree__arrow ${isExpanded ? 'kit-tree__arrow--expanded' : ''}`}
            onClick={(e) => {
              e.stopPropagation()
              if (!isDisabled) onToggle(node.key)
            }}
          >
            ▶
          </Text>
        ) : (
          <View className="kit-tree__arrow-placeholder" />
        )}
        <Text className={`kit-tree__title ${isSelected ? 'kit-tree__title--selected' : ''}`}>
          {node.title}
        </Text>
      </View>
      {hasChildren && isExpanded ? (
        <View>
          {node.children!.map((child) => (
            <TreeItem
              key={child.key}
              node={child}
              level={level + 1}
              expandedKeys={expandedKeys}
              selectedKeys={selectedKeys}
              onToggle={onToggle}
              onSelectNode={onSelectNode}
              {...(disabled !== undefined ? { disabled } : {})}
            />
          ))}
        </View>
      ) : null}
    </View>
  )
}

export function Tree({
  data = [],
  defaultExpandAll = false,
  expandedKeys,
  onExpand,
  selectedKeys,
  onSelect,
  disabled = false,
  className = '',
}: TreeProps) {
  const isExpandedControlled = expandedKeys !== undefined
  const isSelectedControlled = selectedKeys !== undefined
  const [innerExpanded, setInnerExpanded] = useState<string[]>(
    defaultExpandAll ? getAllKeys(data) : [],
  )
  const [innerSelected, setInnerSelected] = useState<string[]>([])
  const currentExpanded = isExpandedControlled ? expandedKeys : innerExpanded
  const currentSelected = isSelectedControlled ? selectedKeys : innerSelected

  const handleToggle = (key: string) => {
    const next = currentExpanded.includes(key)
      ? currentExpanded.filter((k) => k !== key)
      : [...currentExpanded, key]
    if (!isExpandedControlled) setInnerExpanded(next)
    onExpand?.(next)
  }

  const handleSelect = (key: string) => {
    const next = currentSelected.includes(key) ? currentSelected.filter((k) => k !== key) : [key]
    if (!isSelectedControlled) setInnerSelected(next)
    onSelect?.(next)
  }

  return (
    <View className={`kit-tree ${className}`.trim()}>
      {data.map((node) => (
        <TreeItem
          key={node.key}
          node={node}
          level={0}
          expandedKeys={currentExpanded}
          selectedKeys={currentSelected}
          onToggle={handleToggle}
          onSelectNode={handleSelect}
          {...(disabled !== undefined ? { disabled } : {})}
        />
      ))}
    </View>
  )
}
