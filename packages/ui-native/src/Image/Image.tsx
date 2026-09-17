/**
 * Image 图片（native：iOS / Android）—— 基于 Tamagui Image 组件封装，
 * 支持加载/错误状态、占位、圆角、填充方式。
 */
import { useState } from 'react'
import { Image as TamaguiImage, YStack } from 'tamagui'
import type { ImageFit, ImageProps } from './Image.types'

const fitToResizeMode: Record<ImageFit, 'cover' | 'contain' | 'stretch' | 'center'> = {
  cover: 'cover',
  contain: 'contain',
  fill: 'stretch',
  stretch: 'stretch',
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
  style,
}: ImageProps) {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading')

  return (
    <YStack
      position="relative"
      overflow="hidden"
      backgroundColor="$bgMuted"
      width={width}
      height={height}
      borderRadius={radius}
      style={style}
    >
      {status === 'loading' && placeholder ? (
        <YStack
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          alignItems="center"
          justifyContent="center"
        >
          {placeholder}
        </YStack>
      ) : null}
      {status === 'error' && fallback ? (
        <YStack
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          alignItems="center"
          justifyContent="center"
        >
          {fallback}
        </YStack>
      ) : null}
      {status !== 'error' ? (
        <TamaguiImage
          source={{ uri: src }}
          resizeMode={fitToResizeMode[fit]}
          style={{ width: '100%', height: '100%', opacity: status === 'loading' ? 0 : 1 }}
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
        />
      ) : null}
    </YStack>
  )
}
