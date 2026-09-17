/**
 * Alert 警告提示条（native：iOS / Android）—— Tamagui XStack+YStack+Text 自建，
 * 四语义色 + 可关闭 + 图标；颜色只引用 Tamagui token，与 web/mini soft 底 + 语义描边对齐。
 */
import { useState } from 'react'
import { Text, XStack, YStack } from 'tamagui'
import type { AlertProps, AlertType } from './Alert.types'

const TYPE_BG: Record<AlertType, string> = {
  info: '$infoBg',
  success: '$successBg',
  warning: '$warningBg',
  error: '$dangerBg',
}

const TYPE_BORDER: Record<AlertType, string> = {
  info: '$infoBorder',
  success: '$successBorder',
  warning: '$warningBorder',
  error: '$dangerBorder',
}

const TYPE_ICON_COLOR: Record<AlertType, string> = {
  info: '$infoDefault',
  success: '$successDefault',
  warning: '$warningDefault',
  error: '$dangerDefault',
}

const TYPE_ICON: Record<AlertType, string> = {
  info: 'i',
  success: '✓',
  warning: '!',
  error: '×',
}

export function Alert({
  type = 'info',
  title,
  description,
  closable = false,
  onClose,
  showIcon = true,
  action,
  style,
}: AlertProps) {
  const [visible, setVisible] = useState(true)
  if (!visible) return null

  const handleClose = () => {
    setVisible(false)
    onClose?.()
  }

  return (
    <XStack
      padding={12}
      paddingHorizontal={16}
      borderRadius="$md"
      borderWidth={1}
      backgroundColor={TYPE_BG[type]}
      borderColor={TYPE_BORDER[type]}
      gap={12}
      alignItems="flex-start"
      style={style}
    >
      {showIcon ? (
        <XStack
          width={18}
          height={18}
          borderRadius={999}
          alignItems="center"
          justifyContent="center"
          marginTop={2}
          flexShrink={0}
        >
          <Text fontSize={12} fontWeight="700" color={TYPE_ICON_COLOR[type]} lineHeight={1}>
            {TYPE_ICON[type]}
          </Text>
        </XStack>
      ) : null}
      <YStack flex={1} gap={4} minWidth={0}>
        {title ? (
          <Text fontSize="$bodyMd" fontWeight="$medium" color="$textPrimary" lineHeight={1.4}>
            {title}
          </Text>
        ) : null}
        {description ? (
          <Text fontSize="$bodySm" color="$textSecondary" lineHeight={1.5}>
            {description}
          </Text>
        ) : null}
      </YStack>
      {action ? <XStack flexShrink={0}>{action}</XStack> : null}
      {closable ? (
        <XStack flexShrink={0} padding={2} onPress={handleClose}>
          <Text fontSize={16} color="$textTertiary" lineHeight={1}>
            ×
          </Text>
        </XStack>
      ) : null}
    </XStack>
  )
}
