/** Rate 示例：基础/半星/自定义/禁用（native）。 */
import { useState } from 'react'
import { Text, XStack, YStack } from 'tamagui'
import { Rate } from '../index'

export function States() {
  const [score, setScore] = useState(3)
  return (
    <YStack padding={12} gap={16}>
      <YStack gap={8}>
        <Text fontSize={12} color="$textTertiary">
          基础（受控，当前 {score} 分）
        </Text>
        <Rate value={score} onChange={setScore} />
      </YStack>
      <YStack gap={8}>
        <Text fontSize={12} color="$textTertiary">
          半星（allowHalf）
        </Text>
        <Rate defaultValue={3.5} allowHalf />
      </YStack>
      <YStack gap={8}>
        <Text fontSize={12} color="$textTertiary">
          自定义数量 / 字符 / 尺寸
        </Text>
        <XStack flexWrap="wrap" gap={16} alignItems="center">
          <Rate defaultValue={4} count={10} size="sm" />
          <Rate defaultValue={3} character="♥" />
          <Rate defaultValue={5} size="lg" character="▲" />
        </XStack>
      </YStack>
      <YStack gap={8}>
        <Text fontSize={12} color="$textTertiary">
          禁用
        </Text>
        <Rate defaultValue={4} disabled />
      </YStack>
    </YStack>
  )
}
