/**
 * Drawer 抽屉（web）—— 基于 @radix-ui/react-dialog 封装，
 * 四方向（left/right/top/bottom），遮罩层，受控优先，键盘无障碍。
 */
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { cn } from '@kit/core'
import type { DrawerProps } from './Drawer.types'

export function Drawer({
  open,
  onOpenChange,
  title,
  children,
  placement = 'right',
  size = 360,
  className,
}: DrawerProps) {
  const isHorizontal = placement === 'left' || placement === 'right'

  return (
    <DialogPrimitive.Root
      {...(open !== undefined ? { open } : {})}
      {...(onOpenChange !== undefined ? { onOpenChange } : {})}
    >
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content
          className={cn(
            'fixed z-50 flex flex-col bg-bg-card shadow-xl outline-none',
            placement === 'right' ? 'right-0 top-0 h-full' : '',
            placement === 'left' ? 'left-0 top-0 h-full' : '',
            placement === 'top' ? 'top-0 left-0 w-full' : '',
            placement === 'bottom' ? 'bottom-0 left-0 w-full' : '',
            className,
          )}
          style={isHorizontal ? { width: size } : { height: size }}
        >
          {title ? (
            <div className="flex items-center justify-between border-b border-border-default px-4 py-3">
              <DialogPrimitive.Title className="text-bodyMd font-medium text-text-primary">
                {title}
              </DialogPrimitive.Title>
              <DialogPrimitive.Close className="text-text-tertiary transition-colors hover:text-text-primary focus:outline-none">
                ✕
              </DialogPrimitive.Close>
            </div>
          ) : (
            <DialogPrimitive.Close className="absolute right-4 top-3 text-text-tertiary transition-colors hover:text-text-primary focus:outline-none">
              ✕
            </DialogPrimitive.Close>
          )}
          <div className="flex-1 overflow-auto p-4">{children}</div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}
