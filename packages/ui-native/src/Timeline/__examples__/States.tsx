/** Timeline 示例：默认 + 倒序（native）。 */
import { Text, YStack } from 'tamagui'
import { Timeline } from '../index'
import type { TimelineItem } from '../Timeline.types'

const ITEMS: TimelineItem[] = [
  {
    time: '2024-01-15',
    title: '项目启动',
    description: '完成需求评审与技术选型。',
    color: 'primary',
  },
  { time: '2024-03-20', title: '基础组件完成', color: 'success', dotType: 'solid' },
  { time: '2024-05-10', title: '反馈类组件补齐', color: 'info' },
  { time: '2024-06-01', title: '待上线', description: '等待测试验收。', color: 'warning' },
]

export function States() {
  return (
    <YStack padding={12} gap={24}>
      <YStack gap={8}>
        <Text fontSize={12} color="$textTertiary">
          默认（outline 圆点）
        </Text>
        <Timeline items={ITEMS} />
      </YStack>
      <YStack gap={8}>
        <Text fontSize={12} color="$textTertiary">
          倒序
        </Text>
        <Timeline items={ITEMS} reverse />
      </YStack>
    </YStack>
  )
}
