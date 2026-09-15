/**
 * Progress 进度条（web）—— Radix react-progress 封装，线性形态。
 * 受控 value/max；轨道与填充只引用 token 语义类，宽度按百分比内联（结构值），
 * 自带 role=progressbar 与 aria-value*（Radix）。
 */
import * as ProgressPrimitive from '@radix-ui/react-progress'
import { cn } from '@kit/core'
import type { ProgressProps, ProgressSize, ProgressTone } from './Progress.types'

const TONE_BAR: Record<ProgressTone, string> = {
  primary: 'bg-primary-default',
  success: 'bg-success-default',
  warning: 'bg-warning-default',
  danger: 'bg-danger-default',
}

const HEIGHT: Record<ProgressSize, string> = {
  sm: 'h-1',
  md: 'h-2',
}

export function Progress({
  value,
  max = 100,
  size = 'md',
  tone = 'primary',
  showLabel = false,
  className,
  id,
}: ProgressProps) {
  const safeMax = max > 0 ? max : 100
  const pct = Math.min(100, Math.max(0, (value / safeMax) * 100))
  const label = `${Math.round(pct)}%`

  const root = (
    <ProgressPrimitive.Root
      {...(id !== undefined ? { id } : {})}
      value={value}
      max={safeMax}
      getValueLabel={() => label}
      className={cn(
        'relative overflow-hidden rounded-full bg-bg-active',
        HEIGHT[size],
        showLabel ? 'flex-1' : 'w-full',
        className,
      )}
    >
      <ProgressPrimitive.Indicator
        className={cn(
          'h-full rounded-full transition-[width] duration-base ease-standard',
          TONE_BAR[tone],
        )}
        style={{ width: `${pct}%` }}
      />
    </ProgressPrimitive.Root>
  )

  if (!showLabel) return root

  return (
    <div className="flex w-full items-center gap-2">
      {root}
      <span className="w-9 shrink-0 text-right text-caption text-text-secondary">{label}</span>
    </div>
  )
}
