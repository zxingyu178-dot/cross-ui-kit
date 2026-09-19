/**
 * Marquee 跑马灯（native：iOS / Android）—— 简化实现：横向 Text 文本。
 */
import { Text, XStack } from 'tamagui'
import type { MarqueeProps } from './Marquee.types'

export function Marquee({ children, reverse = false, style }: MarqueeProps) {
  return (
    <XStack
      width="100%"
      overflow="hidden"
      justifyContent={reverse ? 'flex-end' : 'flex-start'}
      style={style}
    >
      <Text fontSize={13} color="$textSecondary" numberOfLines={1}>
        {children}
      </Text>
    </XStack>
  )
}
