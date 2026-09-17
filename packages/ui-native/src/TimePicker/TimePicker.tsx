/**
 * TimePicker 时间选择器（native：iOS / Android）—— Tamagui XStack+YStack+Text 自建，
 * 多列时间选择面板（时/分/秒），受控优先，支持 HH:mm:ss / HH:mm 格式。
 */
import { useState } from 'react'
import { Text, XStack, YStack } from 'tamagui'
import type { TimePickerFormat, TimePickerProps } from './TimePicker.types'

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
  style,
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
        onPress={() => setOpen(!open)}
      >
        <Text fontSize="$bodyMd" color={current ? '$textPrimary' : '$textTertiary'}>
          {current || placeholder}
        </Text>
        <Text fontSize={12} color="$textTertiary">
          ▼
        </Text>
      </XStack>
      {open ? (
        <XStack
          position="absolute"
          top="100%"
          left={0}
          marginTop={4}
          maxHeight={192}
          borderWidth={1}
          borderColor="$borderDefault"
          borderRadius="$md"
          backgroundColor="$bgCard"
          zIndex={100}
        >
          {columns.map((col, ci) => (
            <YStack
              key={ci}
              flex={1}
              minWidth={60}
              borderRightWidth={ci < columns.length - 1 ? 1 : 0}
              borderRightColor="$borderDefault"
              paddingVertical={4}
            >
              {col.options.map((opt) => (
                <XStack
                  key={opt}
                  paddingHorizontal={12}
                  paddingVertical={6}
                  alignItems="center"
                  justifyContent="center"
                  backgroundColor={col.value === opt ? 'rgba(37,99,235,0.1)' : 'transparent'}
                  onPress={() => col.onChange(opt)}
                >
                  <Text
                    fontSize="$bodySm"
                    color={col.value === opt ? '$primaryDefault' : '$textSecondary'}
                    fontWeight={col.value === opt ? '500' : '400'}
                  >
                    {pad(opt)}
                  </Text>
                </XStack>
              ))}
            </YStack>
          ))}
        </XStack>
      ) : null}
    </YStack>
  )
}
