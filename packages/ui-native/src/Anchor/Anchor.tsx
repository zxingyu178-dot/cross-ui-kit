/**
 * Anchor 锚点（native：iOS / Android）—— Tamagui YStack+Text 自建，
 * 侧边锚点导航，点击切换激活项。
 */
import { useState } from 'react'
import { Text, YStack } from 'tamagui'
import type { AnchorItem, AnchorProps } from './Anchor.types'

export function Anchor({ items = [], activeKey, onChange, onClick, style }: AnchorProps) {
  const [innerActive, setInnerActive] = useState<string>(items[0]?.key ?? '')
  const currentActive = activeKey ?? innerActive

  const handleClick = (item: AnchorItem) => {
    setInnerActive(item.key)
    onChange?.(item.key)
    onClick?.(item.key, item.href)
  }

  return (
    <YStack
      gap={4}
      borderLeftWidth={2}
      borderLeftColor="$borderDefault"
      paddingLeft={12}
      style={style}
    >
      {items.map((item) => (
        <YStack key={item.key} paddingVertical={6} onPress={() => handleClick(item)}>
          <Text
            fontSize="$bodySm"
            fontWeight={currentActive === item.key ? '500' : '400'}
            color={currentActive === item.key ? '$primaryDefault' : '$textSecondary'}
          >
            {item.title}
          </Text>
        </YStack>
      ))}
    </YStack>
  )
}
