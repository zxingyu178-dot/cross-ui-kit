/** TextArea 示例：基础多行文本框（mini）。 */
import { useState } from 'react'
import { Text, View } from '@tarojs/components'
import { TextArea } from '../index'

export function States() {
  const [value, setValue] = useState('')
  return (
    <View style={{ padding: 12, maxWidth: 400 }}>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>
          基础多行文本框
        </Text>
        <TextArea value={value} onChange={setValue} rows={4} placeholder="请输入内容" />
      </View>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>
          字数统计 + 最大长度
        </Text>
        <TextArea rows={3} maxLength={200} showCount placeholder="最多输入 200 字" />
      </View>
    </View>
  )
}
