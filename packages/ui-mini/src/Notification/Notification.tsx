/**
 * Notification 通知（mini：小程序 / 移动 H5）—— View+Text 自建，
 * 通知卡片，支持自动关闭、类型、关闭按钮。
 */
import { Text, View } from '@tarojs/components'
import { useEffect } from 'react'
import type { NotificationProps, NotificationType } from './Notification.types'
import './Notification.scss'

const typeConfig: Record<NotificationType, { border: string; icon: string; iconColor: string }> = {
  success: {
    border: 'var(--kit-color-success-default)',
    icon: '✓',
    iconColor: 'var(--kit-color-success-default)',
  },
  info: {
    border: 'var(--kit-color-info-default)',
    icon: 'ℹ',
    iconColor: 'var(--kit-color-info-default)',
  },
  warning: {
    border: 'var(--kit-color-warning-default)',
    icon: '⚠',
    iconColor: 'var(--kit-color-warning-default)',
  },
  error: {
    border: 'var(--kit-color-danger-default)',
    icon: '✕',
    iconColor: 'var(--kit-color-danger-default)',
  },
}

export function Notification({
  title,
  description,
  type = 'info',
  duration = 4500,
  onClose,
  closable = true,
  icon,
  className = '',
}: NotificationProps) {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => onClose?.(), duration)
      return () => clearTimeout(timer)
    }
    return undefined
  }, [duration, onClose])

  const config = typeConfig[type]

  return (
    <View
      className={`kit-notification ${className}`.trim()}
      style={{ borderLeftColor: config.border }}
    >
      <Text className="kit-notification__icon" style={{ color: config.iconColor }}>
        {icon ?? config.icon}
      </Text>
      <View className="kit-notification__content">
        {title ? <Text className="kit-notification__title">{title}</Text> : null}
        {description ? <Text className="kit-notification__desc">{description}</Text> : null}
      </View>
      {closable ? (
        <Text
          className="kit-notification__close"
          {...(onClose !== undefined ? { onClick: onClose } : {})}
        >
          ×
        </Text>
      ) : null}
    </View>
  )
}
