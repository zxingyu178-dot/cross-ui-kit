/**
 * Toast（web）—— @radix-ui/react-toast 受控封装，自包含 Provider/Viewport/Root。
 * 轻量、短暂、不阻断交互的全局反馈；视觉值只走 Tailwind 主题语义类。
 */
import * as ToastPrimitive from '@radix-ui/react-toast'
import { forwardRef } from 'react'
import { cn } from '@kit/core'
import type { ToastPosition, ToastProps, ToastType } from './Toast.types'

/** 各语义类型的图标颜色（语义色 token） */
const ICON_COLOR: Record<ToastType, string> = {
  info: 'text-primary-default',
  success: 'text-success-default',
  warning: 'text-warning-default',
  error: 'text-danger-default',
  loading: 'text-primary-default',
}

const STROKE = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

function ToastIcon({ type }: { type: ToastType }) {
  const cls = cn('size-4 shrink-0', ICON_COLOR[type])
  if (type === 'loading') {
    return (
      <svg className={cn(cls, 'animate-spin')} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-90"
          fill="currentColor"
          d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4z"
        />
      </svg>
    )
  }
  if (type === 'success') {
    return (
      <svg className={cls} viewBox="0 0 24 24" aria-hidden="true" {...STROKE}>
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    )
  }
  if (type === 'error') {
    return (
      <svg className={cls} viewBox="0 0 24 24" aria-hidden="true" {...STROKE}>
        <circle cx="12" cy="12" r="10" />
        <path d="m15 9-6 6M9 9l6 6" />
      </svg>
    )
  }
  if (type === 'warning') {
    return (
      <svg className={cls} viewBox="0 0 24 24" aria-hidden="true" {...STROKE}>
        <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
        <path d="M12 9v4M12 17h.01" />
      </svg>
    )
  }
  return (
    <svg className={cls} viewBox="0 0 24 24" aria-hidden="true" {...STROKE}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4M12 8h.01" />
    </svg>
  )
}

const VIEWPORT: Record<ToastPosition, string> = {
  top: 'fixed left-1/2 top-4 z-50 flex max-w-[90vw] -translate-x-1/2 flex-col items-center gap-2',
  center: 'pointer-events-none fixed inset-0 z-50 flex items-center justify-center',
  bottom:
    'fixed left-1/2 bottom-4 z-50 flex max-w-[90vw] -translate-x-1/2 flex-col items-center gap-2',
}

const SWIPE: Record<ToastPosition, 'up' | 'down' | 'right'> = {
  top: 'up',
  bottom: 'down',
  center: 'right',
}

export const Toast = forwardRef<HTMLLIElement, ToastProps>(function Toast(
  {
    open,
    onOpenChange,
    message,
    type = 'info',
    duration = 2400,
    position = 'center',
    onClose,
    className,
  },
  ref,
) {
  return (
    <ToastPrimitive.Provider swipeDirection={SWIPE[position]} duration={duration}>
      <ToastPrimitive.Root
        ref={ref}
        open={open}
        duration={duration <= 0 ? Infinity : duration}
        onOpenChange={(o) => {
          onOpenChange?.(o)
          if (!o) onClose?.()
        }}
        className={cn(
          'pointer-events-auto flex max-w-[90vw] items-center gap-2.5 rounded-md border border-border-default bg-bg-card px-4 py-3 shadow-popover',
          className,
        )}
      >
        <ToastIcon type={type} />
        <ToastPrimitive.Title className="text-body-md text-text-primary">
          {message}
        </ToastPrimitive.Title>
      </ToastPrimitive.Root>
      <ToastPrimitive.Viewport className={VIEWPORT[position]} />
    </ToastPrimitive.Provider>
  )
})
