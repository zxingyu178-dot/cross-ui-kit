/**
 * Space 间距（native：iOS / Android）—— Tamagui XStack/YStack，gap 控制间距，
 * 支持水平/垂直/对齐/换行。
 */
import { XStack, YStack } from 'tamagui'
import type { SpaceAlign, SpaceProps, SpaceSize } from './Space.types'

const sizeMap: Record<Exclude<SpaceSize, number>, number> = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
}

const alignMap: Record<SpaceAlign, 'flex-start' | 'center' | 'flex-end' | 'baseline'> = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  baseline: 'baseline',
}

export function Space({
  size = 'md',
  direction = 'horizontal',
  align,
  wrap = false,
  children,
  style,
}: SpaceProps) {
  const gap = typeof size === 'number' ? size : sizeMap[size]
  const alignItems = align ? alignMap[align] : undefined

  if (direction === 'vertical') {
    return (
      <YStack gap={gap} flexWrap={wrap ? 'wrap' : 'nowrap'} alignItems={alignItems} style={style}>
        {children}
      </YStack>
    )
  }

  return (
    <XStack gap={gap} flexWrap={wrap ? 'wrap' : 'nowrap'} alignItems={alignItems} style={style}>
      {children}
    </XStack>
  )
}
