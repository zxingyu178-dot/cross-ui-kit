/**
 * Tooltip 文字提示气泡（native：iOS / Android）—— Tamagui XStack+YStack 自建绝对定位浮层，
 * 点击触发切换（移动端无 hover）；颜色/字号/圆角只引用 Tamagui token，
 * 与 web/mini 的四向 placement、深色气泡（$bgInverse / $textInverse）对齐。
 */
import { useState } from 'react'
import { Text, XStack, YStack } from 'tamagui'
import type { TooltipPlacement, TooltipProps } from './Tooltip.types'

const BUBBLE_POS: Record<TooltipPlacement, Record<string, string | number>> = {
  top: { bottom: '100%', left: '50%' },
  bottom: { top: '100%', left: '50%' },
  left: { right: '100%', top: '50%' },
  right: { left: '100%', top: '50%' },
}

export function Tooltip({
  children,
  content,
  placement = 'top',
  sideOffset = 4,
  open,
  onOpenChange,
  defaultOpen,
  disabled = false,
  style,
}: TooltipProps) {
  const [innerOpen, setInnerOpen] = useState(defaultOpen ?? false)
  const isControlled = open !== undefined
  const visible = isControlled ? open : innerOpen

  const toggle = () => {
    const next = !visible
    if (!isControlled) setInnerOpen(next)
    onOpenChange?.(next)
  }

  if (disabled) {
    return <XStack style={style}>{children}</XStack>
  }

  const offsetMargin = {
    top: { marginBottom: sideOffset },
    bottom: { marginTop: sideOffset },
    left: { marginRight: sideOffset },
    right: { marginLeft: sideOffset },
  }[placement]

  const transform =
    placement === 'top' || placement === 'bottom'
      ? [{ translateX: '-50%' as const }]
      : [{ translateY: '-50%' as const }]

  return (
    <XStack position="relative" style={style}>
      <XStack onPress={toggle}>{children}</XStack>
      {visible ? (
        <YStack
          position="absolute"
          zIndex={1060}
          maxWidth={200}
          paddingHorizontal={12}
          paddingVertical={4}
          borderRadius="$sm"
          backgroundColor="$bgInverse"
          transform={transform}
          {...BUBBLE_POS[placement]}
          {...offsetMargin}
        >
          <Text fontSize="$bodySm" color="$textInverse" lineHeight={1.4}>
            {content}
          </Text>
        </YStack>
      ) : null}
    </XStack>
  )
}
