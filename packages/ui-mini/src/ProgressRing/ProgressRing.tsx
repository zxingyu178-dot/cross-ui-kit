/**
 * ProgressRing 环形进度（mini：小程序 / 移动 H5）。
 */
import { Text, View } from '@tarojs/components'
import type { ProgressRingProps } from './ProgressRing.types'
import './ProgressRing.scss'

const toneClass: Record<NonNullable<ProgressRingProps['tone']>, string> = {
  primary: 'kit-ring--primary',
  success: 'kit-ring--success',
  warning: 'kit-ring--warning',
  danger: 'kit-ring--danger',
}

export function ProgressRing({
  value,
  size = 80,
  strokeWidth = 8,
  children,
  tone = 'primary',
  className = '',
}: ProgressRingProps) {
  const clamped = Math.max(0, Math.min(100, value))
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference * (1 - clamped / 100)
  const c = size / 2

  return (
    <View
      className={`kit-ring ${toneClass[tone]} ${className}`.trim()}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle
          cx={c}
          cy={c}
          r={radius}
          fill="none"
          stroke="var(--kit-color-bg-tertiary)"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={c}
          cy={c}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="kit-ring__arc"
        />
      </svg>
      {children !== undefined ? (
        <View className="kit-ring__center">
          <Text className="kit-ring__text">{children}</Text>
        </View>
      ) : null}
    </View>
  )
}
