/** TreeSelect 示例：基础树形选择（native）。 */
import { useState } from 'react'
import { Text, YStack } from 'tamagui'
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
    <YStack padding={12} gap={24}>
      <YStack gap={8} width={288}>
        <Text fontSize={12} color="$textTertiary">
          基础树形选择（当前选中：{value || '无'}）
        </Text>
        <TreeSelect data={data} value={value} onChange={(v) => setValue(v)} />
      </YStack>
    </YStack>
  )
}
