/**
 * LoadingBar 顶部进度条（web）。
 */
import { cn } from '@kit/core'
import type { LoadingBarProps } from './LoadingBar.types'

export function LoadingBar({ progress = -1, visible = true, color, className }: LoadingBarProps) {
  if (!visible) return null
  const indeterminate = progress < 0 || progress > 100
  return (
    <div
      className={cn(
        'fixed left-0 top-0 z-50 h-1 w-full overflow-hidden bg-primary-default/20',
        className,
      )}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={indeterminate ? undefined : progress}
    >
      <div
        className="h-full bg-primary-default transition-[width]"
        style={{
          width: indeterminate ? '30%' : `${progress}%`,
          backgroundColor: color,
          ...(indeterminate ? { animation: 'kit-loadingbar 1.2s ease-in-out infinite' } : {}),
        }}
      />
      <style>{`@keyframes kit-loadingbar { 0% { transform: translateX(-100%); } 100% { transform: translateX(400%); } }`}</style>
    </div>
  )
}
