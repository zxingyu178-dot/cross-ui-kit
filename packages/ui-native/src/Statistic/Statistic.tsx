/**
 * Statistic 统计数值（native：iOS / Android）—— Tamagui YStack+XStack+Text 自建，
 * 标题 + 数值（前缀/后缀），number 自动千分位+precision，loading 骨架。
 */
import { Text, XStack, YStack } from 'tamagui'
import type { StatisticProps } from './Statistic.types'

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
  style,
}: StatisticProps) {
  return (
    <YStack gap={4} style={style}>
      {title ? (
        <Text fontSize="$bodySm" color="$textSecondary" lineHeight={1.4}>
          {title}
        </Text>
      ) : null}
      {loading ? (
        <YStack
          width={128}
          height={32}
          borderRadius="$sm"
          backgroundColor="$bgMuted"
          opacity={0.6}
        />
      ) : (
        <XStack alignItems="baseline" gap={4}>
          {prefix ? (
            <Text fontSize="$bodyMd" fontWeight="$medium" color="$textPrimary">
              {prefix}
            </Text>
          ) : null}
          <Text fontSize="$titleSm" fontWeight="$semibold" color="$textPrimary" lineHeight={1.2}>
            {formatValue(value, precision)}
          </Text>
          {suffix ? (
            <Text fontSize="$bodyMd" fontWeight="$medium" color="$textPrimary">
              {suffix}
            </Text>
          ) : null}
        </XStack>
      )}
    </YStack>
  )
}
