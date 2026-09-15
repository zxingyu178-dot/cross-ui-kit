/**
 * RadioGroup（mini：小程序 / 移动 H5）—— NutUI RadioGroup + Radio 封装。
 * 通过自建 icon/activeIcon 接管圆圈视觉（颜色全走 --kit-* token，不依赖 NutUI 默认主题色）；
 * onValueChange 统一为 string 值回调。
 */
import { Radio as NutRadio, RadioGroup as NutRadioGroup } from '@nutui/nutui-react-taro'
import { Text, View } from '@tarojs/components'
import type { RadioGroupProps, RadioGroupSize } from './RadioGroup.types'
import './RadioGroup.scss'

/** 未选圆圈 */
function RadioIcon({ size }: { size: RadioGroupSize }) {
  return <View className={`kit-radio__circle kit-radio__circle--${size}`} />
}

/** 选中圆圈 + 内点 */
function RadioActiveIcon({ size }: { size: RadioGroupSize }) {
  return (
    <View className={`kit-radio__circle kit-radio__circle--${size} kit-radio__circle--checked`}>
      <View className={`kit-radio__dot kit-radio__dot--${size}`} />
    </View>
  )
}

export function RadioGroup({
  options,
  value,
  defaultValue,
  onValueChange,
  disabled = false,
  direction = 'vertical',
  size = 'md',
  className = '',
}: RadioGroupProps) {
  return (
    <NutRadioGroup
      className={['kit-radio-group', `kit-radio-group--${direction}`, className]
        .filter(Boolean)
        .join(' ')}
      {...(value !== undefined ? { value } : {})}
      {...(defaultValue !== undefined ? { defaultValue } : {})}
      direction={direction}
      disabled={disabled}
      onChange={(v) => onValueChange?.(String(v))}
    >
      {options.map((opt) => {
        const itemDisabled = disabled || opt.disabled === true
        return (
          <NutRadio
            key={opt.value}
            value={opt.value}
            disabled={itemDisabled}
            icon={<RadioIcon size={size} />}
            activeIcon={<RadioActiveIcon size={size} />}
            className="kit-radio"
          >
            <Text
              className={['kit-radio__label', itemDisabled ? 'kit-radio__label--disabled' : '']
                .filter(Boolean)
                .join(' ')}
            >
              {opt.label}
            </Text>
          </NutRadio>
        )
      })}
    </NutRadioGroup>
  )
}
