/**
 * Image 图片（mini：小程序 / 移动 H5）—— 基于 Taro Image 组件封装，
 * 支持加载/错误状态、占位、圆角、填充方式。
 */
import { Image as TaroImage, View } from '@tarojs/components'
import { useState } from 'react'
import type { ImageFit, ImageProps } from './Image.types'
import './Image.scss'

const fitToMode: Record<
  ImageFit,
  'scaleToFill' | 'aspectFit' | 'aspectFill' | 'widthFix' | 'center'
> = {
  cover: 'aspectFill',
  contain: 'aspectFit',
  fill: 'widthFix',
  stretch: 'scaleToFill',
  center: 'center',
}

export function Image({
  src,
  alt: _alt = '',
  width,
  height,
  fit = 'cover',
  radius,
  placeholder,
  fallback,
  className = '',
}: ImageProps) {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading')

  return (
    <View
      className={`kit-image ${className}`.trim()}
      style={{ width, height, borderRadius: radius }}
    >
      {status === 'loading' && placeholder ? (
        <View className="kit-image__placeholder">{placeholder}</View>
      ) : null}
      {status === 'error' && fallback ? (
        <View className="kit-image__placeholder">{fallback}</View>
      ) : null}
      {status !== 'error' ? (
        <TaroImage
          className={`kit-image__img ${status === 'loading' ? 'kit-image__img--loading' : ''}`}
          src={src}
          mode={fitToMode[fit]}
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
        />
      ) : null}
    </View>
  )
}
