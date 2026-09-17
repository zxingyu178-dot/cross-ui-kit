/**
 * Collapse 折叠面板（mini：小程序 / 移动 H5）—— View+Text 自建，
 * 受控优先，手风琴模式，禁用项，点击标题切换展开。
 */
import { Text, View } from '@tarojs/components'
import { useState } from 'react'
import type { CollapseProps } from './Collapse.types'
import './Collapse.scss'

function toArr(v?: string | string[]): string[] {
  if (v === undefined) return []
  return Array.isArray(v) ? v : [v]
}

export function Collapse({
  items,
  activeKey,
  defaultActiveKey,
  onChange,
  accordion = false,
  className = '',
}: CollapseProps) {
  const isControlled = activeKey !== undefined
  const [inner, setInner] = useState<string[]>(toArr(defaultActiveKey))
  const current = isControlled ? toArr(activeKey) : inner

  const toggle = (key: string) => {
    let next: string[]
    if (accordion) {
      next = current.includes(key) ? [] : [key]
    } else {
      next = current.includes(key) ? current.filter((k) => k !== key) : [...current, key]
    }
    if (!isControlled) setInner(next)
    onChange?.(accordion ? (next[0] ?? '') : next)
  }

  return (
    <View className={`kit-collapse ${className}`.trim()}>
      {items.map((item) => {
        const open = current.includes(item.key)
        return (
          <View
            key={item.key}
            className={`kit-collapse__item ${open ? 'kit-collapse__item--open' : ''} ${item.disabled ? 'kit-collapse__item--disabled' : ''}`.trim()}
          >
            <View
              className="kit-collapse__header"
              onClick={() => {
                if (!item.disabled) toggle(item.key)
              }}
            >
              <Text className="kit-collapse__title">{item.title}</Text>
              <Text
                className={`kit-collapse__arrow ${open ? 'kit-collapse__arrow--open' : ''}`.trim()}
              >
                ▼
              </Text>
            </View>
            {open ? (
              <View className="kit-collapse__content">
                <Text className="kit-collapse__content-text">{item.content}</Text>
              </View>
            ) : null}
          </View>
        )
      })}
    </View>
  )
}
