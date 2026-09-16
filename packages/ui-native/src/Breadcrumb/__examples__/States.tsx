/** Breadcrumb 示例：基础 / 自定义分隔符 / 点击中间项（native）。 */
import { useState } from 'react'
import type { ReactNode } from 'react'
import { Text, YStack } from 'tamagui'
import { Breadcrumb } from '../index'

function Group({ label, children }: { label: string; children: ReactNode }) {
  return (
    <YStack gap="$3">
      <Text fontSize="$caption" color="$textTertiary">
        {label}
      </Text>
      {children}
    </YStack>
  )
}

export function States() {
  const [clicked, setClicked] = useState('未点击')

  return (
    <YStack gap="$8" padding="$4" backgroundColor="$bgPage">
      <Group label="基础面包屑（最后一项为当前页）">
        <Breadcrumb
          items={[
            { label: '首页', href: '#' },
            { label: '组件库', href: '#' },
            { label: '数据展示', href: '#' },
            { label: 'Breadcrumb' },
          ]}
        />
      </Group>

      <Group label="自定义分隔符（separator=›）">
        <Breadcrumb
          separator="›"
          items={[{ label: '工作台' }, { label: '项目管理' }, { label: '迭代计划' }]}
        />
      </Group>

      <Group label="点击中间项（onNavigate 受控）">
        <Breadcrumb
          items={[
            { label: '首页' },
            { label: '配置中心', href: '#' },
            { label: '权限管理', href: '#' },
            { label: '角色' },
          ]}
          onNavigate={(i) => setClicked(`点击了第 ${i + 1} 项`)}
        />
        <Text fontSize="$bodySm" color="$textSecondary">
          {clicked}
        </Text>
      </Group>
    </YStack>
  )
}
