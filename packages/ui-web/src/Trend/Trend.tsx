/**
 * Trend 趋势指示器（web）—— 涨跌方向 + 数值，带箭头与语义色。
 */
import { cn } from '@kit/core'
import type { TrendProps } from './Trend.types'

function Arrow({ direction, inverted }: { direction: 'up' | 'down'; inverted?: boolean }) {
  const up = direction === 'up'
  const colorClass = inverted
    ? up
      ? 'text-danger-default'
      : 'text-success-default'
    : up
      ? 'text-danger-default'
      : 'text-success-default'
  void colorClass
  const rot = up ? 'rotate-0' : 'rotate-180'
  return (
    <svg
      viewBox="0 0 16 16"
      width="12"
      height="12"
      className={cn(
        'inline-block',
        rot,
        inverted
          ? up
            ? 'text-danger-default'
            : 'text-success-default'
          : up
            ? 'text-danger-default'
            : 'text-success-default',
      )}
      fill="currentColor"
      aria-hidden
    >
      <path d="M8 4l4 5H4l4-5z" />
    </svg>
  )
}

export function Trend({
  direction,
  value,
  inverted = false,
  showArrow = true,
  className,
}: TrendProps) {
  const colorClass =
    direction === 'flat'
      ? 'text-text-secondary'
      : inverted
        ? direction === 'up'
          ? 'text-danger-default'
          : 'text-success-default'
        : direction === 'up'
          ? 'text-danger-default'
          : 'text-success-default'

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 text-bodySm font-medium',
        colorClass,
        className,
      )}
    >
      {showArrow && direction !== 'flat' && <Arrow direction={direction} inverted={inverted} />}
      <span>{value}</span>
    </span>
  )
}
