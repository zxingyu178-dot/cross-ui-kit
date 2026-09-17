/** Tree 示例：基础树形（native）。 */
import { useState } from 'react'
import { Text, YStack } from 'tamagui'
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
    <YStack padding={12} gap={24}>
      <YStack gap={8} width={288}>
        <Text fontSize={12} color="$textTertiary">
          基础树形（默认展开，当前选中：{selected.join(', ') || '无'}）
        </Text>
        <Tree data={data} defaultExpandAll selectedKeys={selected} onSelect={setSelected} />
      </YStack>
    </YStack>
  )
}
