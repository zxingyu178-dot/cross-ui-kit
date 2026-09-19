/**
 * Backdrop 遮罩层（web）—— 全屏半透明遮罩，点击关闭。
 */
import { cn } from '@kit/core'
import type { BackdropProps } from './Backdrop.types'

export function Backdrop({
  open = false,
  onClose,
  children,
  opacity = 0.5,
  className,
}: BackdropProps) {
  if (!open) return null
  return (
    <div
      className={cn('fixed inset-0 z-50 flex items-center justify-center', className)}
      style={{ backgroundColor: `rgba(0,0,0,${opacity})` }}
      onClick={onClose}
    >
      {children}
    </div>
  )
}
