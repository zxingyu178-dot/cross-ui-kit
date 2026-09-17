/**
 * Space 间距（web）—— flex 容器，gap 控制间距，支持水平/垂直/对齐/换行。
 */
import { cn } from '@kit/core'
import type { SpaceAlign, SpaceProps, SpaceSize } from './Space.types'

const sizeMap: Record<Exclude<SpaceSize, number>, string> = {
  xs: 'gap-1',
  sm: 'gap-2',
  md: 'gap-3',
  lg: 'gap-4',
  xl: 'gap-6',
}

const alignMap: Record<SpaceAlign, string> = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  baseline: 'items-baseline',
}

export function Space({
  size = 'md',
  direction = 'horizontal',
  align,
  wrap = false,
  children,
  className,
}: SpaceProps) {
  const gapClass = typeof size === 'number' ? '' : sizeMap[size]
  const gapStyle = typeof size === 'number' ? { gap: `${size}px` } : undefined

  return (
    <div
      className={cn(
        'flex',
        direction === 'horizontal' ? 'flex-row' : 'flex-col',
        gapClass,
        align ? alignMap[align] : '',
        wrap ? 'flex-wrap' : '',
        className,
      )}
      style={gapStyle}
    >
      {children}
    </div>
  )
}
