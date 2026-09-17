/**
 * Menu 导航菜单（web）—— 支持一级/二级菜单、选中高亮、水平/垂直布局。
 */
import { useState } from 'react'
import { cn } from '@kit/core'
import type { MenuItem, MenuProps } from './Menu.types'

function MenuItemComponent({
  item,
  selectedKey,
  onSelect,
  mode,
  openKeys,
  toggleOpen,
}: {
  item: MenuItem
  selectedKey?: string | undefined
  onSelect?: ((key: string) => void) | undefined
  mode: 'horizontal' | 'vertical'
  openKeys: string[]
  toggleOpen: (key: string) => void
}) {
  const hasChildren = item.children && item.children.length > 0
  const isOpen = openKeys.includes(item.key)
  const isSelected = selectedKey === item.key

  if (hasChildren) {
    return (
      <div className={cn(mode === 'horizontal' ? 'relative' : 'w-full')}>
        <button
          type="button"
          disabled={item.disabled}
          onClick={() => toggleOpen(item.key)}
          className={cn(
            'flex w-full items-center justify-between gap-2 px-4 py-2.5 text-bodySm transition-colors',
            mode === 'horizontal' ? 'hover:bg-bg-muted' : 'hover:bg-bg-muted',
            item.disabled ? 'cursor-not-allowed opacity-40' : 'cursor-pointer',
          )}
        >
          <span className="flex items-center gap-2">
            {item.icon}
            <span>{item.label}</span>
          </span>
          <span className={cn('text-caption transition-transform', isOpen ? 'rotate-180' : '')}>
            ▾
          </span>
        </button>
        {isOpen ? (
          <div
            className={cn(
              'z-10 min-w-[160px] rounded-md border border-border-default bg-bg-card py-1 shadow-lg',
              mode === 'horizontal' ? 'absolute left-0 top-full mt-1' : 'ml-4 border-l-0',
            )}
          >
            {item.children!.map((child) => (
              <button
                key={child.key}
                type="button"
                disabled={child.disabled}
                onClick={() => onSelect?.(child.key)}
                className={cn(
                  'flex w-full items-center gap-2 px-4 py-2 text-left text-bodySm transition-colors',
                  selectedKey === child.key
                    ? 'bg-primary-bg text-primary-default font-medium'
                    : 'text-text-primary hover:bg-bg-muted',
                  child.disabled ? 'cursor-not-allowed opacity-40' : 'cursor-pointer',
                )}
              >
                {child.icon}
                {child.label}
              </button>
            ))}
          </div>
        ) : null}
      </div>
    )
  }

  return (
    <button
      type="button"
      disabled={item.disabled}
      onClick={() => onSelect?.(item.key)}
      className={cn(
        'flex items-center gap-2 px-4 py-2.5 text-bodySm transition-colors',
        mode === 'horizontal' ? 'hover:bg-bg-muted' : 'w-full text-left hover:bg-bg-muted',
        isSelected ? 'bg-primary-bg text-primary-default font-medium' : 'text-text-primary',
        item.disabled ? 'cursor-not-allowed opacity-40' : 'cursor-pointer',
      )}
    >
      {item.icon}
      {item.label}
    </button>
  )
}

export function Menu({
  items = [],
  selectedKey,
  onSelect,
  mode = 'horizontal',
  defaultOpenKeys = [],
  className,
}: MenuProps) {
  const [openKeys, setOpenKeys] = useState<string[]>(defaultOpenKeys)

  const toggleOpen = (key: string) => {
    setOpenKeys((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]))
  }

  return (
    <div
      className={cn(
        'rounded-md border border-border-default bg-bg-card',
        mode === 'horizontal' ? 'flex flex-row items-center' : 'flex flex-col py-1',
        className,
      )}
    >
      {items.map((item) => (
        <MenuItemComponent
          key={item.key}
          item={item}
          selectedKey={selectedKey}
          onSelect={onSelect}
          mode={mode}
          openKeys={openKeys}
          toggleOpen={toggleOpen}
        />
      ))}
    </div>
  )
}
