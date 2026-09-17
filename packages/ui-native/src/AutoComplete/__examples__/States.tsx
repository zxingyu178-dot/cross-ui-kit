/** AutoComplete 示例：基础/禁用（native）。 */
import { useState } from 'react'
import { Text, YStack } from 'tamagui'
import { AutoComplete } from '../index'

const CITIES = [
  { value: 'beijing', label: '北京' },
  { value: 'shanghai', label: '上海' },
  { value: 'guangzhou', label: '广州' },
  { value: 'shenzhen', label: '深圳' },
  { value: 'hangzhou', label: '杭州' },
  { value: 'nanjing', label: '南京', disabled: true },
]

export function States() {
  const [v1, setV1] = useState('')
  return (
    <YStack padding={12} gap={16}>
      <YStack gap={8} width={256}>
        <Text fontSize={12} color="$textTertiary">
          基础（当前：{v1 || '空'}）
        </Text>
        <AutoComplete value={v1} onChange={setV1} options={CITIES} placeholder="输入城市名" />
      </YStack>
      <YStack gap={8} width={256}>
        <Text fontSize={12} color="$textTertiary">
          禁用
        </Text>
        <AutoComplete defaultValue="北京" options={CITIES} disabled />
      </YStack>
    </YStack>
  )
}
