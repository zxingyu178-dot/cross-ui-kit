/**
 * BackTop 回到顶部（native：iOS / Android）—— Tamagui XStack 固定定位按钮，
 * 点击触发回调（滚动到顶部由使用方处理）。
 */
import { Text, XStack } from 'tamagui'
import type { BackTopProps } from './BackTop.types'

export function BackTop({
  visibilityHeight: _visibilityHeight = 400,
  onClick,
  duration: _duration = 300,
  style,
}: BackTopProps) {
  const handleClick = () => {
    onClick?.()
  }

  return (
    <XStack
      position="absolute"
      bottom={24}
      right={24}
      zIndex={1000}
      width={40}
      height={40}
      borderRadius={20}
      backgroundColor="$primaryDefault"
      alignItems="center"
      justifyContent="center"
      shadowColor="#000"
      shadowOffset={{ width: 0, height: 4 }}
      shadowOpacity={0.15}
      shadowRadius={12}
      elevation={8}
      onPress={handleClick}
      style={style}
    >
      <Text fontSize={18} color="#fff" fontWeight="bold">
        ↑
      </Text>
    </XStack>
  )
}
