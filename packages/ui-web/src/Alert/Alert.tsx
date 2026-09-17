/**
 * Alert 警告提示条（web）—— 页内非阻塞反馈，四语义色 + 可关闭 + 图标 + 操作区。
 * 视觉值只走 Tailwind 主题语义类（soft 底 + 语义描边 + 语义图标色）；
 * 关闭后内部管理 visible（非受控），受控场景由外部条件渲染即可。
 */
import { useState } from 'react'
import type { ReactNode } from 'react'
import { cn } from '@kit/core'
import type { AlertProps, AlertType } from './Alert.types'

/** 语义色容器样式（soft 底 + 语义描边） */
const TYPE_STYLE: Record<AlertType, string> = {
  info: 'bg-info-bg border-info-border',
  success: 'bg-success-bg border-success-border',
  warning: 'bg-warning-bg border-warning-border',
  error: 'bg-danger-bg border-danger-border',
}

/** 语义图标色 */
const TYPE_ICON: Record<AlertType, string> = {
  info: 'text-info-default',
  success: 'text-success-default',
  warning: 'text-warning-default',
  error: 'text-danger-default',
}

function InfoIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-4"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4M12 8h.01" />
    </svg>
  )
}
function SuccessIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-4"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="m9 11 3 3L22 4" />
    </svg>
  )
}
function WarningIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-4"
    >
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <path d="M12 9v4M12 17h.01" />
    </svg>
  )
}
function ErrorIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-4"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6M9 9l6 6" />
    </svg>
  )
}

const ICONS: Record<AlertType, ReactNode> = {
  info: <InfoIcon />,
  success: <SuccessIcon />,
  warning: <WarningIcon />,
  error: <ErrorIcon />,
}

export function Alert({
  type = 'info',
  title,
  description,
  closable = false,
  onClose,
  showIcon = true,
  action,
  className,
}: AlertProps) {
  const [visible, setVisible] = useState(true)
  if (!visible) return null

  const handleClose = () => {
    setVisible(false)
    onClose?.()
  }

  return (
    <div
      role="alert"
      className={cn(
        'flex w-full items-start gap-3 rounded-md border px-4 py-3',
        TYPE_STYLE[type],
        className,
      )}
    >
      {showIcon ? (
        <span className={cn('mt-0.5 shrink-0', TYPE_ICON[type])}>{ICONS[type]}</span>
      ) : null}
      <div className="min-w-0 flex-1">
        {title ? <div className="text-body-md font-medium text-text-primary">{title}</div> : null}
        {description ? (
          <div className={cn('text-body-sm text-text-secondary', title ? 'mt-1' : '')}>
            {description}
          </div>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
      {closable ? (
        <button
          type="button"
          onClick={handleClose}
          aria-label="关闭提示"
          className="shrink-0 rounded-sm text-text-tertiary outline-none transition-colors hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4"
          >
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      ) : null}
    </div>
  )
}
