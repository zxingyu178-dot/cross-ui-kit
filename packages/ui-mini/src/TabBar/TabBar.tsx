/**
 * TabBar 底部标签栏（mini：小程序 / 移动 H5）。
 */
import { useState } from 'react'
import { Text, View } from '@tarojs/components'
import type { TabBarProps, TabBarItem } from './TabBar.types'
import './TabBar.scss'

export function TabBar({
  items,
  activeKey,
  defaultActiveKey,
  onChange,
  className = '',
}: TabBarProps) {
  const [inner, setInner] = useState(defaultActiveKey ?? items[0]?.key)
  const current = activeKey ?? inner

  const select = (key: string) => {
    if (activeKey === undefined) setInner(key)
    onChange?.(key)
  }

  return (
    <View className={`kit-tabbar ${className}`.trim()}>
      {items.map((item: TabBarItem) => {
        const active = item.key === current
        return (
          <View
            key={item.key}
            className={`kit-tabbar__item ${active ? 'kit-tabbar__item--active' : ''}`.trim()}
            {...(active ? {} : { onClick: () => select(item.key) })}
          >
            {item.icon ? <Text className="kit-tabbar__icon">{item.icon}</Text> : null}
            <Text className="kit-tabbar__label">{item.label}</Text>
            {item.badge ? <Text className="kit-tabbar__badge">{item.badge}</Text> : null}
          </View>
        )
      })}
    </View>
  )
}
