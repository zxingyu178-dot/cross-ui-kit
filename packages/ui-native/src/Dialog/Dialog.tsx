/**
 * Dialog（native：iOS / Android）—— RN Modal（透明、淡入）+ Tamagui 居中卡片。
 * 视觉值只引用 Tamagui token（Tamagui 组件 props 上才解析 token，RN 原生 style 不解析）；
 * 遮罩为通用中性黑半透明（scrim，非品牌 token）。纯受控：只发 onOpenChange(false) 请求。
 */
import { Modal, Pressable as RNPressable } from 'react-native'
import { Text, XStack, YStack } from 'tamagui'
import { Button } from '../Button'
import type { DialogProps } from './Dialog.types'

export function Dialog({
  open,
  onOpenChange,
  title,
  description,
  children,
  footer,
  showCancel = true,
  confirmText = '确定',
  cancelText = '取消',
  confirmLoading = false,
  closeOnOverlayClick = true,
  onConfirm,
  onCancel,
  accessibilityLabel,
}: DialogProps) {
  const requestClose = () => onOpenChange?.(false)
  const handleConfirm = () => {
    // onConfirm 返回 false 表示“暂不关闭”（异步提交场景：外部完成后再 setOpen(false)）
    if (onConfirm?.() === false) return
    requestClose()
  }
  const handleCancel = () => {
    onCancel?.()
    requestClose()
  }

  const body =
    children ??
    (description ? (
      <Text color="$textTertiary" fontSize="$bodyMd" lineHeight="$normal">
        {description}
      </Text>
    ) : null)

  return (
    <Modal
      visible={open}
      transparent
      animationType="fade"
      onRequestClose={() => {
        // Android 返回键：等同遮罩关闭
        if (closeOnOverlayClick) requestClose()
      }}
    >
      {/* 遮罩：点击请求关闭（RN 原生 Pressable，固定半透明 scrim） */}
      <RNPressable
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.45)',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          if (closeOnOverlayClick) requestClose()
        }}
      >
        {/* 拦截冒泡：点击卡片本身不关闭 */}
        <RNPressable onPress={() => undefined}>
          <YStack
            width="88%"
            backgroundColor="$bgCard"
            borderWidth={1}
            borderColor="$borderDefault"
            borderRadius="$lg"
            padding="$4"
            accessibilityRole="alert"
            {...(accessibilityLabel !== undefined ? { accessibilityLabel } : {})}
          >
            <XStack alignItems="center" justifyContent="space-between" marginBottom="$3">
              {title ? (
                <Text flex={1} fontSize="$titleSm" fontWeight="medium" color="$textPrimary">
                  {title}
                </Text>
              ) : (
                <YStack flex={1} />
              )}
              {/* 关闭钮：热区 touch-min（Tamagui XStack 解析 token） */}
              <XStack
                width="$touchMin"
                height="$touchMin"
                alignItems="center"
                justifyContent="center"
                accessibilityLabel="关闭"
                accessibilityRole="button"
                onPress={handleCancel}
                pressStyle={{ opacity: 0.6 }}
              >
                <Text color="$textTertiary" fontSize="$bodyLg">
                  ✕
                </Text>
              </XStack>
            </XStack>

            {body ? <YStack marginBottom="$4">{body}</YStack> : null}

            {footer === undefined ? (
              <XStack gap="$3" justifyContent="flex-end">
                {showCancel ? (
                  <Button variant="secondary" onPress={handleCancel}>
                    {cancelText}
                  </Button>
                ) : null}
                <Button variant="primary" loading={confirmLoading} onPress={handleConfirm}>
                  {confirmText}
                </Button>
              </XStack>
            ) : (
              footer
            )}
          </YStack>
        </RNPressable>
      </RNPressable>
    </Modal>
  )
}
