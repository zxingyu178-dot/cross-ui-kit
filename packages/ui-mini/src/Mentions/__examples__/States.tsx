/** Mentions 示例：基础提及输入（mini）。 */
import { useState } from 'react'
import { Text, View } from '@tarojs/components'
import { Mentions } from '../index'
import type { MentionOption } from '../Mentions.types'

const options: MentionOption[] = [
  { key: '1', label: '张三', description: '前端工程师' },
  { key: '2', label: '李四', description: '后端工程师' },
  { key: '3', label: '王五', description: '测试工程师' },
]

export function States() {
  const [value, setValue] = useState('')
  return (
    <View style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 12 }}>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8, width: 320 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>
          基础提及输入（输入 @ 触发用户列表）
        </Text>
        <Mentions
          value={value}
          onChange={setValue}
          options={options}
          placeholder="输入 @ 提及用户"
        />
      </View>
    </View>
  )
}
