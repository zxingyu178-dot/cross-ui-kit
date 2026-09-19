/**
 * StatusDot 状态点（web）—— 语义色圆点，可选文字与描边。
 */
import { cn } from '@kit/core'
import type { StatusDotProps } from './StatusDot.types'

const toneClass: Record<string, string> = {
  success: 'bg-success-default',
  warning: 'bg-warning-default',
  danger: 'bg-danger-default',
  info: 'bg-info-default',
  neutral: 'bg-neutral-default',
  primary: 'bg-primary-default',
}

export function StatusDot({
  tone = 'neutral',
  size = 8,
  outlined = false,
  text,
  className,
}: StatusDotProps) {
  return (
    <span className={cn('inline-flex items-center gap-1.5', className)}>
      <span
        className={cn(
          'inline-block rounded-full',
          toneClass[tone],
          outlined && 'ring-2 ring-bg-card',
        )}
        style={{ width: size, height: size }}
      />
      {text ? <span className="text-bodySm text-text-secondary">{text}</span> : null}
    </span>
  )
}
