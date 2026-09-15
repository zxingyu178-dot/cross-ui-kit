/**
 * Avatar 头像（mini：小程序 / 移动 H5）—— 图片 / 文字首字 / 自定义内容三态。
 * 图片加载失败（Image onError）自动回退到 name 首字；视觉值在 Avatar.scss 全 token 化。
 */
import { useState } from 'react'
import type { ReactNode } from 'react'
import { Image, Text, View } from '@tarojs/components'
import { cn } from '@kit/core'
import type { AvatarProps } from './Avatar.types'
import './Avatar.scss'

function getInitial(name?: string): string {
  if (!name) return ''
  return name.trim().slice(0, 1).toUpperCase()
}

export function Avatar({
  src,
  name,
  size = 'md',
  shape = 'circle',
  className,
  children,
}: AvatarProps) {
  const [failed, setFailed] = useState(false)
  const showImage = src !== undefined && src !== '' && !failed

  return (
    <View
      className={cn(
        'kit-avatar',
        `kit-avatar--${size}`,
        shape === 'square' && 'kit-avatar--square',
        className,
      )}
    >
      {children !== undefined ? (
        (children as ReactNode)
      ) : showImage ? (
        <Image
          className="kit-avatar__img"
          src={src}
          mode="aspectFill"
          onError={() => setFailed(true)}
        />
      ) : (
        <Text className="kit-avatar__text">{getInitial(name)}</Text>
      )}
    </View>
  )
}
