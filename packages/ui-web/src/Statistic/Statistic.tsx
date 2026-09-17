/**
 * Statistic 统计数值（web）—— 标题 + 数值（前缀/后缀），number 自动千分位+precision，
 * loading 骨架。视觉值走 Tailwind 语义类。
 */
import { cn } from '@kit/core'
import type { StatisticProps } from './Statistic.types'

function formatValue(value: number | string, precision?: number): string {
  if (typeof value === 'string') return value
  const fixed = precision !== undefined ? value.toFixed(precision) : String(value)
  const parts = fixed.split('.')
  const intPart = parts[0] ?? ''
  const decPart = parts[1]
  const intFormatted = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return decPart !== undefined ? `${intFormatted}.${decPart}` : intFormatted
}

export function Statistic({
  title,
  value,
  prefix,
  suffix,
  precision,
  loading = false,
  valueStyle,
  className,
}: StatisticProps) {
  return (
    <div className={cn('flex flex-col gap-1', className)}>
      {title ? <div className="text-bodySm text-text-secondary">{title}</div> : null}
      {loading ? (
        <div className="h-8 w-32 animate-pulse rounded bg-bg-muted" />
      ) : (
        <div
          className="flex items-baseline gap-1 text-titleSm font-semibold text-text-primary"
          style={valueStyle}
        >
          {prefix ? <span className="text-bodyMd font-medium">{prefix}</span> : null}
          <span>{formatValue(value, precision)}</span>
          {suffix ? <span className="text-bodyMd font-medium">{suffix}</span> : null}
        </div>
      )}
    </div>
  )
}
