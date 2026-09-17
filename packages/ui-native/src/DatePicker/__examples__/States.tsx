/** DatePicker 示例：基础/中文格式/禁用（native）。 */
import { useState } from 'react'
import { Text, YStack } from 'tamagui'
import { DatePicker } from '../index'

export function States() {
  const [d1, setD1] = useState<Date | undefined>()
  return (
    <YStack padding={12} gap={16}>
      <YStack gap={8} width={224}>
        <Text fontSize={12} color="$textTertiary">
          基础（当前：{d1 ? d1.toLocaleDateString() : '未选择'}）
        </Text>
        <DatePicker value={d1} onChange={setD1} />
      </YStack>
      <YStack gap={8} width={224}>
        <Text fontSize={12} color="$textTertiary">
          禁用
        </Text>
        <DatePicker defaultValue={new Date()} disabled />
      </YStack>
    </YStack>
  )
}
