/**
 * FloatButton 悬浮按钮（native：iOS / Android）—— Tamagui XStack+Text 自建，
 * absolute 定位按钮，支持图标、形状。
 */
import { Text, XStack } from 'tamagui'
import type { FloatButtonProps } from './FloatButton.types'

export function FloatButton({
  icon,
  onClick,
  type = 'primary',
  shape = 'circle',
  bottom = 24,
  right = 24,
  style,
}: FloatButtonProps) {
  return (
    <XStack position="absolute" bottom={bottom} right={right} zIndex={50} style={style}>
      <XStack
        width={48}
        height={48}
        alignItems="center"
        justifyContent="center"
        borderRadius={shape === 'circle' ? 24 : 8}
        backgroundColor={type === 'primary' ? '$primaryDefault' : '$bgCard'}
        borderWidth={type === 'default' ? 1 : 0}
        borderColor="$borderDefault"
        shadowColor="#000"
        shadowOffset={{ width: 0, height: 4 }}
        shadowOpacity={0.15}
        shadowRadius={12}
        elevation={8}
        onPress={onClick}
      >
        {icon ?? (
          <Text fontSize={20} color={type === 'primary' ? '#fff' : '$textPrimary'}>
            +
          </Text>
        )}
      </XStack>
    </XStack>
  )
}
