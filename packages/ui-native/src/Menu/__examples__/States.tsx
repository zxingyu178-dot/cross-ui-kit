/** Menu 示例：导航菜单（native）。 */
import { useState } from 'react'
import { Text, YStack } from 'tamagui'
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
    <YStack padding={12} gap={24}>
      <YStack gap={8}>
        <Text fontSize={12} color="$textTertiary">
          水平菜单
        </Text>
        <Menu
          items={items}
          selectedKey={selected}
          onSelect={setSelected}
          mode="horizontal"
          defaultOpenKeys={['products']}
        />
        <Text fontSize={12} color="$textSecondary">
          当前选中：{selected}
        </Text>
      </YStack>
      <YStack gap={8}>
        <Text fontSize={12} color="$textTertiary">
          垂直菜单
        </Text>
        <YStack width={200}>
          <Menu items={items} selectedKey={selected} onSelect={setSelected} mode="vertical" />
        </YStack>
      </YStack>
    </YStack>
  )
}
