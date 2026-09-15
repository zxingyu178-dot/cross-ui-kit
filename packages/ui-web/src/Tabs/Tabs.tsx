/**
 * Tabs 选项卡（web）—— Radix react-tabs 封装，line（下划线）形态。
 * 颜色/字号/圆角/动效时长全部走 @theme inline 语义类（token）；
 * 非激活面板由 Radix 默认卸载；items[].content 缺省时只渲染标签头（纯导航）。
 */
import * as TabsPrimitive from '@radix-ui/react-tabs'
import { forwardRef } from 'react'
import { cn } from '@kit/core'
import type { TabsProps, TabsSize } from './Tabs.types'

const SIZE: Record<TabsSize, { trigger: string; content: string }> = {
  md: { trigger: 'px-4 py-2 text-body-sm', content: 'pt-4' },
  sm: { trigger: 'px-3 py-1.5 text-caption', content: 'pt-3' },
}

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(function Tabs(
  { items, value, defaultValue, onValueChange, size = 'md', className, id },
  ref,
) {
  const s = SIZE[size]
  return (
    <TabsPrimitive.Root
      ref={ref}
      id={id}
      className={cn('flex flex-col', className)}
      {...(value !== undefined ? { value } : {})}
      {...(defaultValue !== undefined ? { defaultValue } : {})}
      onValueChange={(v) => onValueChange?.(v)}
    >
      <TabsPrimitive.List role="tablist" className="flex flex-row border-b border-border-default">
        {items.map((it) => (
          <TabsPrimitive.Trigger
            key={it.value}
            value={it.value}
            disabled={it.disabled === true}
            className={cn(
              '-mb-px inline-flex items-center justify-center whitespace-nowrap border-b-2 border-transparent font-medium',
              'text-text-tertiary transition-colors duration-fast',
              'hover:text-text-primary',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus',
              'data-[state=active]:border-primary-default data-[state=active]:text-primary-default',
              'disabled:cursor-not-allowed disabled:text-text-disabled disabled:hover:text-text-disabled',
              s.trigger,
            )}
          >
            {it.label}
          </TabsPrimitive.Trigger>
        ))}
      </TabsPrimitive.List>

      {items.map((it) =>
        it.content !== undefined ? (
          <TabsPrimitive.Content
            key={it.value}
            value={it.value}
            className={cn('text-body-md text-text-primary', s.content)}
          >
            {it.content}
          </TabsPrimitive.Content>
        ) : null,
      )}
    </TabsPrimitive.Root>
  )
})
