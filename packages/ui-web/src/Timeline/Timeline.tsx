/**
 * Timeline 时间线（web）—— 垂直时间轴，语义色圆点 + 时间 + 标题 + 描述，支持倒序与自定义圆点。
 * 视觉值只走 Tailwind 主题语义类；竖线为 border-default，圆点 outline/solid 两形态。
 */
import { cn } from '@kit/core'
import type { TimelineColor, TimelineDotType, TimelineProps } from './Timeline.types'

const DOT_BORDER: Record<TimelineColor, string> = {
  primary: 'border-primary-default',
  success: 'border-success-default',
  warning: 'border-warning-default',
  error: 'border-danger-default',
  info: 'border-info-default',
  neutral: 'border-border-default',
}

const DOT_BG: Record<TimelineColor, string> = {
  primary: 'bg-primary-default',
  success: 'bg-success-default',
  warning: 'bg-warning-default',
  error: 'bg-danger-default',
  info: 'bg-info-default',
  neutral: 'bg-bg-card',
}

function dotClass(color: TimelineColor, dotType: TimelineDotType) {
  return cn(
    'relative z-10 mt-[5px] size-[15px] shrink-0 rounded-full border-2',
    DOT_BORDER[color],
    dotType === 'solid' ? DOT_BG[color] : 'bg-bg-card',
  )
}

export function Timeline({ items, reverse = false, className }: TimelineProps) {
  const list = reverse ? [...items].reverse() : items
  return (
    <ol className={cn('relative flex flex-col', className)}>
      <div className="absolute bottom-2 left-[7px] top-2 w-px bg-border-default" aria-hidden />
      {list.map((item, i) => (
        <li key={i} className="relative flex gap-3 pb-6 last:pb-0">
          {item.customDot ? (
            <span className="relative z-10 flex shrink-0 items-center justify-center">
              {item.customDot}
            </span>
          ) : (
            <span
              className={dotClass(item.color ?? 'neutral', item.dotType ?? 'outline')}
              aria-hidden
            />
          )}
          <div className="min-w-0 flex-1">
            {item.time ? (
              <div className="mb-1 text-caption text-text-tertiary">{item.time}</div>
            ) : null}
            {item.title ? (
              <div className="text-body-md font-medium text-text-primary">{item.title}</div>
            ) : null}
            {item.description ? (
              <div className="mt-1 text-body-sm text-text-secondary">{item.description}</div>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  )
}
