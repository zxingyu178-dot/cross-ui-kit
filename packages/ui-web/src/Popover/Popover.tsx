/**
 * Popover 弹出层（web）—— @radix-ui/react-popover 封装，
 * 点击触发弹出内容，Portal 渲染，四方向+三对齐，键盘无障碍。
 */
import * as PopoverPrimitive from '@radix-ui/react-popover'
import { cn } from '@kit/core'
import type { PopoverProps } from './Popover.types'

export function Popover({
  trigger,
  content,
  align = 'center',
  side = 'bottom',
  className,
}: PopoverProps) {
  return (
    <PopoverPrimitive.Root>
      <PopoverPrimitive.Trigger asChild className={cn('outline-none', className)}>
        {trigger as React.ReactElement}
      </PopoverPrimitive.Trigger>
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          align={align}
          side={side}
          sideOffset={4}
          className="z-50 min-w-[200px] rounded-md border border-border-default bg-bg-card p-4 shadow-lg outline-none"
        >
          {content}
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  )
}
