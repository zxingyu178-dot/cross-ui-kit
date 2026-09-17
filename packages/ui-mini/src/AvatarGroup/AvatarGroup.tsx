/**
 * AvatarGroup 头像组（mini：小程序 / 移动 H5）—— 多个 View 堆叠显示，超出显示 +N。
 */
import { Image, Text, View } from '@tarojs/components'
import type { AvatarGroupProps } from './AvatarGroup.types'
import './AvatarGroup.scss'

export function AvatarGroup({
  items = [],
  max = 5,
  size = 32,
  shape = 'circle',
  className = '',
}: AvatarGroupProps) {
  const displayItems = items.slice(0, max)
  const remaining = items.length - max

  return (
    <View className={`kit-avatar-group kit-avatar-group--${shape} ${className}`.trim()}>
      {displayItems.map((item, index) => (
        <View
          key={item.key}
          className="kit-avatar-group__item"
          style={{
            width: size,
            height: size,
            backgroundColor: item.color ?? 'var(--kit-color-primary-default)',
            marginLeft: index > 0 ? -size / 4 : 0,
            zIndex: displayItems.length - index,
          }}
        >
          {item.src ? (
            <Image src={item.src} className="kit-avatar-group__image" />
          ) : (
            <Text className="kit-avatar-group__text" style={{ fontSize: size * 0.4 }}>
              {item.text ?? item.key.charAt(0).toUpperCase()}
            </Text>
          )}
        </View>
      ))}
      {remaining > 0 ? (
        <View
          className="kit-avatar-group__item kit-avatar-group__item--more"
          style={{
            width: size,
            height: size,
            marginLeft: -size / 4,
            zIndex: 0,
          }}
        >
          <Text className="kit-avatar-group__more-text" style={{ fontSize: size * 0.35 }}>
            +{remaining}
          </Text>
        </View>
      ) : null}
    </View>
  )
}
