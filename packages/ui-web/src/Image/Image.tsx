/**
 * Image 图片（web）—— img 标签封装，支持加载/错误状态、占位、圆角、填充方式。
 */
import { useState } from 'react'
import { cn } from '@kit/core'
import type { ImageFit, ImageProps } from './Image.types'

const fitToObject: Record<ImageFit, string> = {
  cover: 'object-cover',
  contain: 'object-contain',
  fill: 'object-fill',
  stretch: 'object-fill',
  center: 'object-center',
}

export function Image({
  src,
  alt = '',
  width,
  height,
  fit = 'cover',
  radius,
  placeholder,
  fallback,
  className,
}: ImageProps) {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading')

  return (
    <div
      className={cn('relative overflow-hidden bg-bg-muted', className)}
      style={{ width, height, borderRadius: radius }}
    >
      {status === 'loading' && placeholder ? (
        <div className="absolute inset-0 flex items-center justify-center">{placeholder}</div>
      ) : null}
      {status === 'error' && fallback ? (
        <div className="absolute inset-0 flex items-center justify-center">{fallback}</div>
      ) : null}
      {status !== 'error' ? (
        <img
          src={src}
          alt={alt}
          className={cn(
            'h-full w-full',
            fitToObject[fit],
            status === 'loading' ? 'opacity-0' : 'opacity-100',
          )}
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
        />
      ) : null}
    </div>
  )
}
