/** TimePicker 示例：时分秒/仅时分（native）。 */
import { useState } from 'react'
import { Text, YStack } from 'tamagui'
import { TimePicker } from '../index'

export function States() {
  const [t1, setT1] = useState('')
  const [t2, setT2] = useState('14:30')
  return (
    <YStack padding={12} gap={16}>
      <YStack gap={8} width={192}>
        <Text fontSize={12} color="$textTertiary">
          时分秒（当前：{t1 || '未选择'}）
        </Text>
        <TimePicker value={t1} onChange={setT1} format="HH:mm:ss" />
      </YStack>
      <YStack gap={8} width={160}>
        <Text fontSize={12} color="$textTertiary">
          仅时分（当前：{t2}）
        </Text>
        <TimePicker value={t2} onChange={setT2} format="HH:mm" />
      </YStack>
    </YStack>
  )
}
