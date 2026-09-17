/**
 * Affix 固钉（native：iOS / Android）—— 固定定位容器，
 * offsetTop/offsetBottom 控制位置。
 */
import { YStack } from 'tamagui'
import type { AffixProps } from './Affix.types'

export function Affix({ offsetTop, offsetBottom, children, style }: AffixProps) {
  return (
    <YStack position="absolute" top={offsetTop} bottom={offsetBottom} zIndex={1000} style={style}>
      {children}
    </YStack>
  )
}
