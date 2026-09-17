/**
 * Segmented 分段控制器（mini：小程序 / 移动 H5）—— View+Text 自建，
 * 受控优先，选项切换，选中态高亮，整体/单项禁用，三尺寸。
 */
import { Text, View } from '@tarojs/components'
import { useState } from 'react'
import type { SegmentedProps, SegmentedSize } from './Segmented.types'
import './Segmented.scss'

const SIZE_CLASS: Record<SegmentedSize, string> = {
  sm: 'kit-segmented__item--sm',
  md: 'kit-segmented__item--md',
  lg: 'kit-segmented__item--lg',
}

export function Segmented({
  value,
  defaultValue,
  onChange,
  options,
  size = 'md',
  disabled = false,
  className = '',
}: SegmentedProps) {
  const isControlled = value !== undefined
  const [inner, setInner] = useState<string | undefined>(defaultValue)
  const current = isControlled ? value : inner

  const handleSelect = (v: string) => {
    if (disabled) return
    if (!isControlled) setInner(v)
    onChange?.(v)
  }

  return (
    <View
      className={`kit-segmented ${disabled ? 'kit-segmented--disabled' : ''} ${className}`.trim()}
    >
      {options.map((opt) => {
        const active = current === opt.value
        const itemDisabled = disabled || opt.disabled
        return (
          <View
            key={opt.value}
            className={`kit-segmented__item ${SIZE_CLASS[size]} ${active ? 'kit-segmented__item--active' : ''} ${itemDisabled ? 'kit-segmented__item--disabled' : ''}`.trim()}
            onClick={() => handleSelect(opt.value)}
          >
            <Text className="kit-segmented__label">{opt.label}</Text>
          </View>
        )
      })}
    </View>
  )
}
