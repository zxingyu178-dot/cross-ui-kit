/**
 * Space 间距（mini：小程序 / 移动 H5）—— View flex 容器，gap 控制间距，
 * 支持水平/垂直/对齐/换行。
 */
import { View } from '@tarojs/components'
import type { CSSProperties } from 'react'
import type { SpaceAlign, SpaceProps, SpaceSize } from './Space.types'
import './Space.scss'

const sizeMap: Record<Exclude<SpaceSize, number>, number> = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
}

const alignMap: Record<SpaceAlign, string> = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  baseline: 'baseline',
}

export function Space({
  size = 'md',
  direction = 'horizontal',
  align,
  wrap = false,
  children,
  className = '',
}: SpaceProps) {
  const gap = typeof size === 'number' ? size : sizeMap[size]

  const style: CSSProperties = {
    display: 'flex',
    flexDirection: direction === 'horizontal' ? 'row' : 'column',
    gap: `${gap}px`,
    flexWrap: wrap ? 'wrap' : 'nowrap',
    ...(align ? { alignItems: alignMap[align] } : {}),
  }

  return (
    <View className={`kit-space ${className}`.trim()} style={style}>
      {children}
    </View>
  )
}
