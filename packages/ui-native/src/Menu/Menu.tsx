/**
 * Menu 导航菜单（native：iOS / Android）—— 支持一级/二级菜单、选中高亮、水平/垂直布局。
 */
import { useState } from 'react'
import { Text, XStack, YStack } from 'tamagui'
import type { MenuItem, MenuProps } from './Menu.types'

function MenuItemComponent({
  item,
  selectedKey,
  onSelect,
  mode,
  openKeys,
  toggleOpen,
}: {
  item: MenuItem
  selectedKey?: string | undefined
  onSelect?: ((key: string) => void) | undefined
  mode: 'horizontal' | 'vertical'
  openKeys: string[]
  toggleOpen: (key: string) => void
}) {
  const hasChildren = item.children && item.children.length > 0
  const isOpen = openKeys.includes(item.key)
  const isSelected = selectedKey === item.key

  if (hasChildren) {
    return (
      <YStack>
        <XStack
          alignItems="center"
          justifyContent="space-between"
          gap={4}
          paddingHorizontal={16}
          paddingVertical={10}
          backgroundColor={isSelected ? '$primaryBg' : 'transparent'}
          opacity={item.disabled ? 0.4 : 1}
          onPress={() => !item.disabled && toggleOpen(item.key)}
        >
          <Text
            fontSize="$bodySm"
            color={isSelected ? '$primaryDefault' : '$textPrimary'}
            fontWeight={isSelected ? '500' : '400'}
          >
            {item.label}
          </Text>
          <Text
            fontSize="$caption"
            color="$textTertiary"
            transform={isOpen ? [{ rotate: '180deg' }] : []}
          >
            ▾
          </Text>
        </XStack>
        {isOpen ? (
          <YStack paddingVertical={4} marginLeft={mode === 'vertical' ? 16 : 0}>
            {item.children!.map((child) => (
              <XStack
                key={child.key}
                paddingHorizontal={16}
                paddingVertical={8}
                backgroundColor={selectedKey === child.key ? '$primaryBg' : 'transparent'}
                opacity={child.disabled ? 0.4 : 1}
                onPress={() => !child.disabled && onSelect?.(child.key)}
              >
                <Text
                  fontSize="$bodySm"
                  color={selectedKey === child.key ? '$primaryDefault' : '$textPrimary'}
                  fontWeight={selectedKey === child.key ? '500' : '400'}
                >
                  {child.label}
                </Text>
              </XStack>
            ))}
          </YStack>
        ) : null}
      </YStack>
    )
  }

  return (
    <XStack
      alignItems="center"
      paddingHorizontal={16}
      paddingVertical={10}
      backgroundColor={isSelected ? '$primaryBg' : 'transparent'}
      opacity={item.disabled ? 0.4 : 1}
      onPress={() => !item.disabled && onSelect?.(item.key)}
    >
      <Text
        fontSize="$bodySm"
        color={isSelected ? '$primaryDefault' : '$textPrimary'}
        fontWeight={isSelected ? '500' : '400'}
      >
        {item.label}
      </Text>
    </XStack>
  )
}

export function Menu({
  items = [],
  selectedKey,
  onSelect,
  mode = 'horizontal',
  defaultOpenKeys = [],
  style,
}: MenuProps) {
  const [openKeys, setOpenKeys] = useState<string[]>(defaultOpenKeys)

  const toggleOpen = (key: string) => {
    setOpenKeys((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]))
  }

  const Container = mode === 'horizontal' ? XStack : YStack

  return (
    <Container
      borderRadius="$md"
      borderWidth={1}
      borderColor="$borderDefault"
      backgroundColor="$bgCard"
      overflow="hidden"
      style={style}
    >
      {items.map((item) => (
        <MenuItemComponent
          key={item.key}
          item={item}
          selectedKey={selectedKey}
          onSelect={onSelect}
          mode={mode}
          openKeys={openKeys}
          toggleOpen={toggleOpen}
        />
      ))}
    </Container>
  )
}
