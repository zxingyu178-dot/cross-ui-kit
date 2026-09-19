/**
 * SwipeAction 滑动操作（mini：小程序 / 移动 H5）。
 */
import { useRef, useState } from 'react'
import { View } from '@tarojs/components'
import type { SwipeActionAction, SwipeActionProps } from './SwipeAction.types'
import './SwipeAction.scss'

const ACTION_WIDTH = 144

export function SwipeAction({
  children,
  actions = [],
  onAction,
  className = '',
}: SwipeActionProps) {
  const [offset, setOffset] = useState(0)
  const startX = useRef(0)
  const width = actions.length * ACTION_WIDTH

  return (
    <View className={`kit-swipe ${className}`.trim()}>
      <View
        className="kit-swipe__inner"
        style={{ transform: `translateX(${offset}px)` }}
        onTouchStart={(e) => {
          const ev = e as unknown as { touches: Array<{ clientX: number }> }
          const t = ev.touches[0]
          if (t) startX.current = t.clientX
        }}
        onTouchMove={(e) => {
          const ev = e as unknown as { touches: Array<{ clientX: number }> }
          const t = ev.touches[0]
          if (!t) return
          const dx = t.clientX - startX.current
          setOffset(Math.max(-width, Math.min(0, dx)))
        }}
        onTouchEnd={() => {
          setOffset(offset < -width / 3 ? -width : 0)
        }}
      >
        <View className="kit-swipe__content">{children}</View>
        <View className="kit-swipe__actions" style={{ width }}>
          {actions.map((action: SwipeActionAction) => (
            <View
              key={action.key}
              className={`kit-swipe__action ${action.danger ? 'kit-swipe__action--danger' : ''}`.trim()}
              style={{ width: ACTION_WIDTH }}
              onClick={() => {
                onAction?.(action.key)
                if (action.closeOnPress !== false) setOffset(0)
              }}
            >
              {action.label}
            </View>
          ))}
        </View>
      </View>
    </View>
  )
}
