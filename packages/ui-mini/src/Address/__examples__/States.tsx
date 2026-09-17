/** Address 示例：地址选择器（mini）。 */
import { useState } from 'react'
import { Text, View } from '@tarojs/components'
import { Address } from '../index'
import type { AddressValue } from '../Address.types'

export function States() {
  const [value, setValue] = useState<AddressValue>({})
  return (
    <View style={{ padding: 12 }}>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>基础地址选择</Text>
        <Address value={value} onChange={setValue} />
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>
          选中：{value.province ?? '-'} / {value.city ?? '-'} / {value.district ?? '-'}
        </Text>
      </View>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>禁用状态</Text>
        <Address
          value={{ province: 'beijing', city: 'beijing-city', district: 'chaoyang' }}
          disabled
        />
      </View>
    </View>
  )
}
