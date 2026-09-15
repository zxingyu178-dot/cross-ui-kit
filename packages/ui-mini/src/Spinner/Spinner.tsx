/**
 * Spinner 加载指示器（mini：小程序 / 移动 H5）—— 不确定时长的加载旋转圈。
 * Taro View 自建标准 border 旋转圈，旋转动画/尺寸/颜色在 Spinner.scss 全量 token 化。
 */
import { View } from '@tarojs/components'
import { cn } from '@kit/core'
import type { SpinnerProps, SpinnerSize, SpinnerTone } from './Spinner.types'
import './Spinner.scss'

const SIZE: Record<SpinnerSize, string> = {
  sm: 'kit-spinner--sm',
  md: 'kit-spinner--md',
  lg: 'kit-spinner--lg',
}

const TONE: Record<SpinnerTone, string> = {
  primary: 'kit-spinner--primary',
  muted: 'kit-spinner--muted',
  inverse: 'kit-spinner--inverse',
}

export function Spinner({
  size = 'md',
  tone = 'primary',
  className,
  accessibilityLabel,
}: SpinnerProps) {
  return (
    <View
      className={cn('kit-spinner', SIZE[size], TONE[tone], className)}
      {...(accessibilityLabel !== undefined ? { 'aria-label': accessibilityLabel } : {})}
    />
  )
}
