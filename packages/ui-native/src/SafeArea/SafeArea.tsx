/**
 * SafeArea 安全区（native：iOS / Android）—— 简化实现：上下 padding。
 */
import { YStack } from 'tamagui'
import type { SafeAreaProps } from './SafeArea.types'

export function SafeArea({ children, position = 'bottom', style }: SafeAreaProps) {
  const padding =
    position === 'top'
      ? { paddingTop: 16 }
      : position === 'bottom'
        ? { paddingBottom: 16 }
        : { paddingTop: 16, paddingBottom: 16 }
  return (
    <YStack width="100%" style={{ ...padding, ...(style as object) }}>
      {children}
    </YStack>
  )
}
