/**
 * Skeleton 骨架屏（mini：小程序 / 移动 H5）—— 内容加载中的占位灰块，服务四态之 loading。
 * 三形态 rect/circle/text；底色 var(--kit-color-bg-active)，呼吸脉冲在 Skeleton.scss，
 * 默认尺寸取 spacing/字号档位（常量集中、注释来源），布局宽高用 width/height 覆盖。
 */
import type { CSSProperties } from 'react'
import { View } from '@tarojs/components'
import { cn } from '@kit/core'
import type { SkeletonProps, SkeletonSize } from './Skeleton.types'
import './Skeleton.scss'

// circle 直径档：sm=icon-lg(24)、md=control-height-md(40)、lg=头像档(56)
const CIRCLE: Record<SkeletonSize, number> = { sm: 24, md: 40, lg: 56 }
// text 行高=caption(12)、rect 默认高=spacing-4(16)
const TEXT_LINE_H = 12
const RECT_H = 16

function toSize(v: string | number | undefined): string | undefined {
  if (v === undefined) return undefined
  return typeof v === 'number' ? `${v}px` : v
}

export function Skeleton({
  variant = 'rect',
  size = 'md',
  lines = 3,
  width,
  height,
  className,
}: SkeletonProps) {
  if (variant === 'circle') {
    const d = toSize(width) ?? toSize(height) ?? `${CIRCLE[size]}px`
    return (
      <View
        className={cn('kit-skeleton kit-skeleton--circle', className)}
        style={{ width: d, height: d }}
      />
    )
  }

  if (variant === 'text') {
    const count = lines > 0 ? lines : 1
    return (
      <View
        className={cn('kit-skeleton-text', className)}
        {...(width !== undefined ? { style: { width: toSize(width) } } : {})}
      >
        {Array.from({ length: count }).map((_, i) => {
          const isLast = i === count - 1
          return (
            <View
              key={i}
              className="kit-skeleton kit-skeleton--line"
              style={{
                height: toSize(height) ?? TEXT_LINE_H,
                width: isLast && count > 1 ? '60%' : '100%',
              }}
            />
          )
        })}
      </View>
    )
  }

  const style: CSSProperties = {
    height: toSize(height) ?? RECT_H,
    ...(width !== undefined ? { width: toSize(width) } : {}),
  }
  return <View className={cn('kit-skeleton kit-skeleton--rect', className)} style={style} />
}
