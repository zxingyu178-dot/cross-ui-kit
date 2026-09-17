/**
 * TreeSelect 树形选择器（mini：小程序 / 移动 H5）—— View+Text 自建，
 * 输入框 + 弹出 Tree 面板，支持展开/折叠、选中。
 */
import { Text, View } from '@tarojs/components'
import { useMemo, useState } from 'react'
import type { TreeSelectNode, TreeSelectProps } from './TreeSelect.types'
import './TreeSelect.scss'

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
    <View>
      {nodes.map((node) => {
        const hasChildren = node.children && node.children.length > 0
        const isExpanded = expandedKeys.includes(node.key)
        const isSelected = selectedKey === node.key
        return (
          <View key={node.key}>
            <View
              className={`kit-tree-select__node ${isSelected ? 'kit-tree-select__node--selected' : ''} ${node.disabled ? 'kit-tree-select__node--disabled' : ''}`}
              style={{ paddingLeft: `${level * 16 + 8}px` }}
              onClick={() => !node.disabled && onSelect(node)}
            >
              {hasChildren ? (
                <Text
                  className={`kit-tree-select__arrow ${isExpanded ? 'kit-tree-select__arrow--expanded' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation()
                    if (!node.disabled) onToggle(node.key)
                  }}
                >
                  ▶
                </Text>
              ) : (
                <View className="kit-tree-select__arrow-placeholder" />
              )}
              <Text
                className={`kit-tree-select__node-title ${isSelected ? 'kit-tree-select__node-title--selected' : ''}`}
              >
                {node.title}
              </Text>
            </View>
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
          </View>
        )
      })}
    </View>
  )
}

export function TreeSelect({
  data = [],
  value,
  onChange,
  placeholder = '请选择',
  disabled = false,
  allowClear = true,
  className = '',
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
    <View className={`kit-tree-select ${className}`.trim()}>
      <View
        className={`kit-tree-select__trigger ${open ? 'kit-tree-select__trigger--open' : ''} ${disabled ? 'kit-tree-select__trigger--disabled' : ''}`}
        onClick={() => !disabled && setOpen((prev) => !prev)}
      >
        <Text className={selectedNode ? 'kit-tree-select__value' : 'kit-tree-select__placeholder'}>
          {selectedNode ? selectedNode.title : placeholder}
        </Text>
        <View className="kit-tree-select__suffix">
          {allowClear && selectedNode && !disabled ? (
            <Text
              className="kit-tree-select__clear"
              onClick={(e) => {
                e.stopPropagation()
                onChange?.('', null)
              }}
            >
              ×
            </Text>
          ) : null}
          <Text className={`kit-tree-select__caret ${open ? 'kit-tree-select__caret--open' : ''}`}>
            ▾
          </Text>
        </View>
      </View>

      {open ? (
        <View className="kit-tree-select__dropdown">
          {data.length === 0 ? (
            <View className="kit-tree-select__empty">
              <Text>暂无数据</Text>
            </View>
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
        </View>
      ) : null}
    </View>
  )
}
