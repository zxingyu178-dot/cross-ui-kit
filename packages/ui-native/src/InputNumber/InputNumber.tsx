/**
 * InputNumber 数字输入（native：iOS / Android）—— Tamagui XStack+Input+Text 自建，
 * 受控优先，min/max/step/precision，加减按钮，onBlur 格式化。颜色只引用 $token。
 */
import { useCallback, useState } from 'react'
import { Input, Text, XStack } from 'tamagui'
import type { InputNumberProps, InputNumberSize } from './InputNumber.types'

const SIZE_H: Record<InputNumberSize, number> = { sm: 32, md: 40, lg: 48 }
const BTN_W: Record<InputNumberSize, number> = { sm: 32, md: 40, lg: 48 }

function clamp(v: number, min?: number, max?: number): number {
  let r = v
  if (min !== undefined && r < min) r = min
  if (max !== undefined && r > max) r = max
  return r
}
function format(v: number | null, precision?: number): string {
  if (v === null || Number.isNaN(v)) return ''
  return precision !== undefined ? v.toFixed(precision) : String(v)
}

export function InputNumber({
  value,
  defaultValue = null,
  onChange,
  min,
  max,
  step = 1,
  precision,
  disabled = false,
  size = 'md',
  placeholder,
  controls = true,
  style,
}: InputNumberProps) {
  const isControlled = value !== undefined
  const [inner, setInner] = useState<number | null>(defaultValue)
  const [display, setDisplay] = useState<string>(format(defaultValue, precision))
  const [focused, setFocused] = useState(false)

  const current = isControlled ? value : inner

  const commit = useCallback(
    (v: number | null) => {
      if (!isControlled) setInner(v)
      onChange?.(v)
    },
    [isControlled, onChange],
  )

  const handleChangeText = (raw: string) => {
    setDisplay(raw)
    if (raw === '' || raw === '-') {
      commit(null)
      return
    }
    const num = Number(raw)
    if (!Number.isNaN(num)) commit(num)
  }

  const handleBlur = () => {
    setFocused(false)
    if (current === null) {
      setDisplay('')
      return
    }
    const clamped = clamp(current, min, max)
    if (clamped !== current) commit(clamped)
    setDisplay(format(clamped, precision))
  }

  const stepValue = (delta: number) => {
    if (disabled) return
    const base = current ?? 0
    const next = clamp(base + delta, min, max)
    commit(next)
    setDisplay(format(next, precision))
  }

  const atMin = min !== undefined && current !== null && current <= min
  const atMax = max !== undefined && current !== null && current >= max
  const h = SIZE_H[size]
  const bw = BTN_W[size]

  return (
    <XStack
      alignItems="center"
      overflow="hidden"
      borderRadius="$md"
      borderWidth={1}
      borderColor={focused ? '$primaryDefault' : '$borderDefault'}
      backgroundColor="$bgCard"
      opacity={disabled ? 0.5 : 1}
      height={h}
      style={style}
    >
      {controls ? (
        <XStack
          width={bw}
          height={h}
          alignItems="center"
          justifyContent="center"
          borderRightWidth={1}
          borderRightColor="$borderDefault"
          opacity={atMin ? 0.4 : 1}
          onPress={() => stepValue(-step)}
        >
          <Text fontSize="$bodyMd" color="$textSecondary">
            −
          </Text>
        </XStack>
      ) : null}
      <Input
        flex={1}
        height={h}
        minWidth={0}
        textAlign="center"
        fontSize="$bodyMd"
        color="$textPrimary"
        backgroundColor="transparent"
        borderWidth={0}
        paddingHorizontal={12}
        value={focused ? display : format(current, precision)}
        onChangeText={handleChangeText}
        onFocus={() => {
          setFocused(true)
          setDisplay(format(current, precision))
        }}
        onBlur={handleBlur}
        editable={!disabled}
        placeholder={placeholder}
        placeholderTextColor="$textTertiary"
        keyboardType="decimal-pad"
      />
      {controls ? (
        <XStack
          width={bw}
          height={h}
          alignItems="center"
          justifyContent="center"
          borderLeftWidth={1}
          borderLeftColor="$borderDefault"
          opacity={atMax ? 0.4 : 1}
          onPress={() => stepValue(step)}
        >
          <Text fontSize="$bodyMd" color="$textSecondary">
            +
          </Text>
        </XStack>
      ) : null}
    </XStack>
  )
}
