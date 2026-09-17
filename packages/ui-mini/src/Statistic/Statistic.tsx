/**
 * Statistic 统计数值（mini：小程序 / 移动 H5）—— View+Text 自建，
 * 标题 + 数值（前缀/后缀），number 自动千分位+precision，loading 骨架。
 */
import { Text, View } from '@tarojs/components'
import type { StatisticProps } from './Statistic.types'
import './Statistic.scss'

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
  className = '',
}: StatisticProps) {
  return (
    <View className={`kit-statistic ${className}`.trim()}>
      {title ? <Text className="kit-statistic__title">{title}</Text> : null}
      {loading ? (
        <View className="kit-statistic__skeleton" />
      ) : (
        <View className="kit-statistic__value-row">
          {prefix ? <Text className="kit-statistic__affix">{prefix}</Text> : null}
          <Text className="kit-statistic__value">{formatValue(value, precision)}</Text>
          {suffix ? <Text className="kit-statistic__affix">{suffix}</Text> : null}
        </View>
      )}
    </View>
  )
}
