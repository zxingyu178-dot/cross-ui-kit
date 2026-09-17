/**
 * Grid 栅格（native：iOS / Android）—— 24 栅格系统，Row + Col，
 * Tamagui XStack/YStack，支持间距/对齐/换行/偏移/排序。
 */
import { XStack, YStack } from 'tamagui'
import type { ColProps, GridAlign, GridJustify, RowProps } from './Grid.types'

const justifyMap: Record<
  GridJustify,
  'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around'
> = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  between: 'space-between',
  around: 'space-around',
}

const alignMap: Record<GridAlign, 'flex-start' | 'center' | 'flex-end'> = {
  top: 'flex-start',
  middle: 'center',
  bottom: 'flex-end',
}

export function Row({
  gutter = 0,
  justify = 'start',
  align = 'top',
  wrap = true,
  children,
  style,
}: RowProps) {
  const [hGutter, vGutter] = Array.isArray(gutter) ? gutter : [gutter, 0]

  return (
    <XStack
      flexWrap={wrap ? 'wrap' : 'nowrap'}
      justifyContent={justifyMap[justify]}
      alignItems={alignMap[align]}
      marginHorizontal={hGutter > 0 ? -hGutter / 2 : 0}
      rowGap={vGutter > 0 ? vGutter : 0}
      style={style}
    >
      {children}
    </XStack>
  )
}

export function Col({ span = 24, offset = 0, order, children, style }: ColProps) {
  return (
    <YStack
      width={`${(span / 24) * 100}%`}
      marginLeft={offset > 0 ? `${(offset / 24) * 100}%` : 0}
      style={[{ zIndex: order }, style]}
    >
      {children}
    </YStack>
  )
}
