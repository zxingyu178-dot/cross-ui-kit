/**
 * Rate 评分（mini：小程序 / 移动 H5）—— View+Text 自建，
 * 受控优先，点击选择，allowHalf 半星，禁用态，三尺寸，自定义字符。
 */
import { Text, View } from '@tarojs/components'
import { useState } from 'react'
import type { RateProps, RateSize } from './Rate.types'
import './Rate.scss'

const SIZE_CLASS: Record<RateSize, string> = {
  sm: 'kit-rate__char--sm',
  md: 'kit-rate__char--md',
  lg: 'kit-rate__char--lg',
}

export function Rate({
  value,
  defaultValue = 0,
  onChange,
  count = 5,
  allowHalf = false,
  disabled = false,
  size = 'md',
  character = '★',
  className = '',
}: RateProps) {
  const isControlled = value !== undefined
  const [inner, setInner] = useState(defaultValue)
  const current = isControlled ? value : inner

  const handleSelect = (v: number) => {
    if (disabled) return
    if (!isControlled) setInner(v)
    onChange?.(v)
  }

  return (
    <View className={`kit-rate ${disabled ? 'kit-rate--disabled' : ''} ${className}`.trim()}>
      {Array.from({ length: count }).map((_, i) => {
        const full = current >= i + 1
        const half = allowHalf && current >= i + 0.5 && current < i + 1
        return (
          <View key={i} className="kit-rate__item">
            {allowHalf ? (
              <View className="kit-rate__hit-area">
                <View className="kit-rate__hit-half" onClick={() => handleSelect(i + 0.5)} />
                <View
                  className="kit-rate__hit-half kit-rate__hit-half--right"
                  onClick={() => handleSelect(i + 1)}
                />
              </View>
            ) : (
              <View className="kit-rate__hit-full" onClick={() => handleSelect(i + 1)} />
            )}
            <Text
              className={`kit-rate__char ${SIZE_CLASS[size]} ${full ? 'kit-rate__char--full' : half ? 'kit-rate__char--half' : ''}`.trim()}
            >
              {character}
            </Text>
          </View>
        )
      })}
    </View>
  )
}
