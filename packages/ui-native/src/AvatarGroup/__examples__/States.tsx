/** AvatarGroup 示例：基础头像组（native）。 */
import { Text, YStack } from 'tamagui'
import { AvatarGroup } from '../index'
import type { AvatarGroupItem } from '../AvatarGroup.types'

const items: AvatarGroupItem[] = [
  { key: '1', text: '张', color: '#2563eb' },
  { key: '2', text: '李', color: '#16a34a' },
  { key: '3', text: '王', color: '#d97706' },
  { key: '4', text: '赵', color: '#dc2626' },
  { key: '5', text: '钱', color: '#7c3aed' },
]

export function States() {
  return (
    <YStack padding={12} gap={24}>
      <YStack gap={8}>
        <Text fontSize={12} color="$textTertiary">
          基础头像组
        </Text>
        <AvatarGroup items={items} max={5} size={36} />
      </YStack>
      <YStack gap={8}>
        <Text fontSize={12} color="$textTertiary">
          超出显示 +N
        </Text>
        <AvatarGroup items={items} max={3} size={40} />
      </YStack>
    </YStack>
  )
}
