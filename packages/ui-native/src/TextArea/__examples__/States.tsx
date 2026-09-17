/** TextArea 示例：基础多行文本框（native）。 */
import { useState } from 'react'
import { Text, YStack } from 'tamagui'
import { TextArea } from '../index'

export function States() {
  const [value, setValue] = useState('')
  return (
    <YStack padding={12} gap={24} maxWidth={400}>
      <YStack gap={8}>
        <Text fontSize={12} color="$textTertiary">
          基础多行文本框
        </Text>
        <TextArea value={value} onChange={setValue} rows={4} placeholder="请输入内容" />
      </YStack>
      <YStack gap={8}>
        <Text fontSize={12} color="$textTertiary">
          字数统计 + 最大长度
        </Text>
        <TextArea rows={3} maxLength={200} showCount placeholder="最多输入 200 字" />
      </YStack>
    </YStack>
  )
}
