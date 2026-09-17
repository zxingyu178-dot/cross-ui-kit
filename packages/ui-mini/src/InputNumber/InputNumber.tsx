/**
 * InputNumber 数字输入（mini：小程序 / 移动 H5）—— View+Input+Text 自建，
 * 受控优先，min/max/step/precision，加减按钮，onBlur 格式化。颜色全走 --kit-* token。
 */
import { Input, Text, View } from '@tarojs/components'
import { useCallback, useState } from 'react'
import type { InputNumberProps, InputNumberSize } from './InputNumber.types'
import './InputNumber.scss'

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
  className = '',
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

  const handleInput = (e: { detail: { value: string } }) => {
    const raw = e.detail.value
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
    <View
      className={`kit-input-number ${focused ? 'kit-input-number--focused' : ''} ${disabled ? 'kit-input-number--disabled' : ''} ${className}`.trim()}
      style={{ height: h }}
    >
      {controls ? (
        <View
          className={`kit-input-number__btn ${atMin ? 'kit-input-number__btn--disabled' : ''}`}
          style={{ width: bw, height: h }}
          onClick={() => stepValue(-step)}
        >
          <Text className="kit-input-number__btn-text">−</Text>
        </View>
      ) : null}
      <Input
        type="digit"
        className="kit-input-number__input"
        style={{ height: h }}
        value={focused ? display : format(current, precision)}
        onInput={handleInput}
        onFocus={() => {
          setFocused(true)
          setDisplay(format(current, precision))
        }}
        onBlur={handleBlur}
        disabled={disabled}
        {...(placeholder !== undefined ? { placeholder } : {})}
        placeholderClass="kit-input-number__placeholder"
      />
      {controls ? (
        <View
          className={`kit-input-number__btn ${atMax ? 'kit-input-number__btn--disabled' : ''}`}
          style={{ width: bw, height: h }}
          onClick={() => stepValue(step)}
        >
          <Text className="kit-input-number__btn-text">+</Text>
        </View>
      ) : null}
    </View>
  )
}
