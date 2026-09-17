/**
 * DropdownMenu 下拉菜单（native：iOS / Android）—— Tamagui XStack+YStack+Text 自建，
 * 点击触发切换显示，菜单项点击回调，禁用/危险态。
 */
import { useState } from 'react'
import { Text, XStack, YStack } from 'tamagui'
import type { DropdownMenuProps } from './DropdownMenu.types'

export function DropdownMenu({ trigger, items, align = 'start', style }: DropdownMenuProps) {
  const [open, setOpen] = useState(false)

  const handleItemClick = (onClick?: () => void) => {
    onClick?.()
    setOpen(false)
  }

  return (
    <XStack position="relative" style={style}>
      <XStack onPress={() => setOpen(!open)}>{trigger}</XStack>
      {open ? (
        <YStack
          position="absolute"
          top="100%"
          marginTop={4}
          minWidth={160}
          padding={4}
          borderWidth={1}
          borderColor="$borderDefault"
          borderRadius="$md"
          backgroundColor="$bgCard"
          zIndex={100}
          {...(align === 'start' ? { left: 0 } : align === 'end' ? { right: 0 } : { left: '50%' })}
        >
          {items.map((item) => (
            <XStack
              key={item.key}
              alignItems="center"
              gap={8}
              paddingHorizontal={12}
              paddingVertical={8}
              borderRadius="$sm"
              opacity={item.disabled ? 0.4 : 1}
              onPress={() => {
                if (!item.disabled) handleItemClick(item.onClick)
              }}
            >
              {item.icon ? (
                <XStack
                  width={16}
                  height={16}
                  alignItems="center"
                  justifyContent="center"
                  flexShrink={0}
                >
                  {item.icon}
                </XStack>
              ) : null}
              <Text
                flex={1}
                fontSize="$bodySm"
                color={item.danger ? '$dangerDefault' : '$textPrimary'}
              >
                {item.label}
              </Text>
            </XStack>
          ))}
        </YStack>
      ) : null}
    </XStack>
  )
}
