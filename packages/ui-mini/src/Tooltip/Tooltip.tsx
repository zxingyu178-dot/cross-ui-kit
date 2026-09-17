/**
 * Tooltip 文字提示气泡（mini：小程序 / 移动 H5）—— View+Text 自建绝对定位浮层，
 * 点击触发切换（移动端无 hover）；颜色/字号/圆角/层级全走 --kit-* token，
 * 与 web/native 的四向 placement、深色气泡（bg-inverse / text-inverse）对齐。
 */
import { useState } from 'react'
import { Text, View } from '@tarojs/components'
import type { CSSProperties } from 'react'
import type { TooltipProps } from './Tooltip.types'
import './Tooltip.scss'

export function Tooltip({
  children,
  content,
  placement = 'top',
  sideOffset = 4,
  open,
  onOpenChange,
  defaultOpen,
  disabled = false,
  className = '',
}: TooltipProps) {
  const [innerOpen, setInnerOpen] = useState(defaultOpen ?? false)
  const isControlled = open !== undefined
  const visible = isControlled ? open : innerOpen

  const toggle = () => {
    const next = !visible
    if (!isControlled) setInnerOpen(next)
    onOpenChange?.(next)
  }

  if (disabled) {
    return <View className={className}>{children}</View>
  }

  const offsetStyle: CSSProperties = {
    top: { marginBottom: `${sideOffset}px` },
    bottom: { marginTop: `${sideOffset}px` },
    left: { marginRight: `${sideOffset}px` },
    right: { marginLeft: `${sideOffset}px` },
  }[placement]

  return (
    <View className={`kit-tooltip ${className}`.trim()}>
      <View className="kit-tooltip__trigger" onClick={toggle}>
        {children}
      </View>
      {visible ? (
        <View
          className={`kit-tooltip__bubble kit-tooltip__bubble--${placement}`}
          style={offsetStyle}
        >
          <Text className="kit-tooltip__text">{content}</Text>
        </View>
      ) : null}
    </View>
  )
}
