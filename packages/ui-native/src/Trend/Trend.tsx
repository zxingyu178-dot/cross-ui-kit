/**
 * Trend 趋势指示器（native：iOS / Android）。
 */
import { Text, XStack } from 'tamagui'
import type { TrendProps } from './Trend.types'

export function Trend({ direction, value, inverted = false, showArrow = true, style }: TrendProps) {
  const color =
    direction === 'flat'
      ? '$textSecondary'
      : inverted
        ? direction === 'up'
          ? '$successDefault'
          : '$dangerDefault'
        : direction === 'up'
          ? '$dangerDefault'
          : '$successDefault'

  const arrow = direction === 'flat' ? '' : direction === 'up' ? '▲' : '▼'

  return (
    <XStack alignItems="center" gap={4} style={style}>
      {showArrow && arrow !== '' && (
        <Text fontSize={10} color={color}>
          {arrow}
        </Text>
      )}
      <Text fontSize={13} fontWeight="500" color={color}>
        {value}
      </Text>
    </XStack>
  )
}
