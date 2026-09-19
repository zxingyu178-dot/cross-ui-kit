/**
 * NavBar 顶部导航栏（mini：小程序 / 移动 H5）。
 */
import { Text, View } from '@tarojs/components'
import type { NavBarProps } from './NavBar.types'
import './NavBar.scss'

export function NavBar({
  title,
  left,
  right,
  onBack,
  showBack = true,
  className = '',
}: NavBarProps) {
  return (
    <View className={`kit-navbar ${className}`.trim()}>
      <View className="kit-navbar__side">
        {left !== undefined ? (
          left
        ) : showBack ? (
          <View className="kit-navbar__back" {...(onBack ? { onClick: onBack } : {})}>
            <Text className="kit-navbar__back-icon">‹</Text>
          </View>
        ) : null}
      </View>
      <View className="kit-navbar__title">
        <Text className="kit-navbar__title-text">{title}</Text>
      </View>
      <View className="kit-navbar__side kit-navbar__side--right">{right}</View>
    </View>
  )
}
