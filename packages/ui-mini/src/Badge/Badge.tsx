/**
 * Badge 徽标/标签（mini：小程序 / 移动 H5）—— View+Text 自建胶囊，不依赖 NutUI，
 * 颜色/字号/圆角全走 --kit-* token，与 web/native 三形态（soft/solid/outline）对齐。
 */
import { Text, View } from '@tarojs/components'
import type { BadgeProps } from './Badge.types'
import './Badge.scss'

export function Badge({
  children,
  variant = 'neutral',
  tone = 'soft',
  size = 'md',
  className = '',
  onClick,
}: BadgeProps) {
  const cls = [
    'kit-badge',
    `kit-badge--${tone}`,
    `kit-badge--${tone}-${variant}`,
    `kit-badge--${size}`,
    onClick ? 'kit-badge--clickable' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <View className={cls} {...(onClick ? { onClick } : {})}>
      <Text className="kit-badge__text">{children}</Text>
    </View>
  )
}
