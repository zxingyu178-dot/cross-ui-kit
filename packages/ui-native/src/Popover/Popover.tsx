/**
 * Popover 弹出层（native：iOS / Android）—— Tamagui XStack+YStack 自建，
 * 点击触发切换显示，绝对定位弹出内容。
 */
import { useState } from 'react'
import { XStack, YStack } from 'tamagui'
import type { PopoverProps } from './Popover.types'

export function Popover({
  trigger,
  content,
  align = 'center',
  side = 'bottom',
  style,
}: PopoverProps) {
  const [open, setOpen] = useState(false)

  const sideStyle =
    side === 'top'
      ? { bottom: '100%', marginBottom: 4 }
      : side === 'right'
        ? { left: '100%', marginLeft: 4, top: 0 }
        : side === 'left'
          ? { right: '100%', marginRight: 4, top: 0 }
          : { top: '100%', marginTop: 4 }

  const alignStyle =
    align === 'start' ? { left: 0 } : align === 'end' ? { right: 0 } : { left: '50%' }

  return (
    <XStack position="relative" style={style}>
      <XStack onPress={() => setOpen(!open)}>{trigger}</XStack>
      {open ? (
        <YStack
          position="absolute"
          minWidth={200}
          padding={16}
          borderWidth={1}
          borderColor="$borderDefault"
          borderRadius="$md"
          backgroundColor="$bgCard"
          zIndex={100}
          {...sideStyle}
          {...(align === 'center' ? {} : alignStyle)}
        >
          {content}
        </YStack>
      ) : null}
    </XStack>
  )
}
