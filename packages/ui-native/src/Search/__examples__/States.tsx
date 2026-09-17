/** Search 示例：基础搜索框（native）。 */
import { useState } from 'react'
import { Text, YStack } from 'tamagui'
import { Search } from '../index'

export function States() {
  const [value, setValue] = useState('')
  const [searched, setSearched] = useState('')
  return (
    <YStack padding={12} gap={24} maxWidth={400}>
      <YStack gap={8}>
        <Text fontSize={12} color="$textTertiary">
          基础搜索框
        </Text>
        <Search
          value={value}
          onChange={setValue}
          onSearch={(v) => setSearched(v)}
          placeholder="请输入搜索关键词"
        />
        {searched ? (
          <Text fontSize={12} color="$textSecondary">
            搜索关键词：{searched}
          </Text>
        ) : null}
      </YStack>
      <YStack gap={8}>
        <Text fontSize={12} color="$textTertiary">
          禁用状态
        </Text>
        <Search value="禁用的搜索词" disabled />
      </YStack>
    </YStack>
  )
}
