/**
 * Collapse 折叠面板（web）—— @radix-ui/react-collapsible 封装，
 * 受控优先，手风琴模式，禁用项，点击标题切换展开，箭头旋转动画。
 */
import * as Collapsible from '@radix-ui/react-collapsible'
import { useState } from 'react'
import { cn } from '@kit/core'
import type { CollapseProps } from './Collapse.types'

function toArr(v?: string | string[]): string[] {
  if (v === undefined) return []
  return Array.isArray(v) ? v : [v]
}

export function Collapse({
  items,
  activeKey,
  defaultActiveKey,
  onChange,
  accordion = false,
  className,
}: CollapseProps) {
  const isControlled = activeKey !== undefined
  const [inner, setInner] = useState<string[]>(toArr(defaultActiveKey))
  const current = isControlled ? toArr(activeKey) : inner

  const toggle = (key: string) => {
    let next: string[]
    if (accordion) {
      next = current.includes(key) ? [] : [key]
    } else {
      next = current.includes(key) ? current.filter((k) => k !== key) : [...current, key]
    }
    if (!isControlled) setInner(next)
    onChange?.(accordion ? (next[0] ?? '') : next)
  }

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      {items.map((item) => {
        const open = current.includes(item.key)
        return (
          <Collapsible.Root
            key={item.key}
            open={open}
            onOpenChange={() => toggle(item.key)}
            {...(item.disabled !== undefined ? { disabled: item.disabled } : {})}
            className="overflow-hidden rounded-md border border-border-default bg-bg-card"
          >
            <Collapsible.Trigger className="flex w-full items-center justify-between px-4 py-3 text-bodyMd font-medium text-text-primary transition-colors hover:bg-bg-muted/50 disabled:cursor-not-allowed disabled:opacity-50">
              <span>{item.title}</span>
              <span
                className={cn(
                  'text-xs text-text-tertiary transition-transform duration-fast',
                  open ? 'rotate-180' : '',
                )}
                aria-hidden
              >
                ▼
              </span>
            </Collapsible.Trigger>
            <Collapsible.Content className="overflow-hidden">
              <div className="px-4 pb-3 text-bodySm text-text-secondary">{item.content}</div>
            </Collapsible.Content>
          </Collapsible.Root>
        )
      })}
    </div>
  )
}
