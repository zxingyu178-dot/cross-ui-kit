/**
 * Avatar 头像（web）—— 图片 / 文字首字 / 自定义内容三态，尺寸与形状受控。
 * 图片加载失败自动回退到 name 首字；视觉值全部走 token 刻度。
 */
import { useState } from 'react'
import { cn } from '@kit/core'
import type { AvatarProps, AvatarSize } from './Avatar.types'

const SIZE_CLASS: Record<AvatarSize, { box: string; text: string }> = {
  sm: { box: 'h-8 w-8', text: 'text-caption' },
  md: { box: 'h-10 w-10', text: 'text-body-md' },
  lg: { box: 'h-12 w-12', text: 'text-title-sm' },
}

function getInitial(name?: string): string {
  if (!name) return ''
  return name.trim().slice(0, 1).toUpperCase()
}

export function Avatar({
  src,
  name,
  size = 'md',
  shape = 'circle',
  alt,
  className,
  children,
}: AvatarProps) {
  const [failed, setFailed] = useState(false)
  const showImage = src !== undefined && src !== '' && !failed
  const s = SIZE_CLASS[size]

  return (
    <span
      className={cn(
        'inline-flex shrink-0 select-none items-center justify-center overflow-hidden bg-bg-active text-text-secondary',
        s.box,
        shape === 'circle' ? 'rounded-full' : 'rounded-md',
        className,
      )}
    >
      {children !== undefined ? (
        children
      ) : showImage ? (
        <img
          src={src}
          alt={alt ?? name ?? ''}
          className="h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className={cn('font-medium leading-none', s.text)} aria-label={name}>
          {getInitial(name)}
        </span>
      )}
    </span>
  )
}
