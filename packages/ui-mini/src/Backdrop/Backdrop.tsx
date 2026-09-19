/**
 * Backdrop 遮罩层（mini：小程序 / 移动 H5）。
 */
import { View } from '@tarojs/components'
import type { BackdropProps } from './Backdrop.types'
import './Backdrop.scss'

export function Backdrop({
  open = false,
  onClose,
  children,
  opacity = 0.5,
  className = '',
}: BackdropProps) {
  if (!open) return null
  return (
    <View
      className={`kit-backdrop ${className}`.trim()}
      style={{ backgroundColor: `rgba(0,0,0,${opacity})` }}
      {...(onClose ? { onClick: onClose } : {})}
    >
      {children}
    </View>
  )
}
