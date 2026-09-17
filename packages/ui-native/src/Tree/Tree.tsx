/**
 * Tree 树形控件（native：iOS / Android）—— Tamagui XStack+YStack+Text 自建，
 * 树形结构，支持展开/折叠、选中、禁用。
 */
import { useState } from 'react'
import { Text, XStack, YStack } from 'tamagui'
import type { TreeNode, TreeProps } from './Tree.types'

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
    <YStack>
      <XStack
        alignItems="center"
        gap={4}
        paddingVertical={6}
        paddingHorizontal={8}
        paddingLeft={level * 16 + 8}
        borderRadius={4}
        backgroundColor={isSelected ? 'rgba(37,99,235,0.1)' : 'transparent'}
        opacity={isDisabled ? 0.5 : 1}
        onPress={() => !isDisabled && onSelectNode(node.key)}
      >
        {hasChildren ? (
          <XStack
            width={16}
            height={16}
            alignItems="center"
            justifyContent="center"
            style={{ transform: [{ rotate: isExpanded ? '90deg' : '0deg' }] }}
            onPress={() => !isDisabled && onToggle(node.key)}
          >
            <Text fontSize={10} color="$textTertiary">
              ▶
            </Text>
          </XStack>
        ) : (
          <YStack width={16} height={16} />
        )}
        <Text
          fontSize="$bodySm"
          fontWeight={isSelected ? '500' : '400'}
          color={isSelected ? '$primaryDefault' : '$textPrimary'}
        >
          {node.title}
        </Text>
      </XStack>
      {hasChildren && isExpanded ? (
        <YStack>
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
        </YStack>
      ) : null}
    </YStack>
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
  style,
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
    <YStack
      padding={8}
      borderWidth={1}
      borderColor="$borderDefault"
      borderRadius="$md"
      backgroundColor="$bgCard"
      style={style}
    >
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
    </YStack>
  )
}
