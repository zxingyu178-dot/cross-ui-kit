/** ColorPicker 示例：基础/禁用（native）。 */
import { useState } from 'react'
import { Text, YStack } from 'tamagui'
import { ColorPicker } from '../index'

export function States() {
  const [c1, setC1] = useState('#2563eb')
  return (
    <YStack padding={12} gap={24}>
      <YStack gap={8} width={224}>
        <Text fontSize={12} color="$textTertiary">
          基础（当前：{c1}）
        </Text>
        <ColorPicker value={c1} onChange={setC1} />
      </YStack>
      <YStack gap={8} width={224}>
        <Text fontSize={12} color="$textTertiary">
          禁用
        </Text>
        <ColorPicker defaultValue="#2563eb" disabled />
      </YStack>
    </YStack>
  )
}
