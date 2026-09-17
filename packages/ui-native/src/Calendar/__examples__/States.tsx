/** Calendar 示例：基础（native）。 */
import { useState } from 'react'
import { Text, YStack } from 'tamagui'
import { Calendar } from '../index'

export function States() {
  const [date, setDate] = useState(new Date())
  return (
    <YStack padding={12} gap={8}>
      <Text fontSize={12} color="$textTertiary">
        基础（选中：{date.toLocaleDateString()}）
      </Text>
      <Calendar value={date} onChange={setDate} />
    </YStack>
  )
}
