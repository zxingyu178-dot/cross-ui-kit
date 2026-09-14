/**
 * Toast（mini：小程序 / 移动 H5）—— NutUI Toast 受控封装（visible/duration/onClose）。
 * 弹层定位与计时交给 NutUI，卡片视觉与图标自建（scss 全量引用 --kit-* token）。
 * 轻量、短暂、不阻断交互；纯受控，到时只发 onOpenChange(false) 请求。
 */
import { Toast as NutToast } from '@nutui/nutui-react-taro'
import { Text } from '@tarojs/components'
import type { ReactNode } from 'react'
import type { ToastPosition, ToastProps, ToastType } from './Toast.types'
import './Toast.scss'

/** 位置映射到 NutUI（NutUI 居中称 middle） */
const NUT_POSITION: Record<ToastPosition, 'top' | 'middle' | 'bottom'> = {
  top: 'top',
  center: 'middle',
  bottom: 'bottom',
}

/** 语义图标：success/error/warning/info 自建 Unicode（颜色可控），loading 用 NutUI 内置转圈 */
function renderIcon(type: ToastType): ReactNode {
  switch (type) {
    case 'success':
      return <Text className="kit-toast__icon kit-toast__icon--success">✓</Text>
    case 'error':
      return <Text className="kit-toast__icon kit-toast__icon--error">✕</Text>
    case 'warning':
      return <Text className="kit-toast__icon kit-toast__icon--warning">!</Text>
    case 'loading':
      return 'loading'
    case 'info':
    default:
      return <Text className="kit-toast__icon kit-toast__icon--info">i</Text>
  }
}

export function Toast({
  open,
  onOpenChange,
  message,
  type = 'info',
  duration = 2400,
  position = 'center',
  onClose,
  className = '',
}: ToastProps) {
  return (
    <NutToast
      visible={open}
      content={message}
      icon={renderIcon(type)}
      position={NUT_POSITION[position]}
      // NutUI duration=0 会立即关闭，常驻（loading）给一个足够大的值，由外部 visible 控制关闭
      duration={duration <= 0 ? 600000 : duration}
      onClose={() => {
        onOpenChange?.(false)
        onClose?.()
      }}
      className={`kit-toast kit-toast--${type} ${className}`.trim()}
      contentClassName="kit-toast__content"
    />
  )
}
