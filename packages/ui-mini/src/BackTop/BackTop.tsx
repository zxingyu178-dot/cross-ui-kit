/**
 * BackTop 回到顶部（mini：小程序 / 移动 H5）—— View 固定定位按钮，
 * 点击触发回调（滚动到顶部由使用方处理）。
 */
import { View } from '@tarojs/components'
import type { BackTopProps } from './BackTop.types'
import './BackTop.scss'

export function BackTop({ onClick, duration: _duration = 300, className = '' }: BackTopProps) {
  const handleClick = () => {
    onClick?.()
  }

  return (
    <View className={`kit-backtop ${className}`.trim()} onClick={handleClick}>
      <View className="kit-backtop__icon">↑</View>
    </View>
  )
}
