/**
 * Slider 滑块（mini：小程序 / 移动 H5）—— 基于 Taro 原生 Slider 封装，
 * 受控优先，min/max/step，禁用态，颜色走 --kit-* token。
 */
import { Slider as TaroSlider } from '@tarojs/components'
import { useState } from 'react'
import type { SliderProps } from './Slider.types'

export function Slider({
  value,
  defaultValue = 0,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  orientation: _orientation = 'horizontal',
  className = '',
}: SliderProps) {
  const isControlled = value !== undefined
  const [inner, setInner] = useState(defaultValue)
  const current = isControlled ? value : inner

  const handleChange = (e: { detail: { value: number } }) => {
    const v = e.detail.value
    if (!isControlled) setInner(v)
    onChange?.(v)
  }

  return (
    <TaroSlider
      className={className}
      min={min}
      max={max}
      step={step}
      value={current}
      disabled={disabled}
      activeColor="var(--kit-color-primary-default)"
      backgroundColor="var(--kit-color-border-default)"
      blockColor="var(--kit-color-bg-card)"
      blockSize={20}
      onChange={handleChange}
    />
  )
}
