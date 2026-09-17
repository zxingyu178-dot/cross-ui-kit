/**
 * Drawer 抽屉（native：iOS / Android）—— Tamagui XStack+YStack+Text 自建，
 * 遮罩层 + 抽屉内容，四方向，条件渲染，点击遮罩关闭。
 */
import { Text, XStack, YStack } from 'tamagui'
import type { DrawerProps } from './Drawer.types'

export function Drawer({
  open = false,
  onOpenChange,
  title,
  children,
  placement = 'right',
  size = 360,
  style,
}: DrawerProps) {
  if (!open) return null

  const isHorizontal = placement === 'left' || placement === 'right'

  const placementStyle =
    placement === 'right'
      ? { top: 0, right: 0, bottom: 0 }
      : placement === 'left'
        ? { top: 0, left: 0, bottom: 0 }
        : placement === 'top'
          ? { top: 0, left: 0, right: 0 }
          : { bottom: 0, left: 0, right: 0 }

  return (
    <XStack position="absolute" top={0} left={0} right={0} bottom={0} zIndex={1000} style={style}>
      <YStack
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        backgroundColor="rgba(0,0,0,0.5)"
        onPress={() => onOpenChange?.(false)}
      />
      <YStack
        position="absolute"
        backgroundColor="$bgCard"
        shadowColor="#000"
        shadowOffset={{ width: 0, height: 4 }}
        shadowOpacity={0.15}
        shadowRadius={16}
        elevation={8}
        {...placementStyle}
        style={isHorizontal ? { width: size } : { height: size }}
      >
        {title ? (
          <XStack
            alignItems="center"
            justifyContent="space-between"
            paddingHorizontal={16}
            paddingVertical={12}
            borderBottomWidth={1}
            borderBottomColor="$borderDefault"
          >
            <Text fontSize="$bodyMd" fontWeight="$medium" color="$textPrimary">
              {title}
            </Text>
            <Text
              fontSize={16}
              color="$textTertiary"
              padding={4}
              onPress={() => onOpenChange?.(false)}
            >
              ✕
            </Text>
          </XStack>
        ) : (
          <Text
            position="absolute"
            top={12}
            right={16}
            zIndex={1}
            fontSize={16}
            color="$textTertiary"
            padding={4}
            onPress={() => onOpenChange?.(false)}
          >
            ✕
          </Text>
        )}
        <YStack flex={1} padding={16}>
          {children}
        </YStack>
      </YStack>
    </XStack>
  )
}
