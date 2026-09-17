/**
 * StatisticCard 统计卡片（web）—— 卡片 + 统计数字 + 趋势。
 */
import { cn } from '@kit/core'
import type { StatisticCardProps } from './StatisticCard.types'

export function StatisticCard({
  title,
  value,
  prefix,
  suffix,
  trend,
  trendValue,
  valueColor,
  children,
  className,
}: StatisticCardProps) {
  const trendColor =
    trend === 'up'
      ? 'text-success-default'
      : trend === 'down'
        ? 'text-danger-default'
        : 'text-text-tertiary'
  const trendIcon = trend === 'up' ? '↑' : trend === 'down' ? '↓' : '—'

  return (
    <div
      className={cn(
        'flex flex-col gap-2 rounded-lg border border-border-default bg-bg-card p-4 shadow-card transition-shadow hover:shadow-lg',
        className,
      )}
    >
      <div className="text-bodySm text-text-secondary">{title}</div>
      <div className="flex items-baseline gap-1">
        {prefix ? <span className="text-bodySm text-text-tertiary">{prefix}</span> : null}
        <span
          className="text-2xl font-semibold"
          style={{ color: valueColor ?? 'var(--kit-color-text-primary)' }}
        >
          {value}
        </span>
        {suffix ? <span className="text-bodySm text-text-tertiary">{suffix}</span> : null}
      </div>
      {trend ? (
        <div className={cn('flex items-center gap-1 text-caption', trendColor)}>
          <span>{trendIcon}</span>
          {trendValue ? <span>{trendValue}</span> : null}
        </div>
      ) : null}
      {children}
    </div>
  )
}
