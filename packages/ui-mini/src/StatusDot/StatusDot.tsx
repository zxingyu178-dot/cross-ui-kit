/**
 * StatusDot 状态点（mini：小程序 / 移动 H5）。
 */
import { Text, View } from '@tarojs/components'
import type { StatusDotProps } from './StatusDot.types'
import './StatusDot.scss'

const toneClass: Record<string, string> = {
  success: 'kit-dot--success',
  warning: 'kit-dot--warning',
  danger: 'kit-dot--danger',
  info: 'kit-dot--info',
  neutral: 'kit-dot--neutral',
  primary: 'kit-dot--primary',
}

export function StatusDot({
  tone = 'neutral',
  size = 16,
  outlined = false,
  text,
  className = '',
}: StatusDotProps) {
  return (
    <View className={`kit-dot ${className}`.trim()}>
      <View
        className={`kit-dot__circle ${toneClass[tone]} ${outlined ? 'kit-dot--outlined' : ''}`.trim()}
        style={{ width: size, height: size }}
      />
      {text ? <Text className="kit-dot__text">{text}</Text> : null}
    </View>
  )
}
