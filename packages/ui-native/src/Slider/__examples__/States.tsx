/** Slider 示例：基础/范围/步长/禁用（native）。 */
import { useState } from 'react'
import { Text, YStack } from 'tamagui'
import { Slider } from '../index'

export function States() {
  const [v1, setV1] = useState(30)
  const [v2, setV2] = useState(50)
  return (
    <YStack padding={12} gap={16}>
      <YStack gap={8}>
        <Text fontSize={12} color="$textTertiary">
          基础（当前 {v1}）
        </Text>
        <Slider value={v1} onChange={setV1} />
      </YStack>
      <YStack gap={8}>
        <Text fontSize={12} color="$textTertiary">
          范围 0-10 / 步长 0.5（当前 {v2}）
        </Text>
        <Slider value={v2} onChange={setV2} min={0} max={10} step={0.5} />
      </YStack>
      <YStack gap={8}>
        <Text fontSize={12} color="$textTertiary">
          禁用
        </Text>
        <Slider defaultValue={60} disabled />
      </YStack>
    </YStack>
  )
}
