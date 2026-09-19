/**
 * TabBar 底部标签栏（native：iOS / Android）。
 */
import { useState } from 'react'
import { Text, XStack, YStack } from 'tamagui'
import type { TabBarProps, TabBarItem } from './TabBar.types'

export function TabBar({ items, activeKey, defaultActiveKey, onChange, style }: TabBarProps) {
  const [inner, setInner] = useState(defaultActiveKey ?? items[0]?.key)
  const current = activeKey ?? inner

  const select = (key: string) => {
    if (activeKey === undefined) setInner(key)
    onChange?.(key)
  }

  return (
    <XStack
      borderTopWidth={1}
      borderTopColor="$borderDefault"
      backgroundColor="$bgCard"
      style={style}
    >
      {items.map((item: TabBarItem) => {
        const active = item.key === current
        return (
          <YStack
            key={item.key}
            flex={1}
            alignItems="center"
            justifyContent="center"
            gap={4}
            paddingVertical={8}
            onPress={() => select(item.key)}
          >
            {item.icon ? <Text fontSize={18}>{item.icon}</Text> : null}
            <Text fontSize={12} color={active ? '$primaryDefault' : '$textSecondary'}>
              {item.label}
            </Text>
            {item.badge ? (
              <YStack
                position="absolute"
                top={4}
                right="25%"
                minWidth={16}
                height={16}
                paddingHorizontal={4}
                borderRadius={8}
                backgroundColor="$dangerDefault"
                alignItems="center"
                justifyContent="center"
              >
                <Text fontSize={10} color="#ffffff">
                  {item.badge}
                </Text>
              </YStack>
            ) : null}
          </YStack>
        )
      })}
    </XStack>
  )
}
