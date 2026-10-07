/**
 * Button（native：iOS / Android）—— Tamagui 封装。
 * 视觉值只引用 Tamagui token（$xxx，由 @kit/tokens 的 native 产物并入 tamagui.config）；
 * 必须带 accessibility* 属性；热区 ≥ 44px（touch-min）。
 */
import { ActivityIndicator } from 'react-native'
import { Stack, Text, styled } from 'tamagui'
import type { StackProps } from 'tamagui'
import type { ButtonProps, ButtonSize, ButtonVariant } from './Button.types'

const Root = styled(Stack, {
  name: 'KitButton',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  borderRadius: '$md',
  minHeight: '$touchMin',
  flexShrink: 0,
})

/** 各变体容器样式（颜色全部走 token；pressStyle 为按压反馈） */
const VARIANT_ROOT: Record<ButtonVariant, StackProps> = {
  primary: {
    backgroundColor: '$primaryDefault',
    pressStyle: { backgroundColor: '$primaryActive' },
  },
  secondary: {
    backgroundColor: '$bgCard',
    borderWidth: 1,
    borderColor: '$borderDefault',
    pressStyle: { backgroundColor: '$bgHover' },
  },
  ghost: {
    backgroundColor: 'transparent',
    pressStyle: { backgroundColor: '$bgHover' },
  },
  danger: {
    backgroundColor: '$dangerDefault',
    pressStyle: { backgroundColor: '$dangerHover' },
  },
  link: {
    backgroundColor: 'transparent',
  },
}

/** 各变体文字颜色 token */
const VARIANT_TEXT: Record<ButtonVariant, string> = {
  primary: '$primaryText',
  secondary: '$textPrimary',
  ghost: '$textPrimary',
  danger: '$white',
  link: '$textLink',
}

const SIZE_STYLES: Record<ButtonSize, StackProps> = {
  sm: { height: '$controlSm', paddingHorizontal: '$3' },
  md: { height: '$controlMd', paddingHorizontal: '$4' },
  lg: { height: '$controlLg', paddingHorizontal: '$6' },
}

const SIZE_FONT: Record<ButtonSize, string> = {
  sm: '$bodySm',
  md: '$bodyMd',
  lg: '$bodyLg',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  block = false,
  icon,
  accessibilityLabel,
  onPress,
}: ButtonProps) {
  const inactive = disabled || loading
  const textColor = VARIANT_TEXT[variant]

  return (
    <Root
      {...VARIANT_ROOT[variant]}
      {...SIZE_STYLES[size]}
      width={block ? '100%' : undefined}
      opacity={inactive ? 0.5 : 1}
      disabled={inactive}
      onPress={inactive ? undefined : onPress}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      accessibilityState={{ disabled: inactive, busy: loading }}
    >
      {loading ? <ActivityIndicator size="small" color={textColor} /> : icon}
      {children !== undefined &&
        (typeof children === 'string' || typeof children === 'number' ? (
          <Text color={textColor} fontSize={SIZE_FONT[size]} fontWeight={500}>
            {children}
          </Text>
        ) : (
          children
        ))}
    </Root>
  )
}
