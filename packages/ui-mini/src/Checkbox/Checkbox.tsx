/**
 * Checkbox（mini：小程序 / H5）—— @nutui/nutui-react-taro Checkbox 封装。
 * 通过自定义 icon/activeIcon/indeterminateIcon 接管视觉，颜色全部引用 var(--kit-*)，
 * 不依赖 NutUI 默认主题色；onChange 已是 boolean 值回调。
 */
import { Checkbox as NutCheckbox } from '@nutui/nutui-react-taro'
import { Text, View } from '@tarojs/components'
import type { ReactNode } from 'react'
import type { CheckboxProps } from './Checkbox.types'
import './Checkbox.scss'

/** 未选中方框 */
function BoxIcon({ error }: { error: boolean }) {
  return (
    <View
      className={['kit-checkbox__box', error ? 'kit-checkbox__box--error' : '']
        .filter(Boolean)
        .join(' ')}
    />
  )
}

/** 选中实心框 + 勾 */
function CheckedIcon() {
  return (
    <View className="kit-checkbox__box kit-checkbox__box--checked">
      <Text className="kit-checkbox__mark">✓</Text>
    </View>
  )
}

/** 半选实心框 + 横线 */
function IndeterminateIcon() {
  return (
    <View className="kit-checkbox__box kit-checkbox__box--checked">
      <Text className="kit-checkbox__mark">−</Text>
    </View>
  )
}

export function Checkbox({
  checked,
  defaultChecked,
  disabled = false,
  indeterminate = false,
  label,
  error = false,
  className = '',
  onChange,
}: CheckboxProps) {
  const icon: ReactNode = <BoxIcon error={error} />

  return (
    <NutCheckbox
      className={['kit-checkbox', className].filter(Boolean).join(' ')}
      icon={icon}
      activeIcon={<CheckedIcon />}
      indeterminateIcon={<IndeterminateIcon />}
      indeterminate={indeterminate}
      disabled={disabled}
      {...(checked !== undefined ? { checked } : {})}
      {...(defaultChecked !== undefined ? { defaultChecked } : {})}
      {...(label !== undefined ? { label } : {})}
      {...(onChange ? { onChange } : {})}
    />
  )
}
