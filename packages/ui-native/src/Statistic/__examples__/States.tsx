/** Statistic 示例：基础/小数/前缀后缀/加载中（native）。 */
import { XStack, YStack } from 'tamagui'
import { Statistic } from '../index'

export function States() {
  return (
    <YStack padding={12} gap={16}>
      <XStack flexWrap="wrap" gap={32}>
        <Statistic title="活跃用户" value={12345} suffix="人" />
        <Statistic title="转化率" value={3.14159} precision={2} suffix="%" />
        <Statistic title="营收" value={9876543.21} prefix="¥" precision={2} />
      </XStack>
      <XStack flexWrap="wrap" gap={32}>
        <Statistic title="加载中" value={0} loading />
        <Statistic title="负数" value={-1234.56} precision={2} />
      </XStack>
    </YStack>
  )
}
