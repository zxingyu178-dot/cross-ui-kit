/** Address 示例：地址选择器（native）。 */
import { useState } from 'react'
import { Text, YStack } from 'tamagui'
import { Address } from '../index'
import type { AddressValue } from '../Address.types'

export function States() {
  const [value, setValue] = useState<AddressValue>({})
  return (
    <YStack padding={12} gap={24}>
      <YStack gap={8}>
        <Text fontSize={12} color="$textTertiary">
          基础地址选择
        </Text>
        <Address value={value} onChange={setValue} />
        <Text fontSize={12} color="$textTertiary">
          选中：{value.province ?? '-'} / {value.city ?? '-'} / {value.district ?? '-'}
        </Text>
      </YStack>
      <YStack gap={8}>
        <Text fontSize={12} color="$textTertiary">
          禁用状态
        </Text>
        <Address
          value={{ province: 'beijing', city: 'beijing-city', district: 'chaoyang' }}
          disabled
        />
      </YStack>
    </YStack>
  )
}
