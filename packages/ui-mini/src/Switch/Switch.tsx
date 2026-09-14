/**
 * Switch（mini：小程序 / 移动 H5）—— NutUI Switch 受控封装。
 * 轨道/滑块视觉由 Switch.scss 全量覆盖为 --kit-* token（不使用 NutUI 默认主题色）；
 * onCheckedChange 统一为 boolean 值回调；loading 期间拦截切换但不置灰。
 */
import { Switch as NutSwitch } from '@nutui/nutui-react-taro'
import { Text, View } from '@tarojs/components'
import type { SwitchProps } from './Switch.types'
import './Switch.scss'

export function Switch({
  checked,
  defaultChecked,
  onCheckedChange,
  disabled = false,
  loading = false,
  size = 'md',
  label,
  className = '',
}: SwitchProps) {
  const a11yLabel = typeof label === 'string' ? label : undefined

  const track = (
    <NutSwitch
      className={['kit-switch', `kit-switch--${size}`, className].filter(Boolean).join(' ')}
      {...(checked !== undefined ? { checked } : {})}
      {...(defaultChecked !== undefined ? { defaultChecked } : {})}
      disabled={disabled}
      loading={loading}
      {...(a11yLabel !== undefined ? { ariaLabel: a11yLabel } : {})}
      onChange={(val: boolean) => {
        if (!loading) onCheckedChange?.(val)
      }}
    />
  )

  if (label === undefined) {
    return track
  }

  return (
    <View className="kit-switch-row">
      {track}
      <Text
        className={['kit-switch__label', disabled ? 'kit-switch__label--disabled' : '']
          .filter(Boolean)
          .join(' ')}
        onClick={() => {
          if (!disabled && !loading && checked !== undefined) onCheckedChange?.(!checked)
        }}
      >
        {label}
      </Text>
    </View>
  )
}
