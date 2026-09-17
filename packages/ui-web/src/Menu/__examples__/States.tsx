import { useState } from 'react'
import { Menu } from '../index'
import type { MenuItem } from '../Menu.types'

const items: MenuItem[] = [
  { key: 'home', label: '首页' },
  {
    key: 'products',
    label: '产品中心',
    children: [
      { key: 'p1', label: '产品一' },
      { key: 'p2', label: '产品二' },
      { key: 'p3', label: '产品三' },
    ],
  },
  {
    key: 'solutions',
    label: '解决方案',
    children: [
      { key: 's1', label: '方案一' },
      { key: 's2', label: '方案二' },
    ],
  },
  { key: 'about', label: '关于我们' },
  { key: 'contact', label: '联系我们', disabled: true },
]

export function States() {
  const [selected, setSelected] = useState('home')
  const [selectedV, setSelectedV] = useState('home')
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">水平菜单（含二级菜单）</span>
        <Menu
          items={items}
          selectedKey={selected}
          onSelect={setSelected}
          mode="horizontal"
          defaultOpenKeys={['products']}
        />
        <span className="text-caption text-text-secondary">当前选中：{selected}</span>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">垂直菜单（含二级菜单）</span>
        <div className="w-56">
          <Menu
            items={items}
            selectedKey={selectedV}
            onSelect={setSelectedV}
            mode="vertical"
            defaultOpenKeys={['solutions']}
          />
        </div>
        <span className="text-caption text-text-secondary">当前选中：{selectedV}</span>
      </div>
    </div>
  )
}
