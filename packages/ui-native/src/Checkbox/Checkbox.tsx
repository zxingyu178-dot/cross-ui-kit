/**
 * Checkbox（native：iOS / Android）—— Tamagui Checkbox 封装。
 * 视觉值只引用 Tamagui token；选中底色由铺满的 Indicator 承担（受控/非受控均正确）。
 */
import { Pressable } from 'react-native'
import { Checkbox as TamCheckbox, Text, XStack } from 'tamagui'
import type { CheckboxProps } from './Checkbox.types'

export function Checkbox({
  checked,
  defaultChecked,
  disabled = false,
  indeterminate = false,
  label,
  error = false,
  accessibilityLabel,
  onChange,
}: CheckboxProps) {
  const rootChecked = indeterminate ? 'indeterminate' : checked
  const a11yLabel = accessibilityLabel ?? (typeof label === 'string' ? label : undefined)

  const box = (
    <TamCheckbox
      width={20}
      height={20}
      borderRadius="$sm"
      borderWidth={1}
      borderColor={error ? '$borderDanger' : '$borderDefault'}
      backgroundColor={disabled ? '$bgHover' : '$bgCard'}
      disabled={disabled}
      {...(rootChecked !== undefined ? { checked: rootChecked } : {})}
      {...(defaultChecked !== undefined ? { defaultChecked } : {})}
      {...(a11yLabel !== undefined ? { accessibilityLabel: a11yLabel } : {})}
      onCheckedChange={(v) => onChange?.(v === true)}
    >
      <TamCheckbox.Indicator
        width="100%"
        height="100%"
        alignItems="center"
        justifyContent="center"
        backgroundColor="$primaryDefault"
        borderRadius="$sm"
      >
        <Text color="$primaryText" fontSize={12} lineHeight={16}>
          {indeterminate ? '−' : '✓'}
        </Text>
      </TamCheckbox.Indicator>
    </TamCheckbox>
  )

  if (!label) {
    return box
  }

  return (
    <XStack gap={8} alignItems="center" opacity={disabled ? 0.5 : 1}>
      {box}
      <Pressable
        accessibilityRole="none"
        disabled={disabled || checked === undefined}
        onPress={() => checked !== undefined && onChange?.(!checked)}
      >
        <Text color={disabled ? '$textDisabled' : '$textPrimary'} fontSize="$bodyMd">
          {label}
        </Text>
      </Pressable>
    </XStack>
  )
}
