/**
 * TreeSelect 树形选择器（native：iOS / Android）—— Tamagui XStack+YStack+Text 自建，
 * 输入框 + 弹出 Tree 面板，支持展开/折叠、选中。
 */
import { useMemo, useState } from 'react'
import { Text, XStack, YStack } from 'tamagui'
import type { TreeSelectNode, TreeSelectProps } from './TreeSelect.types'

function findNode(nodes: TreeSelectNode[], key: string): TreeSelectNode | null {
  for (const node of nodes) {
    if (node.key === key) return node
    if (node.children) {
      const found = findNode(node.children, key)
      if (found) return found
    }
  }
  return null
}

function TreePanel({
  nodes,
  level,
  expandedKeys,
  selectedKey,
  onToggle,
  onSelect,
}: {
  nodes: TreeSelectNode[]
  level: number
  expandedKeys: string[]
  selectedKey: string
  onToggle: (key: string) => void
  onSelect: (node: TreeSelectNode) => void
}) {
  return (
    <YStack>
      {nodes.map((node) => {
        const hasChildren = node.children && node.children.length > 0
        const isExpanded = expandedKeys.includes(node.key)
        const isSelected = selectedKey === node.key
        return (
          <YStack key={node.key}>
            <XStack
              alignItems="center"
              gap={4}
              paddingVertical={6}
              paddingHorizontal={8}
              paddingLeft={level * 16 + 8}
              borderRadius={4}
              backgroundColor={isSelected ? 'rgba(37,99,235,0.1)' : 'transparent'}
              opacity={node.disabled ? 0.5 : 1}
              onPress={() => !node.disabled && onSelect(node)}
            >
              {hasChildren ? (
                <XStack
                  width={16}
                  height={16}
                  alignItems="center"
                  justifyContent="center"
                  style={{ transform: [{ rotate: isExpanded ? '90deg' : '0deg' }] }}
                  onPress={() => !node.disabled && onToggle(node.key)}
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
              <TreePanel
                nodes={node.children!}
                level={level + 1}
                expandedKeys={expandedKeys}
                selectedKey={selectedKey}
                onToggle={onToggle}
                onSelect={onSelect}
              />
            ) : null}
          </YStack>
        )
      })}
    </YStack>
  )
}

export function TreeSelect({
  data = [],
  value,
  onChange,
  placeholder = '请选择',
  disabled = false,
  allowClear = true,
  style,
}: TreeSelectProps) {
  const [open, setOpen] = useState(false)
  const [expandedKeys, setExpandedKeys] = useState<string[]>([])

  const selectedNode = useMemo(() => (value ? findNode(data, value) : null), [data, value])

  const handleToggle = (key: string) => {
    setExpandedKeys((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]))
  }

  const handleSelect = (node: TreeSelectNode) => {
    onChange?.(node.key, node)
    setOpen(false)
  }

  return (
    <YStack width="100%" style={style}>
      <XStack
        alignItems="center"
        justifyContent="space-between"
        height={36}
        paddingHorizontal={12}
        borderWidth={1}
        borderColor={open ? '$primaryDefault' : '$borderDefault'}
        borderRadius="$md"
        backgroundColor={disabled ? '$bgMuted' : '$bgCard'}
        opacity={disabled ? 0.5 : 1}
        onPress={() => !disabled && setOpen((prev) => !prev)}
      >
        <Text fontSize="$bodySm" color={selectedNode ? '$textPrimary' : '$textTertiary'}>
          {selectedNode ? selectedNode.title : placeholder}
        </Text>
        <XStack alignItems="center" gap={4}>
          {allowClear && selectedNode && !disabled ? (
            <Text fontSize={14} color="$textTertiary" onPress={() => onChange?.('', null)}>
              ×
            </Text>
          ) : null}
          <Text
            fontSize={12}
            color="$textTertiary"
            style={{ transform: [{ rotate: open ? '180deg' : '0deg' }] }}
          >
            ▾
          </Text>
        </XStack>
      </XStack>

      {open ? (
        <YStack
          position="absolute"
          top="100%"
          left={0}
          right={0}
          marginTop={4}
          maxHeight={256}
          borderWidth={1}
          borderColor="$borderDefault"
          borderRadius="$md"
          backgroundColor="$bgCard"
          padding={4}
          zIndex={50}
          shadowColor="#000"
          shadowOffset={{ width: 0, height: 4 }}
          shadowOpacity={0.1}
          shadowRadius={12}
          elevation={8}
        >
          {data.length === 0 ? (
            <XStack alignItems="center" justifyContent="center" height={64}>
              <Text fontSize="$caption" color="$textTertiary">
                暂无数据
              </Text>
            </XStack>
          ) : (
            <TreePanel
              nodes={data}
              level={0}
              expandedKeys={expandedKeys}
              selectedKey={value ?? ''}
              onToggle={handleToggle}
              onSelect={handleSelect}
            />
          )}
        </YStack>
      ) : null}
    </YStack>
  )
}
