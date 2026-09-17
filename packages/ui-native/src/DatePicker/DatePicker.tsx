/**
 * DatePicker 日期选择器（native：iOS / Android）—— Tamagui XStack+YStack+Text 自建，
 * 输入框 + Calendar 弹出面板，受控优先，支持多种显示格式。
 */
import { useState } from 'react'
import { Text, XStack, YStack } from 'tamagui'
import { Calendar } from '../Calendar'
import type { DatePickerFormat, DatePickerProps } from './DatePicker.types'

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
  style,
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
    <YStack position="relative" style={style}>
      <XStack
        height={40}
        alignItems="center"
        justifyContent="space-between"
        paddingHorizontal={12}
        borderWidth={1}
        borderColor={open ? '$primaryDefault' : '$borderDefault'}
        borderRadius="$md"
        backgroundColor="$bgCard"
        opacity={disabled ? 0.5 : 1}
        onPress={() => !disabled && setOpen(!open)}
      >
        <Text fontSize="$bodyMd" color={displayText ? '$textPrimary' : '$textTertiary'}>
          {displayText || placeholder}
        </Text>
        <Text fontSize={16}>📅</Text>
      </XStack>
      {open && !disabled ? (
        <YStack
          position="absolute"
          top="100%"
          left={0}
          marginTop={4}
          padding={8}
          borderWidth={1}
          borderColor="$borderDefault"
          borderRadius="$md"
          backgroundColor="$bgCard"
          zIndex={100}
        >
          <Calendar {...(current !== undefined ? { value: current } : {})} onChange={commit} />
        </YStack>
      ) : null}
    </YStack>
  )
}
