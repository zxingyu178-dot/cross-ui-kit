/**
 * DropdownMenu 下拉菜单（web）—— @radix-ui/react-dropdown-menu 封装，
 * 点击触发弹出菜单，菜单项点击回调，禁用/危险态，Portal 渲染，键盘无障碍。
 */
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { cn } from '@kit/core'
import type { DropdownMenuProps } from './DropdownMenu.types'

export function DropdownMenu({ trigger, items, align = 'start', className }: DropdownMenuProps) {
  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger className={cn('inline-flex outline-none', className)} asChild>
        {trigger as React.ReactElement}
      </DropdownMenuPrimitive.Trigger>
      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          align={align}
          sideOffset={4}
          className="z-50 min-w-[160px] overflow-hidden rounded-md border border-border-default bg-bg-card p-1 shadow-lg"
        >
          {items.map((item) => (
            <DropdownMenuPrimitive.Item
              key={item.key}
              {...(item.disabled !== undefined ? { disabled: item.disabled } : {})}
              onSelect={() => item.onClick?.()}
              className={cn(
                'flex cursor-pointer items-center gap-2 rounded-sm px-3 py-2 text-bodySm outline-none transition-colors',
                'focus:bg-bg-muted focus:text-text-primary',
                item.disabled ? 'cursor-not-allowed opacity-40' : '',
                item.danger ? 'text-danger-default focus:text-danger-default' : 'text-text-primary',
              )}
            >
              {item.icon ? (
                <span className="flex h-4 w-4 shrink-0 items-center justify-center">
                  {item.icon}
                </span>
              ) : null}
              <span className="flex-1">{item.label}</span>
            </DropdownMenuPrimitive.Item>
          ))}
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  )
}
