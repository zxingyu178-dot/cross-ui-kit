/**
 * Notification 通知（web）—— 固定位置通知卡片，支持自动关闭、类型、关闭按钮。
 */
import { useEffect } from 'react'
import { cn } from '@kit/core'
import type { NotificationProps, NotificationType } from './Notification.types'

const typeStyles: Record<NotificationType, { border: string; icon: string; iconColor: string }> = {
  success: { border: 'border-success-default', icon: '✓', iconColor: 'text-success-default' },
  info: { border: 'border-info-default', icon: 'ℹ', iconColor: 'text-info-default' },
  warning: { border: 'border-warning-default', icon: '⚠', iconColor: 'text-warning-default' },
  error: { border: 'border-danger-default', icon: '✕', iconColor: 'text-danger-default' },
}

export function Notification({
  title,
  description,
  type = 'info',
  duration = 4500,
  onClose,
  closable = true,
  icon,
  className,
}: NotificationProps) {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => onClose?.(), duration)
      return () => clearTimeout(timer)
    }
    return undefined
  }, [duration, onClose])

  const style = typeStyles[type]

  return (
    <div
      className={cn(
        'flex w-80 items-start gap-3 rounded-lg border-l-4 bg-bg-card p-4 shadow-lg',
        style.border,
        className,
      )}
      role="alert"
    >
      <span
        className={cn(
          'mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-base',
          style.iconColor,
        )}
      >
        {icon ?? style.icon}
      </span>
      <div className="min-w-0 flex-1">
        {title ? <div className="text-bodySm font-medium text-text-primary">{title}</div> : null}
        {description ? (
          <div className="mt-1 text-caption text-text-secondary">{description}</div>
        ) : null}
      </div>
      {closable ? (
        <button
          type="button"
          className="flex h-5 w-5 shrink-0 items-center justify-center rounded text-text-tertiary hover:bg-bg-muted hover:text-text-secondary"
          onClick={onClose}
          aria-label="关闭"
        >
          ×
        </button>
      ) : null}
    </div>
  )
}
