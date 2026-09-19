/**
 * LoadingBar 顶部进度条（native：iOS / Android）。
 */
import { YStack } from 'tamagui'
import type { LoadingBarProps } from './LoadingBar.types'

export function LoadingBar({ progress = -1, visible = true, color, style }: LoadingBarProps) {
  if (!visible) return null
  const indeterminate = progress < 0 || progress > 100
  return (
    <YStack
      position="absolute"
      top={0}
      left={0}
      right={0}
      height={2}
      backgroundColor="$primaryBg"
      zIndex={999}
      style={style}
    >
      <YStack
        height="100%"
        width={indeterminate ? '30%' : `${progress}%`}
        backgroundColor={color ?? '$primaryDefault'}
      />
    </YStack>
  )
}
