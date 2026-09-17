/**
 * StatisticCard 统计卡片（native：iOS / Android）—— 卡片 + 统计数字 + 趋势。
 */
import { Text, XStack, YStack } from 'tamagui'
import type { StatisticCardProps } from './StatisticCard.types'

export function StatisticCard({
  title,
  value,
  prefix,
  suffix,
  trend,
  trendValue,
  valueColor,
  style,
}: StatisticCardProps) {
  const trendColor =
    trend === 'up' ? '$successDefault' : trend === 'down' ? '$dangerDefault' : '$textTertiary'
  const trendIcon = trend === 'up' ? '↑' : trend === 'down' ? '↓' : '—'

  return (
    <YStack
      gap={8}
      padding={16}
      borderRadius="$lg"
      borderWidth={1}
      borderColor="$borderDefault"
      backgroundColor="$bgCard"
      shadowColor="#000"
      shadowOffset={{ width: 0, height: 2 }}
      shadowOpacity={0.1}
      shadowRadius={4}
      elevation={2}
      style={style}
    >
      <Text fontSize="$bodySm" color="$textSecondary">
        {title}
      </Text>
      <XStack alignItems="baseline" gap={4}>
        {prefix ? (
          <Text fontSize="$bodySm" color="$textTertiary">
            {prefix}
          </Text>
        ) : null}
        <Text fontSize={24} fontWeight="600" color={valueColor ?? '$textPrimary'}>
          {value}
        </Text>
        {suffix ? (
          <Text fontSize="$bodySm" color="$textTertiary">
            {suffix}
          </Text>
        ) : null}
      </XStack>
      {trend ? (
        <XStack alignItems="center" gap={4}>
          <Text fontSize="$caption" color={trendColor}>
            {trendIcon}
          </Text>
          {trendValue ? (
            <Text fontSize="$caption" color={trendColor}>
              {trendValue}
            </Text>
          ) : null}
        </XStack>
      ) : null}
    </YStack>
  )
}
