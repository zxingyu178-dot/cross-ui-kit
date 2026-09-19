/**
 * NoticeBar 通知栏（web）。
 */
import { cn } from '@kit/core'
import type { NoticeBarProps } from './NoticeBar.types'

const toneBg: Record<NonNullable<NoticeBarProps['tone']>, string> = {
  info: 'bg-info-bg',
  success: 'bg-success-bg',
  warning: 'bg-warning-bg',
  danger: 'bg-danger-bg',
}
const toneText: Record<NonNullable<NoticeBarProps['tone']>, string> = {
  info: 'text-info-default',
  success: 'text-success-default',
  warning: 'text-warning-default',
  danger: 'text-danger-default',
}

export function NoticeBar({
  content,
  icon,
  action,
  onClose,
  tone = 'info',
  scrollable = false,
  className,
}: NoticeBarProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-2 px-3 py-2 text-bodySm',
        toneBg[tone],
        toneText[tone],
        className,
      )}
    >
      {icon ? <span className="shrink-0">{icon}</span> : null}
      <div className={cn('min-w-0 flex-1 truncate', scrollable && 'animate-marquee')}>
        {content}
      </div>
      {action ? <span className="shrink-0">{action}</span> : null}
      {onClose ? (
        <button
          type="button"
          onClick={onClose}
          className="shrink-0 text-current opacity-70 hover:opacity-100"
          aria-label="关闭"
        >
          ✕
        </button>
      ) : null}
    </div>
  )
}
