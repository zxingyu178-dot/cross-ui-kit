/** InputNumber 示例：基础/小数/受控/无按钮禁用（native）。 */
import { useState } from 'react'
import { Text, XStack, YStack } from 'tamagui'
import { InputNumber } from '../index'

export function States() {
  const [v, setV] = useState<number | null>(1)
  return (
    <YStack padding={12} gap={16}>
      <YStack gap={8}>
        <Text fontSize={12} color="$textTertiary">
          基础（min 0 / max 10）
        </Text>
        <InputNumber defaultValue={1} min={0} max={10} />
      </YStack>
      <YStack gap={8}>
        <Text fontSize={12} color="$textTertiary">
          小数（precision 2 / step 0.1）
        </Text>
        <InputNumber defaultValue={3.14} precision={2} step={0.1} min={0} />
      </YStack>
      <YStack gap={8}>
        <Text fontSize={12} color="$textTertiary">
          受控（当前：{v ?? 'null'}）
        </Text>
        <InputNumber value={v} onChange={setV} min={-5} max={5} />
      </YStack>
      <YStack gap={8}>
        <Text fontSize={12} color="$textTertiary">
          无按钮 / 禁用 / 尺寸
        </Text>
        <XStack flexWrap="wrap" gap={12} alignItems="center">
          <InputNumber controls={false} placeholder="请输入" />
          <InputNumber defaultValue={5} disabled />
          <InputNumber defaultValue={1} size="sm" />
        </XStack>
      </YStack>
    </YStack>
  )
}
