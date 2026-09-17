/** Tree 示例：基础树形/默认折叠/禁用（mini）。 */
import { useState } from 'react'
import { Text, View } from '@tarojs/components'
import { Tree } from '../index'
import type { TreeNode } from '../Tree.types'

const data: TreeNode[] = [
  {
    key: '1',
    title: '系统管理',
    children: [
      { key: '1-1', title: '用户管理' },
      { key: '1-2', title: '角色管理' },
    ],
  },
  { key: '2', title: '内容管理' },
]

export function States() {
  const [selected, setSelected] = useState<string[]>(['1-1'])
  return (
    <View style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 12 }}>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8, width: 288 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>
          基础树形（默认展开，当前选中：{selected.join(', ') || '无'}）
        </Text>
        <Tree data={data} defaultExpandAll selectedKeys={selected} onSelect={setSelected} />
      </View>
    </View>
  )
}
