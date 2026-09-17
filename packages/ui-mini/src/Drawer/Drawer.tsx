/**
 * Drawer 抽屉（mini：小程序 / 移动 H5）—— View+Text 自建，
 * 遮罩层 + 抽屉内容，四方向，条件渲染，点击遮罩关闭。
 */
import { Text, View } from '@tarojs/components'
import type { DrawerProps } from './Drawer.types'
import './Drawer.scss'

export function Drawer({
  open = false,
  onOpenChange,
  title,
  children,
  placement = 'right',
  size = 360,
  className = '',
}: DrawerProps) {
  if (!open) return null

  const isHorizontal = placement === 'left' || placement === 'right'

  return (
    <View className={`kit-drawer ${className}`.trim()}>
      <View className="kit-drawer__mask" onClick={() => onOpenChange?.(false)} />
      <View
        className={`kit-drawer__content kit-drawer__content--${placement}`}
        style={isHorizontal ? { width: size } : { height: size }}
      >
        {title ? (
          <View className="kit-drawer__header">
            <Text className="kit-drawer__title">{title}</Text>
            <Text className="kit-drawer__close" onClick={() => onOpenChange?.(false)}>
              ✕
            </Text>
          </View>
        ) : (
          <Text
            className="kit-drawer__close kit-drawer__close--absolute"
            onClick={() => onOpenChange?.(false)}
          >
            ✕
          </Text>
        )}
        <View className="kit-drawer__body">{children}</View>
      </View>
    </View>
  )
}
