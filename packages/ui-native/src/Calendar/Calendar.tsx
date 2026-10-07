/**
 * Calendar 日历（native：iOS / Android）—— Tamagui XStack+YStack+Text 自建，
 * flex 布局模拟日历表格，支持日期选择、月份切换、受控优先。
 */
import { useState } from 'react'
import { Text, XStack, YStack } from 'tamagui'
import type { CalendarProps } from './Calendar.types'

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
  style,
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
    <YStack
      width={288}
      padding={16}
      borderWidth={1}
      borderColor="$borderDefault"
      borderRadius="$md"
      backgroundColor="$bgCard"
      style={style}
    >
      <XStack alignItems="center" justifyContent="space-between" marginBottom={12}>
        <XStack
          width={32}
          height={32}
          alignItems="center"
          justifyContent="center"
          borderRadius={16}
          onPress={() => setViewDate(new Date(year, month - 1, 1))}
        >
          <Text fontSize={18} color="$textSecondary">
            ‹
          </Text>
        </XStack>
        <Text fontSize="$bodyMd" fontWeight={500} color="$textPrimary">
          {year}年{month + 1}月
        </Text>
        <XStack
          width={32}
          height={32}
          alignItems="center"
          justifyContent="center"
          borderRadius={16}
          onPress={() => setViewDate(new Date(year, month + 1, 1))}
        >
          <Text fontSize={18} color="$textSecondary">
            ›
          </Text>
        </XStack>
      </XStack>
      <XStack marginBottom={4}>
        {WEEK_DAYS.map((d) => (
          <XStack key={d} flex={1} paddingVertical={4} alignItems="center" justifyContent="center">
            <Text fontSize="$caption" color="$textTertiary">
              {d}
            </Text>
          </XStack>
        ))}
      </XStack>
      <XStack flexWrap="wrap">
        {days.map((d, i) => (
          <XStack
            key={i}
            width="14.28%"
            paddingVertical={2}
            alignItems="center"
            justifyContent="center"
          >
            {d ? (
              <XStack
                width={32}
                height={32}
                alignItems="center"
                justifyContent="center"
                borderRadius={16}
                backgroundColor={
                  isSameDay(current, new Date(year, month, d)) ? '$primaryDefault' : 'transparent'
                }
                onPress={() => commit(new Date(year, month, d))}
              >
                <Text
                  fontSize="$bodySm"
                  color={isSameDay(current, new Date(year, month, d)) ? '#fff' : '$textPrimary'}
                >
                  {d}
                </Text>
              </XStack>
            ) : null}
          </XStack>
        ))}
      </XStack>
    </YStack>
  )
}
