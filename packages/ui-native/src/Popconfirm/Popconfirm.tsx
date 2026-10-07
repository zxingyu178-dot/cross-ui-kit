/**
 * Popconfirm 气泡确认（native：iOS / Android）—— Tamagui XStack+YStack+Text 自建，
 * 点击触发切换显示，确认/取消按钮，绝对定位气泡。
 */
import { useState } from 'react'
import { Text, XStack, YStack } from 'tamagui'
import type { PopconfirmProps } from './Popconfirm.types'

export function Popconfirm({
  title,
  description,
  onConfirm,
  onCancel,
  okText = '确定',
  cancelText = '取消',
  trigger,
  placement = 'bottom',
  style,
}: PopconfirmProps) {
  const [open, setOpen] = useState(false)

  const handleConfirm = () => {
    onConfirm?.()
    setOpen(false)
  }

  const handleCancel = () => {
    onCancel?.()
    setOpen(false)
  }

  const placementStyle =
    placement === 'bottom'
      ? { top: '100%', marginTop: 4 }
      : placement === 'top'
        ? { bottom: '100%', marginBottom: 4 }
        : placement === 'right'
          ? { left: '100%', marginLeft: 4, top: 0 }
          : { right: '100%', marginRight: 4, top: 0 }

  return (
    <XStack position="relative" style={style}>
      <XStack onPress={() => setOpen(!open)}>{trigger}</XStack>
      {open ? (
        <YStack
          position="absolute"
          width={256}
          padding={16}
          borderWidth={1}
          borderColor="$borderDefault"
          borderRadius="$md"
          backgroundColor="$bgCard"
          zIndex={100}
          {...placementStyle}
        >
          <Text fontSize="$bodyMd" fontWeight={500} color="$textPrimary">
            {title}
          </Text>
          {description ? (
            <Text fontSize="$bodySm" color="$textSecondary" marginTop={4}>
              {description}
            </Text>
          ) : null}
          <XStack justifyContent="flex-end" gap={8} marginTop={16}>
            <XStack
              paddingHorizontal={12}
              paddingVertical={6}
              borderRadius="$sm"
              borderWidth={1}
              borderColor="$borderDefault"
              backgroundColor="$bgCard"
              onPress={handleCancel}
            >
              <Text fontSize="$bodySm" color="$textSecondary">
                {cancelText}
              </Text>
            </XStack>
            <XStack
              paddingHorizontal={12}
              paddingVertical={6}
              borderRadius="$sm"
              backgroundColor="$primaryDefault"
              onPress={handleConfirm}
            >
              <Text fontSize="$bodySm" color="#fff">
                {okText}
              </Text>
            </XStack>
          </XStack>
        </YStack>
      ) : null}
    </XStack>
  )
}
