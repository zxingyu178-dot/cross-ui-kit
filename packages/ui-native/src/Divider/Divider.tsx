/**
 * Divider 分割线（native：iOS / Android）—— Tamagui XStack/YStack+Text 自建，
 * 水平/垂直，三线型，支持文字。颜色只引用 $borderDefault token。
 */
import { Text, XStack, YStack } from 'tamagui'
import type { DividerProps, DividerType } from './Divider.types'

const BORDER_STYLE: Record<DividerType, 'solid' | 'dashed' | 'dotted'> = {
  solid: 'solid',
  dashed: 'dashed',
  dotted: 'dotted',
}

export function Divider({
  orientation = 'horizontal',
  type = 'solid',
  text,
  textPosition = 'center',
  style,
}: DividerProps) {
  const borderStyle = BORDER_STYLE[type]

  if (orientation === 'vertical') {
    return (
      <YStack
        width={0}
        alignSelf="stretch"
        borderLeftWidth={1}
        borderLeftColor="$borderDefault"
        borderStyle={borderStyle}
        style={style}
      />
    )
  }

  if (text) {
    const leftFlex = textPosition === 'left' ? 0 : 1
    const rightFlex = textPosition === 'right' ? 0 : 1
    return (
      <XStack alignItems="center" gap={12} width="100%" style={style}>
        <YStack
          height={0}
          flex={leftFlex}
          borderTopWidth={1}
          borderTopColor="$borderDefault"
          borderStyle={borderStyle}
        />
        <Text fontSize="$bodySm" color="$textTertiary" flexShrink={0}>
          {text}
        </Text>
        <YStack
          height={0}
          flex={rightFlex}
          borderTopWidth={1}
          borderTopColor="$borderDefault"
          borderStyle={borderStyle}
        />
      </XStack>
    )
  }

  return (
    <YStack
      height={0}
      width="100%"
      borderTopWidth={1}
      borderTopColor="$borderDefault"
      borderStyle={borderStyle}
      style={style}
    />
  )
}
