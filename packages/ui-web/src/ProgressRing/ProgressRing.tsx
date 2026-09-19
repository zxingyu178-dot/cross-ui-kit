import { cn } from '@kit/core'
import type { ProgressRingProps } from './ProgressRing.types'

const toneColor: Record<NonNullable<ProgressRingProps['tone']>, string> = {
  primary: 'var(--kit-color-primary-default)',
  success: 'var(--kit-color-success-default)',
  warning: 'var(--kit-color-warning-default)',
  danger: 'var(--kit-color-danger-default)',
}

export function ProgressRing({
  value,
  size = 80,
  strokeWidth = 8,
  children,
  tone = 'primary',
  className,
}: ProgressRingProps) {
  const clamped = Math.max(0, Math.min(100, value))
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference * (1 - clamped / 100)

  return (
    <div
      className={cn('relative inline-flex items-center justify-center', className)}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--kit-color-bg-tertiary)"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={toneColor[tone]}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 0.3s ease' }}
        />
      </svg>
      {children !== undefined ? (
        <div className="absolute inset-0 flex items-center justify-center text-bodySm text-text-primary">
          {children}
        </div>
      ) : null}
    </div>
  )
}
