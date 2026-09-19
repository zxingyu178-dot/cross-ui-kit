import { useRef, useState } from 'react'
import { cn } from '@kit/core'
import type { SwipeActionProps } from './SwipeAction.types'

const ACTION_WIDTH = 72

export function SwipeAction({ children, actions = [], onAction, className }: SwipeActionProps) {
  const [offset, setOffset] = useState(0)
  const startX = useRef(0)
  const dragging = useRef(false)

  const width = actions.length * ACTION_WIDTH

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    startX.current = e.clientX
    dragging.current = true
    e.currentTarget.setPointerCapture(e.pointerId)
  }
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return
    const dx = e.clientX - startX.current
    setOffset(Math.max(-width, Math.min(0, dx)))
  }
  const onPointerUp = () => {
    dragging.current = false
    setOffset(offset < -width / 3 ? -width : 0)
  }

  return (
    <div className={cn('relative overflow-hidden select-none', className)}>
      <div
        className="flex touch-pan-y"
        style={{
          transform: `translateX(${offset}px)`,
          transition: dragging.current ? 'none' : 'transform 0.2s',
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <div className="min-w-0 flex-1">{children}</div>
        <div className="flex shrink-0" style={{ width }}>
          {actions.map((action) => (
            <button
              key={action.key}
              type="button"
              style={{ width: ACTION_WIDTH }}
              className={cn(
                'flex h-full items-center justify-center text-bodySm text-white',
                action.danger ? 'bg-danger-default' : 'bg-bg-tertiary text-text-primary',
              )}
              onClick={() => {
                onAction?.(action.key)
                if (action.closeOnPress !== false) setOffset(0)
              }}
            >
              {action.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
