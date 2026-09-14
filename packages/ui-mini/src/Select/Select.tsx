/**
 * Select（mini：小程序 / H5）—— Taro Picker(selector) 封装。
 * 小程序/H5 的标准选择交互是底部滚轮 Picker；触发框由本封装自建并对齐 token 视觉。
 * onChange 归一为 value 字符串回调。
 */
import { Picker, Text, View } from '@tarojs/components'
import type { SelectProps, SelectSize } from './Select.types'
import './Select.scss'

const SIZE_CLASS: Record<SelectSize, string> = {
  sm: 'kit-select__trigger--sm',
  md: 'kit-select__trigger--md',
  lg: 'kit-select__trigger--lg',
}

export function Select({
  options,
  value,
  defaultValue,
  placeholder = '请选择',
  size = 'md',
  disabled = false,
  error = false,
  className = '',
  onChange,
}: SelectProps) {
  const invalid = Boolean(error)
  const errorText = typeof error === 'string' ? error : ''
  const labels = options.map((o) => (typeof o.label === 'string' ? o.label : String(o.label)))

  const current = value !== undefined ? value : defaultValue
  const found = current !== undefined ? options.findIndex((o) => o.value === current) : -1
  const selectedIndex = found >= 0 ? found : -1
  const selectedLabel = selectedIndex >= 0 ? labels[selectedIndex] : ''

  const triggerClass = [
    'kit-select__trigger',
    SIZE_CLASS[size],
    invalid ? 'kit-select__trigger--error' : '',
    disabled ? 'kit-select__trigger--disabled' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <View className={['kit-select', className].filter(Boolean).join(' ')}>
      <Picker
        mode="selector"
        range={labels}
        disabled={disabled}
        {...(selectedIndex >= 0 ? { value: selectedIndex } : {})}
        onChange={(e) => {
          const idx = Number(e.detail.value)
          const opt = options[idx]
          if (opt && !opt.disabled) {
            onChange?.(opt.value)
          }
        }}
      >
        <View className={triggerClass}>
          {selectedLabel ? (
            <Text className="kit-select__value">{selectedLabel}</Text>
          ) : (
            <Text className="kit-select__placeholder">{placeholder}</Text>
          )}
          <Text className="kit-select__arrow">▾</Text>
        </View>
      </Picker>
      {errorText ? <View className="kit-select__error">{errorText}</View> : null}
    </View>
  )
}
