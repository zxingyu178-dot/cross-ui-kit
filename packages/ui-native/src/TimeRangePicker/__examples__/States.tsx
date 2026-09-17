/** TimeRangePicker 示例：基础时间范围选择器（native）。 */
import { useState } from 'react'
import { Text, YStack } from 'tamagui'
import { TimeRangePicker } from '../index'

export function States() {
  const [value, setValue] = useState<[string, string]>(['', ''])
  return (
    <YStack padding={12} gap={24} maxWidth={400}>
      <YStack gap={8}>
        <Text fontSize={12} color="$textTertiary">
          基础时间范围选择器
        </Text>
        <TimeRangePicker value={value} onChange={setValue} />
        {value[0] && value[1] ? (
          <Text fontSize={12} color="$textSecondary">
            选中范围：{value[0]} 至 {value[1]}
          </Text>
        ) : null}
      </YStack>
      <YStack gap={8}>
        <Text fontSize={12} color="$textTertiary">
          禁用状态
        </Text>
        <TimeRangePicker value={['09:00', '18:00']} disabled />
      </YStack>
    </YStack>
  )
}
