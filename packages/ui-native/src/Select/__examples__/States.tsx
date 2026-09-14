/** Select 示例：受控、默认值、尺寸、禁用、错误（native）。 */
import { YStack } from 'tamagui'
import { useState } from 'react'
import { Select } from '../index'

const FRUITS = [
  { label: '苹果', value: 'apple' },
  { label: '香蕉', value: 'banana' },
  { label: '橙子', value: 'orange' },
  { label: '葡萄（禁用）', value: 'grape', disabled: true },
]

export function States() {
  const [fruit, setFruit] = useState('apple')

  return (
    <YStack gap={12} padding={16} width={300}>
      <Select
        options={FRUITS}
        value={fruit}
        onChange={setFruit}
        placeholder="选择水果"
        accessibilityLabel="选择水果"
      />
      <Select options={FRUITS} defaultValue="banana" accessibilityLabel="默认值选择器" />
      <Select
        size="sm"
        options={FRUITS.slice(0, 3)}
        placeholder="小号"
        accessibilityLabel="小号选择器"
      />
      <Select
        size="lg"
        options={FRUITS.slice(0, 3)}
        placeholder="大号"
        accessibilityLabel="大号选择器"
      />
      <Select
        disabled
        options={FRUITS}
        placeholder="禁用整个选择器"
        accessibilityLabel="禁用选择器"
      />
      <Select
        error="请选择一项"
        options={FRUITS}
        placeholder="错误态"
        accessibilityLabel="错误选择器"
      />
    </YStack>
  )
}
