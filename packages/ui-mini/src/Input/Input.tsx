/**
 * Input（mini：小程序 / H5）—— @nutui/nutui-react-taro Input 的统一封装。
 * 对外暴露三栈统一 props；错误态与图标槽由本封装的 View 容器提供（NutUI Taro 版无对应能力）。
 */
import { Input as NutInput } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'
import type { InputProps, InputSize, InputType } from './Input.types'
import './Input.scss'

/** 统一 type -> Taro input type（不支持的降级 text；密码走 type=password） */
const TYPE_MAP: Record<InputType, string> = {
  text: 'text',
  password: 'password',
  number: 'digit',
  tel: 'text',
  email: 'text',
  search: 'text',
}

const SIZE_CLASS: Record<InputSize, string> = {
  sm: 'kit-input__row--sm',
  md: 'kit-input__row--md',
  lg: 'kit-input__row--lg',
}

export function Input({
  value,
  defaultValue,
  placeholder,
  type = 'text',
  size = 'md',
  error = false,
  disabled = false,
  readOnly = false,
  maxLength,
  prefixIcon,
  suffixIcon,
  className = '',
  onChange,
}: InputProps) {
  const invalid = Boolean(error)
  const errorText = typeof error === 'string' ? error : ''

  const rowClass = [
    'kit-input__row',
    SIZE_CLASS[size],
    invalid ? 'kit-input__row--error' : '',
    disabled ? 'kit-input__row--disabled' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <View className={['kit-input', className].filter(Boolean).join(' ')}>
      <View className={rowClass}>
        {prefixIcon ? <View className="kit-input__icon">{prefixIcon}</View> : null}
        <NutInput
          className="kit-input__field"
          style={{ flex: 1, minWidth: 0 }}
          plain
          type={TYPE_MAP[type]}
          {...(value !== undefined ? { value } : {})}
          {...(defaultValue !== undefined ? { defaultValue } : {})}
          {...(placeholder !== undefined ? { placeholder } : {})}
          placeholderClass="kit-input__placeholder"
          disabled={disabled}
          readOnly={readOnly}
          {...(maxLength !== undefined ? { maxLength } : {})}
          {...(onChange ? { onChange } : {})}
        />
        {suffixIcon ? <View className="kit-input__icon">{suffixIcon}</View> : null}
      </View>
      {errorText ? <View className="kit-input__error">{errorText}</View> : null}
    </View>
  )
}
