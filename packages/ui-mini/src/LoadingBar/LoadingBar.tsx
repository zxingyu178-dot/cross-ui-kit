/**
 * LoadingBar 顶部进度条（mini：小程序 / 移动 H5）。
 */
import { View } from '@tarojs/components'
import type { LoadingBarProps } from './LoadingBar.types'
import './LoadingBar.scss'

export function LoadingBar({
  progress = -1,
  visible = true,
  color,
  className = '',
}: LoadingBarProps) {
  if (!visible) return null
  const indeterminate = progress < 0 || progress > 100
  return (
    <View className={`kit-loadingbar ${className}`.trim()}>
      <View
        className={`kit-loadingbar__inner ${indeterminate ? 'kit-loadingbar__inner--indeterminate' : ''}`.trim()}
        style={{
          width: indeterminate ? '30%' : `${progress}%`,
          ...(color ? { backgroundColor: color } : {}),
        }}
      />
    </View>
  )
}
