/**
 * Menu 导航菜单（mini：小程序 / 移动 H5）—— 支持一级/二级菜单、选中高亮、水平/垂直布局。
 */
import { Text, View } from '@tarojs/components'
import { useState } from 'react'
import type { MenuItem, MenuProps } from './Menu.types'
import './Menu.scss'

function MenuItemComponent({
  item,
  selectedKey,
  onSelect,
  mode,
  openKeys,
  toggleOpen,
}: {
  item: MenuItem
  selectedKey?: string | undefined
  onSelect?: ((key: string) => void) | undefined
  mode: 'horizontal' | 'vertical'
  openKeys: string[]
  toggleOpen: (key: string) => void
}) {
  const hasChildren = item.children && item.children.length > 0
  const isOpen = openKeys.includes(item.key)
  const isSelected = selectedKey === item.key

  if (hasChildren) {
    return (
      <View
        className={`kit-menu__item-wrapper ${mode === 'horizontal' ? 'kit-menu__item-wrapper--horizontal' : ''}`}
      >
        <View
          className={`kit-menu__item ${item.disabled ? 'kit-menu__item--disabled' : ''}`}
          onClick={() => !item.disabled && toggleOpen(item.key)}
        >
          <Text>{item.label}</Text>
          <Text className={`kit-menu__arrow ${isOpen ? 'kit-menu__arrow--open' : ''}`}>▾</Text>
        </View>
        {isOpen ? (
          <View
            className={`kit-menu__submenu ${mode === 'horizontal' ? 'kit-menu__submenu--horizontal' : ''}`}
          >
            {item.children!.map((child) => (
              <View
                key={child.key}
                className={`kit-menu__subitem ${selectedKey === child.key ? 'kit-menu__subitem--selected' : ''} ${child.disabled ? 'kit-menu__subitem--disabled' : ''}`}
                onClick={() => !child.disabled && onSelect?.(child.key)}
              >
                <Text>{child.label}</Text>
              </View>
            ))}
          </View>
        ) : null}
      </View>
    )
  }

  return (
    <View
      className={`kit-menu__item ${isSelected ? 'kit-menu__item--selected' : ''} ${item.disabled ? 'kit-menu__item--disabled' : ''}`}
      onClick={() => !item.disabled && onSelect?.(item.key)}
    >
      <Text>{item.label}</Text>
    </View>
  )
}

export function Menu({
  items = [],
  selectedKey,
  onSelect,
  mode = 'horizontal',
  defaultOpenKeys = [],
  className = '',
}: MenuProps) {
  const [openKeys, setOpenKeys] = useState<string[]>(defaultOpenKeys)

  const toggleOpen = (key: string) => {
    setOpenKeys((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]))
  }

  return (
    <View className={`kit-menu kit-menu--${mode} ${className}`.trim()}>
      {items.map((item) => (
        <MenuItemComponent
          key={item.key}
          item={item}
          selectedKey={selectedKey}
          onSelect={onSelect}
          mode={mode}
          openKeys={openKeys}
          toggleOpen={toggleOpen}
        />
      ))}
    </View>
  )
}
