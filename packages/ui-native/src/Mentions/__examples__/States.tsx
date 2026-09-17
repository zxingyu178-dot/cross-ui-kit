/** Mentions 示例：基础提及输入（native）。 */
import { useState } from 'react'
import { Text, YStack } from 'tamagui'
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
    <YStack padding={12} gap={24}>
      <YStack gap={8} width={320}>
        <Text fontSize={12} color="$textTertiary">
          基础提及输入（输入 @ 触发用户列表）
        </Text>
        <Mentions
          value={value}
          onChange={setValue}
          options={options}
          placeholder="输入 @ 提及用户"
        />
      </YStack>
    </YStack>
  )
}
