/**
 * SafeArea 安全区（web）—— CSS env() 适配刘海屏。
 */
import { cn } from '@kit/core'
import type { SafeAreaProps } from './SafeArea.types'

export function SafeArea({ children, position = 'bottom', className }: SafeAreaProps) {
  const padding =
    position === 'top'
      ? { paddingTop: 'env(safe-area-inset-top)' }
      : position === 'bottom'
        ? { paddingBottom: 'env(safe-area-inset-bottom)' }
        : {
            paddingTop: 'env(safe-area-inset-top)',
            paddingBottom: 'env(safe-area-inset-bottom)',
          }
  return (
    <div className={cn('w-full', className)} style={padding}>
      {children}
    </div>
  )
}
