/**
 * Divider 分割线（mini：小程序 / 移动 H5）—— View+Text 自建，水平/垂直，三线型，支持文字。
 * 颜色/字号全走 --kit-* token，与 web/native 对齐。
 */
import { Text, View } from '@tarojs/components'
import type { DividerProps } from './Divider.types'
import './Divider.scss'

export function Divider({
  orientation = 'horizontal',
  type = 'solid',
  text,
  textPosition = 'center',
  className = '',
}: DividerProps) {
  if (orientation === 'vertical') {
    return (
      <View
        className={`kit-divider kit-divider--vertical kit-divider--${type} ${className}`.trim()}
      />
    )
  }

  if (text) {
    return (
      <View
        className={`kit-divider kit-divider--text kit-divider--text-${textPosition} ${className}`.trim()}
      >
        <View className={`kit-divider__line kit-divider__line--${type} kit-divider__line--left`} />
        <Text className="kit-divider__text">{text}</Text>
        <View className={`kit-divider__line kit-divider__line--${type} kit-divider__line--right`} />
      </View>
    )
  }

  return (
    <View
      className={`kit-divider kit-divider--horizontal kit-divider--${type} ${className}`.trim()}
    />
  )
}
