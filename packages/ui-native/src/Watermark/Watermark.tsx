/**
 * Watermark 水印（native：iOS / Android）—— Tamagui XStack+YStack+Text 自建，
 * 绝对定位覆盖在子元素上方，重复文字。
 */
import { Text, XStack, YStack } from 'tamagui'
import type { WatermarkProps } from './Watermark.types'

export function Watermark({
  text = 'Watermark',
  color = 'rgba(0, 0, 0, 0.15)',
  fontSize = 14,
  rotate = -22,
  gap = 100,
  opacity = 1,
  children,
  style,
}: WatermarkProps) {
  const rows = 4
  const cols = 3
  const items: { row: number; col: number }[] = []
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      items.push({ row: r, col: c })
    }
  }

  return (
    <YStack position="relative" style={style}>
      {children}
      <YStack
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        overflow="hidden"
        opacity={opacity}
        zIndex={50}
      >
        {items.map((item) => (
          <XStack
            key={`${item.row}-${item.col}`}
            position="absolute"
            left={item.col * gap}
            top={item.row * gap}
            style={{ transform: [{ rotate: `${rotate}deg` }] }}
          >
            <Text fontSize={fontSize} color={color}>
              {text}
            </Text>
          </XStack>
        ))}
      </YStack>
    </YStack>
  )
}
