/**
 * Tree 树形控件（web）—— div 树形结构，支持展开/折叠、选中、禁用。
 */
import { useState } from 'react'
import { cn } from '@kit/core'
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
    <div>
      <div
        className={cn(
          'flex cursor-pointer items-center gap-1 rounded px-2 py-1.5 transition-colors',
          isSelected ? 'bg-primary-default/10' : 'hover:bg-bg-muted/50',
          isDisabled ? 'cursor-not-allowed opacity-50' : '',
        )}
        style={{ paddingLeft: `${level * 16 + 8}px` }}
        onClick={() => !isDisabled && onSelectNode(node.key)}
      >
        {hasChildren ? (
          <button
            type="button"
            className="flex h-4 w-4 shrink-0 items-center justify-center text-text-tertiary transition-transform"
            style={{ transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)' }}
            onClick={(e) => {
              e.stopPropagation()
              if (!isDisabled) onToggle(node.key)
            }}
          >
            ▶
          </button>
        ) : (
          <span className="h-4 w-4 shrink-0" />
        )}
        {node.icon ? <span className="shrink-0">{node.icon}</span> : null}
        <span
          className={cn(
            'truncate text-bodySm',
            isSelected ? 'font-medium text-primary-default' : 'text-text-primary',
          )}
        >
          {node.title}
        </span>
      </div>
      {hasChildren && isExpanded ? (
        <div>
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
        </div>
      ) : null}
    </div>
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
  className,
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
    <div className={cn('rounded-md border border-border-default bg-bg-card p-2', className)}>
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
    </div>
  )
}
