/** TagGroup 示例：基础标签组（native）。 */
import { useState } from 'react'
import { Text, YStack } from 'tamagui'
import { TagGroup } from '../index'
import type { TagGroupItem } from '../TagGroup.types'

const initialItems: TagGroupItem[] = [
  { key: '1', label: '标签一', color: 'primary' },
  { key: '2', label: '标签二', color: 'success' },
  { key: '3', label: '标签三', color: 'warning' },
  { key: '4', label: '标签四', color: 'danger' },
  { key: '5', label: '标签五', color: 'info' },
]

export function States() {
  const [items, setItems] = useState<TagGroupItem[]>(initialItems)
  const handleClose = (key: string) => setItems((prev) => prev.filter((item) => item.key !== key))
  return (
    <YStack padding={12} gap={24}>
      <YStack gap={8}>
        <Text fontSize={12} color="$textTertiary">
          基础标签组
        </Text>
        <TagGroup items={items} />
      </YStack>
      <YStack gap={8}>
        <Text fontSize={12} color="$textTertiary">
          超出显示 +N
        </Text>
        <TagGroup items={items} max={3} />
      </YStack>
      <YStack gap={8}>
        <Text fontSize={12} color="$textTertiary">
          可关闭标签
        </Text>
        <TagGroup
          items={items.slice(0, 3).map((item) => ({ ...item, closable: true }))}
          onClose={handleClose}
        />
      </YStack>
    </YStack>
  )
}
