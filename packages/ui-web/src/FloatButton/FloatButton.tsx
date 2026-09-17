/**
 * FloatButton 悬浮按钮（web）—— fixed 定位按钮，支持图标、提示、形状。
 */
import { useState } from 'react'
import { cn } from '@kit/core'
import type { FloatButtonProps } from './FloatButton.types'

export function FloatButton({
  icon,
  onClick,
  type = 'primary',
  shape = 'circle',
  tooltip,
  bottom = 24,
  right = 24,
  className,
}: FloatButtonProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={cn('fixed z-50', className)}
      style={{ bottom, right }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {tooltip && hovered ? (
        <div className="absolute bottom-full right-0 mb-2 whitespace-nowrap rounded-md bg-bg-inverse px-3 py-1.5 text-caption text-text-inverse shadow-lg">
          {tooltip}
        </div>
      ) : null}
      <button
        type="button"
        onClick={onClick}
        className={cn(
          'flex h-12 w-12 items-center justify-center shadow-lg transition-all hover:scale-105 active:scale-95',
          shape === 'circle' ? 'rounded-full' : 'rounded-lg',
          type === 'primary'
            ? 'bg-primary-default text-white hover:bg-primary-default/90'
            : 'border border-border-default bg-bg-card text-text-primary hover:bg-bg-muted',
        )}
        aria-label={tooltip}
      >
        {icon ?? <span className="text-xl">+</span>}
      </button>
    </div>
  )
}
