/**
 * Input（native：iOS / Android）—— Tamagui Input 封装。
 * 视觉值只引用 Tamagui token（$xxx，由 @kit/tokens native 产物并入 tamagui.config）。
 */
import { Input as TamInput, Stack, Text, XStack, YStack, styled } from 'tamagui'
import type { InputProps, InputSize, InputType } from './Input.types'

/** 输入行容器（边框/背景/圆角/聚焦态由业务配合 focus 状态，此处提供静态结构） */
const Field = styled(XStack, {
  name: 'KitInputField',
  alignItems: 'center',
  gap: '$2',
  width: '100%',
  borderRadius: '$md',
  borderWidth: 1,
  borderColor: '$borderDefault',
  backgroundColor: '$bgCard',
  paddingHorizontal: '$3',
  variants: {
    size: {
      sm: { height: '$controlSm' },
      md: { height: '$controlMd' },
      lg: { height: '$controlLg' },
    },
    invalid: { true: { borderColor: '$borderDanger' } },
    disabled: { true: { backgroundColor: '$bgHover' } },
  },
})

const TextInput = styled(TamInput, {
  name: 'KitInputText',
  flex: 1,
  minWidth: 0,
  borderWidth: 0,
  outlineWidth: 0,
  backgroundColor: 'transparent',
  color: '$textPrimary',
  variants: {
    size: {
      sm: { fontSize: '$bodySm', height: '$controlSm' },
      md: { fontSize: '$bodyMd', height: '$controlMd' },
      lg: { fontSize: '$bodyLg', height: '$controlLg' },
    },
  },
})

/** 统一 type -> RN keyboardType / secureTextEntry */
const KEYBOARD_MAP: Record<
  Exclude<InputType, 'password' | 'text'>,
  'numeric' | 'phone-pad' | 'email-address' | 'default'
> = {
  number: 'numeric',
  tel: 'phone-pad',
  email: 'email-address',
  search: 'default',
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
  accessibilityLabel,
  onChange,
}: InputProps) {
  const invalid = Boolean(error)
  const errorText = typeof error === 'string' ? error : ''
  const editable = !disabled && !readOnly

  return (
    <YStack gap="$1" width="100%">
      <Field size={size} invalid={invalid} disabled={disabled}>
        {prefixIcon ? <Stack>{prefixIcon}</Stack> : null}
        <TextInput
          size={size as InputSize}
          value={value}
          {...(defaultValue !== undefined ? { defaultValue } : {})}
          placeholder={placeholder}
          placeholderTextColor="$textTertiary"
          editable={editable}
          {...(maxLength !== undefined ? { maxLength } : {})}
          {...(type === 'password' ? { secureTextEntry: true } : {})}
          {...(type !== 'password' && type !== 'text' ? { keyboardType: KEYBOARD_MAP[type] } : {})}
          {...(accessibilityLabel !== undefined ? { accessibilityLabel } : {})}
          accessibilityState={{ disabled }}
          {...(errorText ? { accessibilityHint: errorText } : {})}
          {...(onChange ? { onChangeText: onChange } : {})}
        />
        {suffixIcon ? <Stack>{suffixIcon}</Stack> : null}
      </Field>
      {errorText ? (
        <Text color="$textDanger" fontSize="$bodySm" accessibilityRole="alert">
          {errorText}
        </Text>
      ) : null}
    </YStack>
  )
}
