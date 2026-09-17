/**
 * StatisticCard 统计卡片（mini：小程序 / 移动 H5）—— 卡片 + 统计数字 + 趋势。
 */
import { Text, View } from '@tarojs/components'
import type { StatisticCardProps } from './StatisticCard.types'
import './StatisticCard.scss'

export function StatisticCard({
  title,
  value,
  prefix,
  suffix,
  trend,
  trendValue,
  valueColor,
  className = '',
}: StatisticCardProps) {
  const trendColor =
    trend === 'up'
      ? 'var(--kit-color-success-default)'
      : trend === 'down'
        ? 'var(--kit-color-danger-default)'
        : 'var(--kit-color-text-tertiary)'
  const trendIcon = trend === 'up' ? '↑' : trend === 'down' ? '↓' : '—'

  return (
    <View className={`kit-statistic-card ${className}`.trim()}>
      <Text className="kit-statistic-card__title">{title}</Text>
      <View className="kit-statistic-card__value-row">
        {prefix ? <Text className="kit-statistic-card__prefix">{prefix}</Text> : null}
        <Text
          className="kit-statistic-card__value"
          style={{ color: valueColor ?? 'var(--kit-color-text-primary)' }}
        >
          {value}
        </Text>
        {suffix ? <Text className="kit-statistic-card__suffix">{suffix}</Text> : null}
      </View>
      {trend ? (
        <View className="kit-statistic-card__trend" style={{ color: trendColor }}>
          <Text>{trendIcon}</Text>
          {trendValue ? <Text>{trendValue}</Text> : null}
        </View>
      ) : null}
    </View>
  )
}
