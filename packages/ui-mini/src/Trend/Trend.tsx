/**
 * Trend 趋势指示器（mini：小程序 / 移动 H5）。
 */
import { Text, View } from '@tarojs/components'
import type { TrendProps } from './Trend.types'
import './Trend.scss'

export function Trend({
  direction,
  value,
  inverted = false,
  showArrow = true,
  className = '',
}: TrendProps) {
  const colorClass =
    direction === 'flat'
      ? 'kit-trend--flat'
      : inverted
        ? direction === 'up'
          ? 'kit-trend--up-inverted'
          : 'kit-trend--down-inverted'
        : direction === 'up'
          ? 'kit-trend--up'
          : 'kit-trend--down'

  const arrow = direction === 'flat' ? '' : direction === 'up' ? '▲' : '▼'

  return (
    <View className={`kit-trend ${colorClass} ${className}`.trim()}>
      {showArrow && arrow && <Text className="kit-trend__arrow">{arrow}</Text>}
      <Text className="kit-trend__value">{value}</Text>
    </View>
  )
}
