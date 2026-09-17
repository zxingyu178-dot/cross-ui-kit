/**
 * Calendar 日历（mini：小程序 / 移动 H5）—— View+Text 自建，
 * flex 布局模拟日历表格，支持日期选择、月份切换、受控优先。
 */
import { Text, View } from '@tarojs/components'
import { useState } from 'react'
import type { CalendarProps } from './Calendar.types'
import './Calendar.scss'

const WEEK_DAYS = ['日', '一', '二', '三', '四', '五', '六']

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

export function Calendar({
  value,
  defaultValue,
  onChange,
  mode: _mode = 'date',
  fullscreen: _fullscreen = false,
  className = '',
}: CalendarProps) {
  const isControlled = value !== undefined
  const [inner, setInner] = useState<Date>(defaultValue ?? new Date())
  const [viewDate, setViewDate] = useState<Date>(inner)
  const current = isControlled ? value : inner

  const year = viewDate.getFullYear()
  const month = viewDate.getMonth()
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  const days: (number | null)[] = []
  for (let i = 0; i < firstDay; i++) days.push(null)
  for (let d = 1; d <= daysInMonth; d++) days.push(d)

  const commit = (date: Date) => {
    if (!isControlled) setInner(date)
    onChange?.(date)
  }

  return (
    <View className={`kit-calendar ${className}`.trim()}>
      <View className="kit-calendar__header">
        <View
          className="kit-calendar__nav"
          onClick={() => setViewDate(new Date(year, month - 1, 1))}
        >
          <Text>‹</Text>
        </View>
        <Text className="kit-calendar__title">
          {year}年{month + 1}月
        </Text>
        <View
          className="kit-calendar__nav"
          onClick={() => setViewDate(new Date(year, month + 1, 1))}
        >
          <Text>›</Text>
        </View>
      </View>
      <View className="kit-calendar__weekdays">
        {WEEK_DAYS.map((d) => (
          <View key={d} className="kit-calendar__weekday">
            <Text>{d}</Text>
          </View>
        ))}
      </View>
      <View className="kit-calendar__days">
        {days.map((d, i) => (
          <View key={i} className="kit-calendar__day-cell">
            {d ? (
              <View
                className={`kit-calendar__day ${isSameDay(current, new Date(year, month, d)) ? 'kit-calendar__day--selected' : ''}`}
                onClick={() => commit(new Date(year, month, d))}
              >
                <Text>{d}</Text>
              </View>
            ) : null}
          </View>
        ))}
      </View>
    </View>
  )
}
