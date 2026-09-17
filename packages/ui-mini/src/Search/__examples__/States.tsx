/** Search 示例：基础搜索框（mini）。 */
import { useState } from 'react'
import { Text, View } from '@tarojs/components'
import { Search } from '../index'

export function States() {
  const [value, setValue] = useState('')
  const [searched, setSearched] = useState('')
  return (
    <View style={{ padding: 12, maxWidth: 400 }}>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>基础搜索框</Text>
        <Search
          value={value}
          onChange={setValue}
          onSearch={(v) => setSearched(v)}
          placeholder="请输入搜索关键词"
        />
        {searched ? (
          <Text style={{ fontSize: 12, color: 'var(--kit-color-text-secondary)' }}>
            搜索关键词：{searched}
          </Text>
        ) : null}
      </View>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>禁用状态</Text>
        <Search value="禁用的搜索词" disabled />
      </View>
    </View>
  )
}
