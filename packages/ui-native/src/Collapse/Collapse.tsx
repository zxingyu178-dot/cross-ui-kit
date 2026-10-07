/**
 * Collapse 折叠面板（native：iOS / Android）—— Tamagui YStack+XStack+Text 自建，
 * 受控优先，手风琴模式，禁用项，点击标题切换展开。
 */
import { useState } from 'react'
import { Text, XStack, YStack } from 'tamagui'
import type { CollapseProps } from './Collapse.types'

function toArr(v?: string | string[]): string[] {
  if (v === undefined) return []
  return Array.isArray(v) ? v : [v]
}

export function Collapse({
  items,
  activeKey,
  defaultActiveKey,
  onChange,
  accordion = false,
  style,
}: CollapseProps) {
  const isControlled = activeKey !== undefined
  const [inner, setInner] = useState<string[]>(toArr(defaultActiveKey))
  const current = isControlled ? toArr(activeKey) : inner

  const toggle = (key: string) => {
    let next: string[]
    if (accordion) {
      next = current.includes(key) ? [] : [key]
    } else {
      next = current.includes(key) ? current.filter((k) => k !== key) : [...current, key]
    }
    if (!isControlled) setInner(next)
    onChange?.(accordion ? (next[0] ?? '') : next)
  }

  return (
    <YStack gap={8} style={style}>
      {items.map((item) => {
        const open = current.includes(item.key)
        return (
          <YStack
            key={item.key}
            borderWidth={1}
            borderColor="$borderDefault"
            borderRadius="$md"
            backgroundColor="$bgCard"
            overflow="hidden"
            opacity={item.disabled ? 0.5 : 1}
          >
            <XStack
              alignItems="center"
              justifyContent="space-between"
              paddingHorizontal={16}
              paddingVertical={12}
              onPress={() => {
                if (!item.disabled) toggle(item.key)
              }}
            >
              <Text flex={1} fontSize="$bodyMd" fontWeight={500} color="$textPrimary">
                {item.title}
              </Text>
              <Text
                fontSize={12}
                color="$textTertiary"
                marginLeft={8}
                transform={open ? [{ rotate: '180deg' }] : [{ rotate: '0deg' }]}
              >
                ▼
              </Text>
            </XStack>
            {open ? (
              <YStack paddingHorizontal={16} paddingBottom={12}>
                <Text fontSize="$bodySm" color="$textSecondary" lineHeight={1.5}>
                  {item.content}
                </Text>
              </YStack>
            ) : null}
          </YStack>
        )
      })}
    </YStack>
  )
}
