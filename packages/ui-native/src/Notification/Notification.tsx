/**
 * Notification 通知（native：iOS / Android）—— Tamagui XStack+YStack+Text 自建，
 * 通知卡片，支持自动关闭、类型、关闭按钮。
 */
import { useEffect } from 'react'
import { Text, XStack, YStack } from 'tamagui'
import type { NotificationProps, NotificationType } from './Notification.types'

const typeConfig: Record<NotificationType, { border: string; icon: string; iconColor: string }> = {
  success: { border: '$successDefault', icon: '✓', iconColor: '$successDefault' },
  info: { border: '$infoDefault', icon: 'ℹ', iconColor: '$infoDefault' },
  warning: { border: '$warningDefault', icon: '⚠', iconColor: '$warningDefault' },
  error: { border: '$dangerDefault', icon: '✕', iconColor: '$dangerDefault' },
}

export function Notification({
  title,
  description,
  type = 'info',
  duration = 4500,
  onClose,
  closable = true,
  icon,
  style,
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
    <XStack
      alignItems="flex-start"
      gap={12}
      width={320}
      padding={16}
      borderLeftWidth={4}
      borderLeftColor={config.border}
      borderRadius="$lg"
      backgroundColor="$bgCard"
      shadowColor="#000"
      shadowOffset={{ width: 0, height: 4 }}
      shadowOpacity={0.1}
      shadowRadius={12}
      elevation={8}
      style={style}
    >
      <Text width={20} height={20} fontSize={16} color={config.iconColor} textAlign="center">
        {icon ?? config.icon}
      </Text>
      <YStack flex={1} minWidth={0} gap={4}>
        {title ? (
          <Text fontSize="$bodySm" fontWeight="500" color="$textPrimary">
            {title}
          </Text>
        ) : null}
        {description ? (
          <Text fontSize="$caption" color="$textSecondary">
            {description}
          </Text>
        ) : null}
      </YStack>
      {closable ? (
        <Text
          width={20}
          height={20}
          fontSize={16}
          color="$textTertiary"
          textAlign="center"
          onPress={onClose}
        >
          ×
        </Text>
      ) : null}
    </XStack>
  )
}
