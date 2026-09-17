/** Segmented 示例：基础/含禁用项/尺寸（native）。 */
import { useState } from 'react'
import { Text, XStack, YStack } from 'tamagui'
import { Segmented } from '../index'

export function States() {
  const [mode, setMode] = useState('day')
  return (
    <YStack padding={12} gap={16}>
      <YStack gap={8}>
        <Text fontSize={12} color="$textTertiary">
          基础（受控）
        </Text>
        <Segmented
          value={mode}
          onChange={setMode}
          options={[
            { label: '日', value: 'day' },
            { label: '周', value: 'week' },
            { label: '月', value: 'month' },
          ]}
        />
        <Text fontSize={13} color="$textSecondary">
          当前：{mode}
        </Text>
      </YStack>
      <YStack gap={8}>
        <Text fontSize={12} color="$textTertiary">
          含禁用项
        </Text>
        <Segmented
          defaultValue="list"
          options={[
            { label: '列表', value: 'list' },
            { label: '网格', value: 'grid' },
            { label: '看板', value: 'board', disabled: true },
          ]}
        />
      </YStack>
      <YStack gap={8}>
        <Text fontSize={12} color="$textTertiary">
          尺寸 / 整体禁用
        </Text>
        <XStack flexWrap="wrap" gap={12} alignItems="center">
          <Segmented
            size="sm"
            defaultValue="a"
            options={[
              { label: '小', value: 'a' },
              { label: '中', value: 'b' },
            ]}
          />
          <Segmented
            size="md"
            defaultValue="a"
            options={[
              { label: '中', value: 'a' },
              { label: '大', value: 'b' },
            ]}
          />
          <Segmented
            disabled
            defaultValue="a"
            options={[
              { label: '禁用', value: 'a' },
              { label: '项', value: 'b' },
            ]}
          />
        </XStack>
      </YStack>
    </YStack>
  )
}
