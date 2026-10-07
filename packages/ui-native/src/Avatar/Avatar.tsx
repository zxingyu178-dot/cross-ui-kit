/**
 * Avatar 头像（native：iOS / Android）—— 图片 / 文字首字 / 自定义内容三态。
 * 图片加载失败（Image onError）自动回退到 name 首字；尺寸/颜色只引用 token 刻度。
 */
import { useState } from 'react'
import type { ReactNode } from 'react'
import { Image, Stack, Text } from 'tamagui'
import type { AvatarProps, AvatarSize } from './Avatar.types'

const SIZE_BOX: Record<AvatarSize, '$8' | '$10' | '$12'> = { sm: '$8', md: '$10', lg: '$12' }
const SIZE_FONT: Record<AvatarSize, '$caption' | '$bodyMd' | '$titleSm'> = {
  sm: '$caption',
  md: '$bodyMd',
  lg: '$titleSm',
}

function getInitial(name?: string): string {
  if (!name) return ''
  return name.trim().slice(0, 1).toUpperCase()
}

export function Avatar({ src, name, size = 'md', shape = 'circle', children }: AvatarProps) {
  const [failed, setFailed] = useState(false)
  const showImage = src !== undefined && src !== '' && !failed

  return (
    <Stack
      width={SIZE_BOX[size]}
      height={SIZE_BOX[size]}
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
      flexShrink={0}
      backgroundColor="$bgActive"
      borderRadius={shape === 'circle' ? 999 : '$md'}
    >
      {children !== undefined ? (
        (children as ReactNode)
      ) : showImage ? (
        <Image source={{ uri: src }} width="100%" height="100%" onError={() => setFailed(true)} />
      ) : (
        <Text
          fontSize={SIZE_FONT[size]}
          fontWeight={500}
          color="$textSecondary"
          accessibilityLabel={name}
        >
          {getInitial(name)}
        </Text>
      )}
    </Stack>
  )
}
