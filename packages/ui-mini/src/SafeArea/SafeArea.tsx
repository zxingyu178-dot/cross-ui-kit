/**
 * SafeArea 安全区（mini：小程序 / 移动 H5）。
 */
import { View } from '@tarojs/components'
import type { SafeAreaProps } from './SafeArea.types'
import './SafeArea.scss'

export function SafeArea({ children, position = 'bottom', className = '' }: SafeAreaProps) {
  return (
    <View className={`kit-safe-area kit-safe-area--${position} ${className}`.trim()}>
      {children}
    </View>
  )
}
