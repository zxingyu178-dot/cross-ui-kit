/**
 * Skeleton 骨架屏（web）—— 内容加载中的占位灰块，服务四态之 loading。
 * 三种形态：rect（矩形块）、circle（圆形头像）、text（多行文本，末行收窄）。
 * 底色统一 bg-bg-active、Tailwind animate-pulse 呼吸；颜色/圆角走 token 语义类，
 * 默认尺寸取 Tailwind 间距刻度（= spacing token），布局宽高用 className 覆盖。
 */
import type { CSSProperties } from 'react'
import { cn } from '@kit/core'
import type { SkeletonProps, SkeletonSize } from './Skeleton.types'

// circle 直径档（Tailwind 刻度 = spacing）：sm 24 / md 40 / lg 56
const CIRCLE_SIZE: Record<SkeletonSize, string> = {
  sm: 'size-6',
  md: 'size-10',
  lg: 'size-14',
}

// 文本行高 12（caption 档）、行间距 8（spacing-2）、矩形默认高 16（spacing-4）
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
  id,
}: SkeletonProps) {
  const base = 'animate-pulse bg-bg-active'

  if (variant === 'circle') {
    const dim = toSize(width) ?? toSize(height)
    const style: CSSProperties | undefined = dim ? { width: dim, height: dim } : undefined
    return (
      <div
        {...(id !== undefined ? { id } : {})}
        className={cn(base, 'shrink-0 rounded-full', CIRCLE_SIZE[size], className)}
        style={style}
        aria-hidden
      />
    )
  }

  if (variant === 'text') {
    const count = lines > 0 ? lines : 1
    return (
      <div
        {...(id !== undefined ? { id } : {})}
        className={cn('flex w-full flex-col gap-2', className)}
        style={width !== undefined ? { width: toSize(width) } : undefined}
        aria-hidden
      >
        {Array.from({ length: count }).map((_, i) => {
          const isLast = i === count - 1
          return (
            <div
              key={i}
              className={cn(base, 'rounded-full')}
              style={{
                height: toSize(height) ?? TEXT_LINE_H,
                width: isLast && count > 1 ? '60%' : '100%',
              }}
            />
          )
        })}
      </div>
    )
  }

  // rect
  const style: CSSProperties = {
    height: toSize(height) ?? RECT_H,
    ...(width !== undefined ? { width: toSize(width) } : {}),
  }
  return (
    <div
      {...(id !== undefined ? { id } : {})}
      className={cn(base, 'w-full rounded-md', className)}
      style={style}
      aria-hidden
    />
  )
}
