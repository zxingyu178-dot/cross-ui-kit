/** CardGroup 示例：基础卡片组（native）。 */
import { Text, YStack } from 'tamagui'
import { CardGroup } from '../index'
import type { CardGroupItem } from '../CardGroup.types'

const items: CardGroupItem[] = [
  { key: '1', title: '卡片一', content: '这是卡片一的内容。' },
  { key: '2', title: '卡片二', content: '这是卡片二的内容。' },
  { key: '3', title: '卡片三', content: '这是卡片三的内容。' },
  { key: '4', title: '卡片四', content: '这是卡片四的内容。' },
]

export function States() {
  return (
    <YStack padding={12} gap={24}>
      <YStack gap={8}>
        <Text fontSize={12} color="$textTertiary">
          基础卡片组（2列）
        </Text>
        <CardGroup items={items} columns={2} />
      </YStack>
    </YStack>
  )
}
