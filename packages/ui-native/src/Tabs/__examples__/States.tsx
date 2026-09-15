/** Tabs 示例：受控带内容、非受控、小号、含禁用项、纯头导航（native）。 */
import { useState, type ReactNode } from 'react'
import { Text, YStack } from 'tamagui'
import { Tabs } from '../index'

function Caption({ children }: { children: ReactNode }) {
  return (
    <Text color="$textTertiary" fontSize="$bodySm">
      {children}
    </Text>
  )
}

export function States() {
  const [tab, setTab] = useState('overview')

  return (
    <YStack gap="$6" padding="$4">
      <YStack gap="$2">
        <Caption>受控（带内容，当前：{tab}）</Caption>
        <Tabs
          value={tab}
          onValueChange={setTab}
          items={[
            {
              value: 'overview',
              label: '概览',
              content: <Text color="$textPrimary">这里是概览面板内容。</Text>,
            },
            {
              value: 'analytics',
              label: '分析',
              content: <Text color="$textPrimary">这里是分析面板内容。</Text>,
            },
            {
              value: 'settings',
              label: '设置',
              disabled: true,
              content: <Text color="$textPrimary">设置（禁用）</Text>,
            },
          ]}
        />
      </YStack>

      <YStack gap="$2">
        <Caption>非受控（默认第二项）</Caption>
        <Tabs
          defaultValue="b"
          items={[
            { value: 'a', label: '标签 A', content: <Text color="$textPrimary">面板 A</Text> },
            { value: 'b', label: '标签 B', content: <Text color="$textPrimary">面板 B</Text> },
            { value: 'c', label: '标签 C', content: <Text color="$textPrimary">面板 C</Text> },
          ]}
        />
      </YStack>

      <YStack gap="$2">
        <Caption>小号 sm</Caption>
        <Tabs
          size="sm"
          defaultValue="x"
          items={[
            { value: 'x', label: '日', content: <Text color="$textPrimary">日视图</Text> },
            { value: 'y', label: '周', content: <Text color="$textPrimary">周视图</Text> },
            { value: 'z', label: '月', content: <Text color="$textPrimary">月视图</Text> },
          ]}
        />
      </YStack>

      <YStack gap="$2">
        <Caption>纯头导航（不内置面板）</Caption>
        <Tabs
          defaultValue="day"
          items={[
            { value: 'day', label: '今日' },
            { value: 'week', label: '本周' },
            { value: 'month', label: '本月' },
          ]}
        />
      </YStack>
    </YStack>
  )
}
