/**
 * TreeSelect 树形选择器（web）—— 输入框 + 弹出 Tree 面板，支持展开/折叠、选中。
 */
import { useMemo, useRef, useState } from 'react'
import { cn } from '@kit/core'
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
    <div>
      {nodes.map((node) => {
        const hasChildren = node.children && node.children.length > 0
        const isExpanded = expandedKeys.includes(node.key)
        const isSelected = selectedKey === node.key
        return (
          <div key={node.key}>
            <div
              className={cn(
                'flex cursor-pointer items-center gap-1 rounded px-2 py-1.5 transition-colors',
                isSelected ? 'bg-primary-default/10' : 'hover:bg-bg-muted/50',
                node.disabled ? 'cursor-not-allowed opacity-50' : '',
              )}
              style={{ paddingLeft: `${level * 16 + 8}px` }}
              onClick={() => !node.disabled && onSelect(node)}
            >
              {hasChildren ? (
                <button
                  type="button"
                  className="flex h-4 w-4 shrink-0 items-center justify-center text-text-tertiary transition-transform"
                  style={{ transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)' }}
                  onClick={(e) => {
                    e.stopPropagation()
                    if (!node.disabled) onToggle(node.key)
                  }}
                >
                  ▶
                </button>
              ) : (
                <span className="h-4 w-4 shrink-0" />
              )}
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
              <TreePanel
                nodes={node.children!}
                level={level + 1}
                expandedKeys={expandedKeys}
                selectedKey={selectedKey}
                onToggle={onToggle}
                onSelect={onSelect}
              />
            ) : null}
          </div>
        )
      })}
    </div>
  )
}

export function TreeSelect({
  data = [],
  value,
  onChange,
  placeholder = '请选择',
  disabled = false,
  allowClear = true,
  className,
}: TreeSelectProps) {
  const [open, setOpen] = useState(false)
  const [expandedKeys, setExpandedKeys] = useState<string[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  const selectedNode = useMemo(() => (value ? findNode(data, value) : null), [data, value])

  const handleToggle = (key: string) => {
    setExpandedKeys((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]))
  }

  const handleSelect = (node: TreeSelectNode) => {
    onChange?.(node.key, node)
    setOpen(false)
  }

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation()
    onChange?.('', null)
  }

  return (
    <div ref={containerRef} className={cn('relative w-full', className)}>
      <div
        className={cn(
          'flex h-9 w-full cursor-pointer items-center justify-between rounded-md border bg-bg-card px-3 transition-colors',
          open
            ? 'border-primary-default ring-1 ring-primary-default/20'
            : 'border-border-default hover:border-primary-default/50',
          disabled ? 'cursor-not-allowed bg-bg-muted opacity-50' : '',
        )}
        onClick={() => !disabled && setOpen((prev) => !prev)}
      >
        <span
          className={cn(
            'truncate text-bodySm',
            selectedNode ? 'text-text-primary' : 'text-text-tertiary',
          )}
        >
          {selectedNode ? selectedNode.title : placeholder}
        </span>
        <div className="flex items-center gap-1">
          {allowClear && selectedNode && !disabled ? (
            <button
              type="button"
              className="flex h-4 w-4 items-center justify-center rounded-full text-text-tertiary hover:bg-bg-muted hover:text-text-secondary"
              onClick={handleClear}
            >
              ×
            </button>
          ) : null}
          <span className={cn('text-text-tertiary transition-transform', open ? 'rotate-180' : '')}>
            ▾
          </span>
        </div>
      </div>

      {open ? (
        <div className="absolute left-0 right-0 top-full z-50 mt-1 max-h-64 overflow-y-auto rounded-md border border-border-default bg-bg-card p-1 shadow-lg">
          {data.length === 0 ? (
            <div className="flex h-16 items-center justify-center text-caption text-text-tertiary">
              暂无数据
            </div>
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
        </div>
      ) : null}
    </div>
  )
}
