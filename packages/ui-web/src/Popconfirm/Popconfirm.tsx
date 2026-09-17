/**
 * Popconfirm 气泡确认（web）—— 基于 @radix-ui/react-popover 封装，
 * 点击触发弹出确认气泡，包含确认/取消按钮。
 */
import * as PopoverPrimitive from '@radix-ui/react-popover'
import { useState } from 'react'
import { cn } from '@kit/core'
import type { PopconfirmProps } from './Popconfirm.types'

export function Popconfirm({
  title,
  description,
  onConfirm,
  onCancel,
  okText = '确定',
  cancelText = '取消',
  trigger,
  placement = 'bottom',
  className,
}: PopconfirmProps) {
  const [open, setOpen] = useState(false)

  const handleConfirm = () => {
    onConfirm?.()
    setOpen(false)
  }

  const handleCancel = () => {
    onCancel?.()
    setOpen(false)
  }

  return (
    <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
      <PopoverPrimitive.Trigger asChild className={cn('outline-none', className)}>
        {trigger as React.ReactElement}
      </PopoverPrimitive.Trigger>
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          side={placement}
          sideOffset={4}
          className="z-50 w-64 rounded-md border border-border-default bg-bg-card p-4 shadow-lg outline-none"
        >
          <div className="text-bodyMd font-medium text-text-primary">{title}</div>
          {description ? (
            <div className="mt-1 text-bodySm text-text-secondary">{description}</div>
          ) : null}
          <div className="mt-4 flex justify-end gap-2">
            <button
              type="button"
              className="rounded-md border border-border-default bg-bg-card px-3 py-1.5 text-bodySm text-text-secondary transition-colors hover:bg-bg-muted"
              onClick={handleCancel}
            >
              {cancelText}
            </button>
            <button
              type="button"
              className="rounded-md bg-primary-default px-3 py-1.5 text-bodySm text-white transition-colors hover:bg-primary-default/90"
              onClick={handleConfirm}
            >
              {okText}
            </button>
          </div>
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  )
}
