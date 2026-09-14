/**
 * Toast（native：iOS / Android）—— 自建绝对定位轻提示（不用 Modal，避免阻断下层交互）。
 * 视觉值只引用 Tamagui token；duration 到时由内部计时器请求关闭。纯受控。
 */
import { useEffect, useRef } from 'react'
import { Spinner, Text, XStack, YStack } from 'tamagui'
import type { ToastProps, ToastType } from './Toast.types'

/** 各语义类型的图标颜色（Tamagui token） */
const ICON_COLOR: Record<ToastType, string> = {
  info: '$primaryDefault',
  success: '$successDefault',
  warning: '$warningDefault',
  error: '$dangerDefault',
  loading: '$primaryDefault',
}

/** 非 loading 类型的字形图标 */
const GLYPH: Record<Exclude<ToastType, 'loading'>, string> = {
  success: '✓',
  error: '✕',
  warning: '!',
  info: 'i',
}

export function Toast({
  open,
  onOpenChange,
  message,
  type = 'info',
  duration = 2400,
  position = 'center',
  onClose,
  accessibilityLabel,
}: ToastProps) {
  // 回调存 ref：计时器依赖只放 open/duration，避免父级内联函数每次渲染重置计时
  const cb = useRef({ onOpenChange, onClose })
  cb.current = { onOpenChange, onClose }

  useEffect(() => {
    if (open && duration > 0) {
      const timer = setTimeout(() => {
        cb.current.onOpenChange?.(false)
        cb.current.onClose?.()
      }, duration)
      return () => clearTimeout(timer)
    }
    return undefined
  }, [open, duration])

  if (!open) return null

  return (
    <YStack
      position="absolute"
      left={0}
      right={0}
      alignItems="center"
      paddingHorizontal="$4"
      pointerEvents="none"
      zIndex={1000}
      {...(position === 'top'
        ? { top: '$4' }
        : position === 'bottom'
          ? { bottom: '$4' }
          : { top: 0, bottom: 0, justifyContent: 'center' })}
    >
      <XStack
        maxWidth="90%"
        alignItems="center"
        gap="$2"
        backgroundColor="$bgCard"
        borderWidth={1}
        borderColor="$borderDefault"
        borderRadius="$md"
        paddingVertical="$3"
        paddingHorizontal="$4"
        accessibilityRole="alert"
        {...(accessibilityLabel !== undefined ? { accessibilityLabel } : {})}
      >
        {type === 'loading' ? (
          <Spinner size="small" color="$primaryDefault" />
        ) : (
          <Text fontSize="$iconSizeMd" fontWeight="bold" color={ICON_COLOR[type]}>
            {GLYPH[type]}
          </Text>
        )}
        <Text fontSize="$bodyMd" color="$textPrimary" marginLeft="$1">
          {message}
        </Text>
      </XStack>
    </YStack>
  )
}
