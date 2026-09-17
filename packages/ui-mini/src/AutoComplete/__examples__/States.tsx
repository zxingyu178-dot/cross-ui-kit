/** AutoComplete 示例：基础/自定义过滤/禁用（mini）。 */
import { useState } from 'react'
import { Text, View } from '@tarojs/components'
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
    <View style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: 12 }}>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8, width: 256 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>
          基础（当前：{v1 || '空'}）
        </Text>
        <AutoComplete value={v1} onChange={setV1} options={CITIES} placeholder="输入城市名" />
      </View>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8, width: 256 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>禁用</Text>
        <AutoComplete defaultValue="北京" options={CITIES} disabled />
      </View>
    </View>
  )
}
