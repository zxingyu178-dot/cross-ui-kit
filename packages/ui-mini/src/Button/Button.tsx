/**
 * Button（mini：小程序 / H5）—— @nutui/nutui-react-taro Button 的统一封装。
 * 对外只暴露三栈统一的 props（variant/size/loading/.../onPress），
 * 不把 NutUI 原始 type/fill API 泄露给业务；主题色由全局 NutUI CSS 变量覆盖（token 产物）。
 */
import { Button as NutButton } from '@nutui/nutui-react-taro'
import type { ButtonProps } from './Button.types'
import './Button.scss'

/** 统一 variant -> NutUI type/fill */
const VARIANT_MAP = {
  primary: { type: 'primary', fill: 'solid' },
  secondary: { type: 'default', fill: 'solid' },
  ghost: { type: 'default', fill: 'none' },
  danger: { type: 'danger', fill: 'solid' },
  link: { type: 'default', fill: 'none' },
} as const

/** 统一 size -> NutUI size */
const SIZE_MAP = {
  sm: 'small',
  md: 'normal',
  lg: 'large',
} as const

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  block = false,
  icon,
  className = '',
  onPress,
}: ButtonProps) {
  const mapped = VARIANT_MAP[variant]
  const isLink = variant === 'link'
  const cls = ['kit-button', isLink ? 'kit-button--link' : '', className].filter(Boolean).join(' ')

  return (
    <NutButton
      className={cls}
      type={mapped.type}
      fill={mapped.fill}
      size={SIZE_MAP[size]}
      disabled={disabled || loading}
      loading={loading}
      block={block}
      // exactOptionalPropertyTypes：可选值仅在存在时传入，不显式传 undefined
      {...(icon !== undefined ? { icon } : {})}
      {...(onPress ? { onClick: onPress } : {})}
    >
      {children}
    </NutButton>
  )
}
