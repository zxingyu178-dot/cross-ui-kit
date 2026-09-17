/**
 * Anchor 锚点（mini：小程序 / 移动 H5）—— View+Text 自建，
 * 侧边锚点导航，点击切换激活项。
 */
import { Text, View } from '@tarojs/components'
import { useState } from 'react'
import type { AnchorItem, AnchorProps } from './Anchor.types'
import './Anchor.scss'

export function Anchor({ items = [], activeKey, onChange, onClick, className = '' }: AnchorProps) {
  const [innerActive, setInnerActive] = useState<string>(items[0]?.key ?? '')
  const currentActive = activeKey ?? innerActive

  const handleClick = (item: AnchorItem) => {
    setInnerActive(item.key)
    onChange?.(item.key)
    onClick?.(item.key, item.href)
  }

  return (
    <View className={`kit-anchor ${className}`.trim()}>
      {items.map((item) => (
        <View
          key={item.key}
          className={`kit-anchor__item ${currentActive === item.key ? 'kit-anchor__item--active' : ''}`}
          onClick={() => handleClick(item)}
        >
          <Text
            className={`kit-anchor__title ${currentActive === item.key ? 'kit-anchor__title--active' : ''}`}
          >
            {item.title}
          </Text>
        </View>
      ))}
    </View>
  )
}
