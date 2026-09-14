/**
 * Dialog（web）—— @radix-ui/react-dialog 受控封装。
 * 纯受控弹层（不内置 Trigger，外部用 open/onOpenChange 控制）；
 * 视觉值只走 Tailwind 主题语义类；遮罩为通用中性黑半透明（scrim，非品牌 token）。
 */
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { forwardRef } from 'react'
import { cn } from '@kit/core'
import { Button } from '../Button'
import type { DialogProps } from './Dialog.types'

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('size-4', className)}
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  )
}

export const Dialog = forwardRef<HTMLDivElement, DialogProps>(function Dialog(
  {
    open,
    onOpenChange,
    title,
    description,
    children,
    footer,
    showCancel = true,
    confirmText = '确定',
    cancelText = '取消',
    confirmLoading = false,
    closeOnOverlayClick = true,
    closeOnEsc = true,
    onConfirm,
    onCancel,
    className,
  },
  ref,
) {
  const requestClose = () => onOpenChange?.(false)
  const handleConfirm = () => {
    // onConfirm 返回 false 表示“暂不关闭”（异步提交场景：外部完成后再 setOpen(false)）
    if (onConfirm?.() === false) return
    requestClose()
  }
  const handleCancel = () => {
    onCancel?.()
    requestClose()
  }

  const body =
    children ??
    (description ? (
      <DialogPrimitive.Description className="text-body-md text-text-tertiary">
        {description}
      </DialogPrimitive.Description>
    ) : null)

  return (
    <DialogPrimitive.Root
      open={open}
      onOpenChange={(o) => {
        if (!o) requestClose()
      }}
    >
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out" />
        <DialogPrimitive.Content
          ref={ref}
          {...(!title ? { 'aria-label': '对话框' } : {})}
          onEscapeKeyDown={(e) => {
            if (!closeOnEsc) e.preventDefault()
          }}
          onPointerDownOutside={(e) => {
            if (!closeOnOverlayClick) e.preventDefault()
          }}
          className={cn(
            'fixed left-1/2 top-1/2 z-50 flex w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 flex-col rounded-lg border border-border-default bg-bg-card p-6 shadow-popover',
            className,
          )}
        >
          {title ? (
            <DialogPrimitive.Title className="mb-3 text-title-sm font-medium text-text-primary">
              {title}
            </DialogPrimitive.Title>
          ) : null}

          {body ? <div className="text-body-md text-text-primary">{body}</div> : null}

          {footer === undefined ? (
            <div className="mt-6 flex justify-end gap-3">
              {showCancel ? (
                <Button variant="secondary" onClick={handleCancel}>
                  {cancelText}
                </Button>
              ) : null}
              <Button variant="primary" loading={confirmLoading} onClick={handleConfirm}>
                {confirmText}
              </Button>
            </div>
          ) : (
            footer
          )}

          <DialogPrimitive.Close
            aria-label="关闭"
            onClick={handleCancel}
            className="absolute right-4 top-4 inline-flex size-6 items-center justify-center rounded-sm text-text-tertiary outline-none transition-colors hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus"
          >
            <XIcon />
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
})
