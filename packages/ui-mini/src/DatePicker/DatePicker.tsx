/**
 * DatePicker 日期选择器（mini：小程序 / 移动 H5）—— View+Text 自建，
 * 输入框 + Calendar 弹出面板，受控优先，支持多种显示格式。
 */
import { Text, View } from '@tarojs/components'
import { useState } from 'react'
import { Calendar } from '../Calendar'
import type { DatePickerFormat, DatePickerProps } from './DatePicker.types'
import './DatePicker.scss'

function formatDate(date: Date, format: DatePickerFormat): string {
  const y = date.getFullYear()
  const m = (date.getMonth() + 1).toString().padStart(2, '0')
  const d = date.getDate().toString().padStart(2, '0')
  switch (format) {
    case 'YYYY/MM/DD':
      return `${y}/${m}/${d}`
    case 'YYYY年MM月DD日':
      return `${y}年${m}月${d}日`
    case 'YYYY-MM-DD':
    default:
      return `${y}-${m}-${d}`
  }
}

export function DatePicker({
  value,
  defaultValue,
  onChange,
  format = 'YYYY-MM-DD',
  placeholder = '请选择日期',
  disabled = false,
  className = '',
}: DatePickerProps) {
  const isControlled = value !== undefined
  const [inner, setInner] = useState<Date | undefined>(defaultValue)
  const [open, setOpen] = useState(false)
  const current = isControlled ? value : inner

  const displayText = current ? formatDate(current, format) : ''

  const commit = (date: Date) => {
    if (!isControlled) setInner(date)
    onChange?.(date)
    setOpen(false)
  }

  return (
    <View className={`kit-datepicker ${className}`.trim()}>
      <View
        className={`kit-datepicker__trigger ${open ? 'kit-datepicker__trigger--open' : ''} ${disabled ? 'kit-datepicker__trigger--disabled' : ''}`}
        onClick={() => !disabled && setOpen(!open)}
      >
        <Text className={displayText ? 'kit-datepicker__text' : 'kit-datepicker__placeholder'}>
          {displayText || placeholder}
        </Text>
        <Text className="kit-datepicker__icon">📅</Text>
      </View>
      {open && !disabled ? (
        <View className="kit-datepicker__panel">
          <Calendar {...(current !== undefined ? { value: current } : {})} onChange={commit} />
        </View>
      ) : null}
    </View>
  )
}
