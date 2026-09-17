/**
 * CardGroup 卡片组（mini：小程序 / 移动 H5）—— 多个 View 网格排列。
 */
import { Image, Text, View } from '@tarojs/components'
import type { CardGroupProps } from './CardGroup.types'
import './CardGroup.scss'

export function CardGroup({
  items = [],
  columns = 2,
  gutter = 12,
  className = '',
}: CardGroupProps) {
  return (
    <View
      className={`kit-card-group ${className}`.trim()}
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: gutter,
      }}
    >
      {items.map((item) => (
        <View
          key={item.key}
          className="kit-card-group__item"
          style={{
            width: `calc(${(100 / columns).toFixed(2)}% - ${(gutter * (columns - 1)) / columns}px)`,
          }}
        >
          {item.cover ? (
            <Image src={item.cover} className="kit-card-group__cover" mode="aspectFill" />
          ) : null}
          <View className="kit-card-group__body">
            {item.title ? <Text className="kit-card-group__title">{item.title}</Text> : null}
            {item.content ? <Text className="kit-card-group__content">{item.content}</Text> : null}
          </View>
        </View>
      ))}
    </View>
  )
}
