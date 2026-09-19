/**
 * Cell 列表项（mini：小程序 / 移动 H5）。
 */
import { Text, View } from '@tarojs/components'
import type { CellProps } from './Cell.types'
import './Cell.scss'

export function Cell({
  title,
  description,
  icon,
  right,
  onClick,
  clickable = false,
  className = '',
}: CellProps) {
  const clickableNow = clickable || onClick !== undefined
  return (
    <View className={`kit-cell ${className}`.trim()} {...(clickableNow ? { onClick } : {})}>
      {icon ? <View className="kit-cell__icon">{icon}</View> : null}
      <View className="kit-cell__main">
        {title ? <Text className="kit-cell__title">{title}</Text> : null}
        {description ? <Text className="kit-cell__desc">{description}</Text> : null}
      </View>
      <View className="kit-cell__right">
        {right ? <Text className="kit-cell__right-text">{right}</Text> : null}
        {clickableNow && right === undefined ? <Text className="kit-cell__arrow">›</Text> : null}
      </View>
    </View>
  )
}
