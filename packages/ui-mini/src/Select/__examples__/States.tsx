/** Select 示例：基础、默认值、尺寸、禁用、错误（mini）。 */
import { View } from '@tarojs/components'
import { useState } from 'react'
import { Select } from '../index'

const FRUITS = [
  { label: '苹果', value: 'apple' },
  { label: '香蕉', value: 'banana' },
  { label: '橙子', value: 'orange' },
]

export function States() {
  const [fruit, setFruit] = useState('apple')

  return (
    <View style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: 12 }}>
      <Select options={FRUITS} value={fruit} onChange={setFruit} placeholder="选择水果" />
      <Select options={FRUITS} defaultValue="banana" />
      <Select size="sm" options={FRUITS} placeholder="小号" />
      <Select size="lg" options={FRUITS} placeholder="大号" />
      <Select disabled options={FRUITS} placeholder="禁用整个选择器" />
      <Select error="请选择一项" options={FRUITS} placeholder="错误态" />
    </View>
  )
}
