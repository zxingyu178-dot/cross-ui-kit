/**
 * DropdownMenu 下拉菜单（mini：小程序 / 移动 H5）—— View+Text 自建，
 * 点击触发切换显示，菜单项点击回调，禁用/危险态，点击外部关闭。
 */
import { Text, View } from '@tarojs/components'
import { useState } from 'react'
import type { DropdownMenuProps } from './DropdownMenu.types'
import './DropdownMenu.scss'

export function DropdownMenu({
  trigger,
  items,
  align = 'start',
  className = '',
}: DropdownMenuProps) {
  const [open, setOpen] = useState(false)

  const handleItemClick = (onClick?: () => void) => {
    onClick?.()
    setOpen(false)
  }

  return (
    <View className={`kit-dropdown ${className}`.trim()}>
      <View className="kit-dropdown__trigger" onClick={() => setOpen(!open)}>
        {trigger}
      </View>
      {open ? (
        <View className={`kit-dropdown__menu kit-dropdown__menu--${align}`}>
          {items.map((item) => (
            <View
              key={item.key}
              className={`kit-dropdown__item ${item.disabled ? 'kit-dropdown__item--disabled' : ''} ${item.danger ? 'kit-dropdown__item--danger' : ''}`.trim()}
              onClick={() => {
                if (!item.disabled) handleItemClick(item.onClick)
              }}
            >
              {item.icon ? <View className="kit-dropdown__icon">{item.icon}</View> : null}
              <Text className="kit-dropdown__label">{item.label}</Text>
            </View>
          ))}
        </View>
      ) : null}
    </View>
  )
}
