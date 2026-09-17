/**
 * TimePicker 时间选择器（mini：小程序 / 移动 H5）—— View+Text 自建，
 * 多列时间选择面板（时/分/秒），受控优先，支持 HH:mm:ss / HH:mm 格式。
 */
import { Text, View } from '@tarojs/components'
import { useState } from 'react'
import type { TimePickerFormat, TimePickerProps } from './TimePicker.types'
import './TimePicker.scss'

function pad(n: number): string {
  return n.toString().padStart(2, '0')
}

function parseTime(value: string, format: TimePickerFormat): [number, number, number] {
  if (!value) return [0, 0, 0]
  const parts = value.split(':').map(Number)
  const h = parts[0] ?? 0
  const m = parts[1] ?? 0
  const s = format === 'HH:mm' ? 0 : (parts[2] ?? 0)
  return [h, m, s]
}

export function TimePicker({
  value,
  defaultValue,
  onChange,
  format = 'HH:mm:ss',
  placeholder = '请选择时间',
  className = '',
}: TimePickerProps) {
  const isControlled = value !== undefined
  const [inner, setInner] = useState<string>(defaultValue ?? '')
  const [open, setOpen] = useState(false)
  const current = isControlled ? value : inner

  const [hours, minutes, seconds] = parseTime(current, format)

  const commit = (h: number, m: number, s: number) => {
    const val = format === 'HH:mm' ? `${pad(h)}:${pad(m)}` : `${pad(h)}:${pad(m)}:${pad(s)}`
    if (!isControlled) setInner(val)
    onChange?.(val)
  }

  const hourOptions = Array.from({ length: 24 }, (_, i) => i)
  const minuteOptions = Array.from({ length: 60 }, (_, i) => i)
  const secondOptions = Array.from({ length: 60 }, (_, i) => i)

  const columns: { options: number[]; value: number; onChange: (v: number) => void }[] = [
    { options: hourOptions, value: hours, onChange: (h) => commit(h, minutes, seconds) },
    { options: minuteOptions, value: minutes, onChange: (m) => commit(hours, m, seconds) },
  ]
  if (format === 'HH:mm:ss') {
    columns.push({
      options: secondOptions,
      value: seconds,
      onChange: (s) => commit(hours, minutes, s),
    })
  }

  return (
    <View className={`kit-timepicker ${className}`.trim()}>
      <View
        className={`kit-timepicker__trigger ${open ? 'kit-timepicker__trigger--open' : ''}`}
        onClick={() => setOpen(!open)}
      >
        <Text className={current ? 'kit-timepicker__text' : 'kit-timepicker__placeholder'}>
          {current || placeholder}
        </Text>
        <Text className="kit-timepicker__arrow">▼</Text>
      </View>
      {open ? (
        <View className="kit-timepicker__panel">
          {columns.map((col, ci) => (
            <View key={ci} className="kit-timepicker__column">
              {col.options.map((opt) => (
                <View
                  key={opt}
                  className={`kit-timepicker__option ${col.value === opt ? 'kit-timepicker__option--active' : ''}`}
                  onClick={() => col.onChange(opt)}
                >
                  <Text>{pad(opt)}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>
      ) : null}
    </View>
  )
}
