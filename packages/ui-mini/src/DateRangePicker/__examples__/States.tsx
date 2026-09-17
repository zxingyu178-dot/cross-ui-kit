/** DateRangePicker 示例：基础日期范围选择器（mini）。 */
import { useState } from 'react'
import { Text, View } from '@tarojs/components'
import { DateRangePicker } from '../index'

export function States() {
  const [value, setValue] = useState<[string, string]>(['', ''])
  return (
    <View style={{ padding: 12, maxWidth: 400 }}>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>
          基础日期范围选择器
        </Text>
        <DateRangePicker value={value} onChange={setValue} />
        {value[0] && value[1] ? (
          <Text style={{ fontSize: 12, color: 'var(--kit-color-text-secondary)' }}>
            选中范围：{value[0]} 至 {value[1]}
          </Text>
        ) : null}
      </View>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>禁用状态</Text>
        <DateRangePicker value={['2026-01-01', '2026-12-31']} disabled />
      </View>
    </View>
  )
}
