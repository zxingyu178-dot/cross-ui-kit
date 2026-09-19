/**
 * TabBar 底部标签栏（web）。
 */
import { useState } from 'react'
import { cn } from '@kit/core'
import type { TabBarProps, TabBarItem } from './TabBar.types'

function TabButton({
  item,
  active,
  onSelect,
}: {
  item: TabBarItem
  active: boolean
  onSelect: () => void
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        'relative flex flex-1 flex-col items-center justify-center gap-1 py-2 text-bodySm transition-colors',
        active ? 'text-primary-default' : 'text-text-secondary hover:text-text-primary',
      )}
    >
      {item.icon ? <span className="text-lg leading-none">{item.icon}</span> : null}
      <span>{item.label}</span>
      {item.badge ? (
        <span className="absolute right-1/4 top-1 rounded-full bg-danger-default px-1.5 text-caption text-white">
          {item.badge}
        </span>
      ) : null}
    </button>
  )
}

export function TabBar({ items, activeKey, defaultActiveKey, onChange, className }: TabBarProps) {
  const [inner, setInner] = useState(defaultActiveKey ?? items[0]?.key)
  const current = activeKey ?? inner

  const select = (key: string) => {
    if (activeKey === undefined) setInner(key)
    onChange?.(key)
  }

  return (
    <nav className={cn('flex items-stretch border-t border-border-default bg-bg-card', className)}>
      {items.map((item) => (
        <TabButton
          key={item.key}
          item={item}
          active={item.key === current}
          onSelect={() => select(item.key)}
        />
      ))}
    </nav>
  )
}
