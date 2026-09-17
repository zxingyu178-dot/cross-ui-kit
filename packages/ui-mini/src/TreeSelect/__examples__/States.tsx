/** TreeSelect 示例：基础树形选择（mini）。 */
import { useState } from 'react'
import { Text, View } from '@tarojs/components'
import { TreeSelect } from '../index'
import type { TreeSelectNode } from '../TreeSelect.types'

const data: TreeSelectNode[] = [
  {
    key: '1',
    title: '技术部',
    children: [
      { key: '1-1', title: '前端组' },
      { key: '1-2', title: '后端组' },
    ],
  },
  { key: '2', title: '产品部' },
]

export function States() {
  const [value, setValue] = useState('')
  return (
    <View style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 12 }}>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8, width: 288 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>
          基础树形选择（当前选中：{value || '无'}）
        </Text>
        <TreeSelect data={data} value={value} onChange={(v) => setValue(v)} />
      </View>
    </View>
  )
}
