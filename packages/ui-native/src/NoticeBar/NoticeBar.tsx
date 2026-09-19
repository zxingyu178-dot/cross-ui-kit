/**
 * NoticeBar 通知栏（native：iOS / Android）。
 */
import { Text, XStack, YStack } from 'tamagui'
import type { NoticeBarProps } from './NoticeBar.types'

const toneBg: Record<NonNullable<NoticeBarProps['tone']>, string> = {
  info: '$infoBg',
  success: '$successBg',
  warning: '$warningBg',
  danger: '$dangerBg',
}
const toneText: Record<NonNullable<NoticeBarProps['tone']>, string> = {
  info: '$infoDefault',
  success: '$successDefault',
  warning: '$warningDefault',
  danger: '$dangerDefault',
}

export function NoticeBar({
  content,
  icon,
  action,
  onClose,
  tone = 'info',
  style,
}: NoticeBarProps) {
  return (
    <XStack
      alignItems="center"
      gap={8}
      paddingHorizontal={12}
      paddingVertical={8}
      backgroundColor={toneBg[tone]}
      style={style}
    >
      {icon ? <YStack>{icon}</YStack> : null}
      <Text flex={1} fontSize={13} color={toneText[tone]} numberOfLines={1}>
        {content}
      </Text>
      {action ? <YStack>{action}</YStack> : null}
      {onClose ? (
        <YStack onPress={onClose} padding={4}>
          <Text fontSize={12} color={toneText[tone]}>
            ✕
          </Text>
        </YStack>
      ) : null}
    </XStack>
  )
}
