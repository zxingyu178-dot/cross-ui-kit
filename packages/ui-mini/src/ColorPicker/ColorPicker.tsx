/**
 * ColorPicker 颜色选择器（mini：小程序 / 移动 H5）—— View+Text 自建，
 * 预设色板 + 输入框，受控优先。
 */
import { Text, View } from '@tarojs/components'
import { useState } from 'react'
import type { ColorPickerProps } from './ColorPicker.types'
import './ColorPicker.scss'

const DEFAULT_PRESETS = [
  '#2563eb',
  '#10b981',
  '#f59e0b',
  '#ef4444',
  '#8b5cf6',
  '#06b6d4',
  '#f97316',
  '#ec4899',
  '#64748b',
  '#0f172a',
]

export function ColorPicker({
  value,
  defaultValue,
  onChange,
  presetColors = DEFAULT_PRESETS,
  disabled = false,
  placeholder = '请选择颜色',
  className = '',
}: ColorPickerProps) {
  const isControlled = value !== undefined
  const [inner, setInner] = useState<string>(defaultValue ?? '')
  const [open, setOpen] = useState(false)
  const current = isControlled ? value : inner

  const commit = (color: string) => {
    if (!isControlled) setInner(color)
    onChange?.(color)
  }

  return (
    <View className={`kit-colorpicker ${className}`.trim()}>
      <View
        className={`kit-colorpicker__trigger ${open ? 'kit-colorpicker__trigger--open' : ''} ${disabled ? 'kit-colorpicker__trigger--disabled' : ''}`}
        onClick={() => !disabled && setOpen(!open)}
      >
        <View
          className="kit-colorpicker__swatch"
          style={{ backgroundColor: current || 'transparent' }}
        />
        <Text className={current ? 'kit-colorpicker__text' : 'kit-colorpicker__placeholder'}>
          {current || placeholder}
        </Text>
      </View>
      {open && !disabled ? (
        <View className="kit-colorpicker__panel">
          <View className="kit-colorpicker__presets">
            {presetColors.map((color) => (
              <View
                key={color}
                className={`kit-colorpicker__preset ${current === color ? 'kit-colorpicker__preset--active' : ''}`}
                style={{ backgroundColor: color }}
                onClick={() => commit(color)}
              />
            ))}
          </View>
        </View>
      ) : null}
    </View>
  )
}
