/**
 * Tooltip 文字提示气泡（web）—— @radix-ui/react-tooltip 封装。
 * hover 触发，深色气泡（bg-inverse / text-inverse），四向 placement + 箭头；
 * 视觉值只走 Tailwind 主题语义类，禁用时仅渲染 children。
 */
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { cn } from '@kit/core'
import type { TooltipProps } from './Tooltip.types'

export function Tooltip({
  children,
  content,
  placement = 'top',
  sideOffset = 4,
  delayDuration = 200,
  open,
  onOpenChange,
  defaultOpen,
  disabled = false,
  className,
}: TooltipProps) {
  if (disabled) return <>{children}</>

  return (
    <TooltipPrimitive.Provider delayDuration={delayDuration}>
      <TooltipPrimitive.Root
        {...(open !== undefined ? { open } : {})}
        {...(defaultOpen !== undefined ? { defaultOpen } : {})}
        {...(onOpenChange !== undefined ? { onOpenChange } : {})}
        delayDuration={delayDuration}
      >
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            side={placement}
            sideOffset={sideOffset}
            className={cn(
              'z-50 max-w-xs rounded-md bg-bg-inverse px-3 py-1.5 text-body-sm text-text-inverse shadow-md',
              'data-[state=delayed-open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=delayed-open]:fade-in-0',
              className,
            )}
          >
            {content}
            <TooltipPrimitive.Arrow className="fill-bg-inverse" width={8} height={6} />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}
