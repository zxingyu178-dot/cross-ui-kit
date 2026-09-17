/**
 * Popover 弹出层（mini：小程序 / 移动 H5）—— View+Text 自建，
 * 点击触发切换显示，绝对定位弹出内容。
 */
import { View } from '@tarojs/components'
import { useState } from 'react'
import type { PopoverProps } from './Popover.types'
import './Popover.scss'

export function Popover({
  trigger,
  content,
  align = 'center',
  side = 'bottom',
  className = '',
}: PopoverProps) {
  const [open, setOpen] = useState(false)

  return (
    <View className={`kit-popover ${className}`.trim()}>
      <View className="kit-popover__trigger" onClick={() => setOpen(!open)}>
        {trigger}
      </View>
      {open ? (
        <View
          className={`kit-popover__content kit-popover__content--${side} kit-popover__content--align-${align}`}
        >
          {content}
        </View>
      ) : null}
    </View>
  )
}
