/** StatisticCard 示例：基础统计卡片（native）。 */
import { Text, XStack, YStack } from 'tamagui'
import { StatisticCard } from '../index'

export function States() {
  return (
    <YStack padding={12} gap={24}>
      <YStack gap={8}>
        <Text fontSize={12} color="$textTertiary">
          基础统计卡片
        </Text>
        <XStack flexWrap="wrap" gap={12}>
          <YStack width="48%">
            <StatisticCard
              title="总销售额"
              value="126,560"
              prefix="¥"
              trend="up"
              trendValue="12.5%"
            />
          </YStack>
          <YStack width="48%">
            <StatisticCard title="访问量" value="8,846" trend="up" trendValue="8.2%" />
          </YStack>
        </XStack>
      </YStack>
    </YStack>
  )
}
