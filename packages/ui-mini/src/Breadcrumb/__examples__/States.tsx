/** Breadcrumb 示例：基础 / 自定义分隔符 / 点击中间项（mini）。 */
import { useState } from 'react'
import type { ReactNode } from 'react'
import { Text, View } from '@tarojs/components'
import { Breadcrumb } from '../index'

function Group({ label, children }: { label: string; children: ReactNode }) {
  return (
    <View style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Text
        style={{
          fontSize: 'var(--kit-font-size-caption)',
          color: 'var(--kit-color-text-tertiary)',
        }}
      >
        {label}
      </Text>
      {children}
    </View>
  )
}

export function States() {
  const [clicked, setClicked] = useState('未点击')

  return (
    <View style={{ display: 'flex', flexDirection: 'column', gap: 32, padding: 16 }}>
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
        <Text
          style={{
            fontSize: 'var(--kit-font-size-body-sm)',
            color: 'var(--kit-color-text-secondary)',
          }}
        >
          {clicked}
        </Text>
      </Group>
    </View>
  )
}
