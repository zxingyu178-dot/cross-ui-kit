/** Breadcrumb 示例：基础 / 自定义分隔符 / 点击中间项（受控回调演示）。 */
import { useState } from 'react'
import type { ReactNode } from 'react'
import { Breadcrumb } from '../index'

function Group({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-caption text-text-tertiary">{label}</span>
      {children}
    </div>
  )
}

export function States() {
  const [clicked, setClicked] = useState('未点击')

  return (
    <div className="flex flex-col gap-8">
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

      <Group label="点击中间项（onNavigate 受控，含无 href 项可点）">
        <Breadcrumb
          items={[
            { label: '首页' },
            { label: '配置中心', href: '#' },
            { label: '权限管理', href: '#' },
            { label: '角色' },
          ]}
          onNavigate={(i) => setClicked(`点击了第 ${i + 1} 项`)}
        />
        <span className="text-body-sm text-text-secondary">{clicked}</span>
      </Group>
    </div>
  )
}
