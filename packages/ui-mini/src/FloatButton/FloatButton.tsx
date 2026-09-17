/**
 * FloatButton 悬浮按钮（mini：小程序 / 移动 H5）—— View+Text 自建，
 * fixed 定位按钮，支持图标、形状。
 */
import { Text, View } from '@tarojs/components'
import type { FloatButtonProps } from './FloatButton.types'
import './FloatButton.scss'

export function FloatButton({
  icon,
  onClick,
  type = 'primary',
  shape = 'circle',
  bottom = 24,
  right = 24,
  className = '',
}: FloatButtonProps) {
  return (
    <View
      className={`kit-float-button ${className}`.trim()}
      style={{ bottom: `${bottom}px`, right: `${right}px` }}
      {...(onClick !== undefined ? { onClick } : {})}
    >
      <View
        className={`kit-float-button__btn kit-float-button__btn--${type} kit-float-button__btn--${shape}`}
      >
        {icon ?? <Text className="kit-float-button__icon">+</Text>}
      </View>
    </View>
  )
}
