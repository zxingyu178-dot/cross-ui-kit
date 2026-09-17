/** Menu 示例：导航菜单（mini）。 */
import { useState } from 'react'
import { Text, View } from '@tarojs/components'
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
    ],
  },
  { key: 'about', label: '关于我们' },
  { key: 'contact', label: '联系我们', disabled: true },
]

export function States() {
  const [selected, setSelected] = useState('home')
  return (
    <View style={{ padding: 12 }}>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>水平菜单</Text>
        <Menu
          items={items}
          selectedKey={selected}
          onSelect={setSelected}
          mode="horizontal"
          defaultOpenKeys={['products']}
        />
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-secondary)' }}>
          当前选中：{selected}
        </Text>
      </View>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>垂直菜单</Text>
        <View style={{ width: 200 }}>
          <Menu items={items} selectedKey={selected} onSelect={setSelected} mode="vertical" />
        </View>
      </View>
    </View>
  )
}
