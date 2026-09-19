/**
 * ActionSheet 底部动作面板（native：iOS / Android）—— RN Modal + Tamagui 底部面板。
 */
import { Modal, Pressable as RNPressable } from 'react-native'
import { Text, YStack } from 'tamagui'
import type { ActionSheetProps } from './ActionSheet.types'

export function ActionSheet({
  open,
  actions,
  title,
  cancelText = '取消',
  onSelect,
  onClose,
  style,
}: ActionSheetProps) {
  return (
    <Modal visible={open} transparent animationType="slide" onRequestClose={onClose}>
      <RNPressable
        style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.45)', justifyContent: 'flex-end' }}
        onPress={onClose}
      >
        {/* 拦截冒泡：点击面板本身不关闭 */}
        <RNPressable onPress={() => undefined}>
          <YStack
            gap={8}
            padding={12}
            paddingBottom={32}
            backgroundColor="$bgCard"
            borderTopLeftRadius={20}
            borderTopRightRadius={20}
            style={style}
          >
            {title ? (
              <Text fontSize={12} color="$textTertiary" textAlign="center" paddingVertical={8}>
                {title}
              </Text>
            ) : null}
            {actions.map((action) => (
              <RNPressable
                key={action.key}
                disabled={action.disabled}
                onPress={() => {
                  onSelect?.(action.key)
                  onClose?.()
                }}
              >
                <YStack backgroundColor="$bgSecondary" borderRadius={12} paddingVertical={14}>
                  <Text
                    fontSize={16}
                    textAlign="center"
                    color={action.danger ? '$dangerDefault' : '$textPrimary'}
                    opacity={action.disabled ? 0.5 : 1}
                  >
                    {action.label}
                  </Text>
                </YStack>
              </RNPressable>
            ))}
            <RNPressable onPress={onClose}>
              <YStack
                backgroundColor="$bgSecondary"
                borderRadius={12}
                paddingVertical={14}
                marginTop={8}
              >
                <Text fontSize={16} textAlign="center" color="$textSecondary">
                  {cancelText}
                </Text>
              </YStack>
            </RNPressable>
          </YStack>
        </RNPressable>
      </RNPressable>
    </Modal>
  )
}
