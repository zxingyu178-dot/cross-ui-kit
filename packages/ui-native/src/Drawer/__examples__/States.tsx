/** Drawer 示例：右侧/左侧（native）。 */
import { useState } from 'react'
import { Text, XStack, YStack } from 'tamagui'
import { Drawer } from '../index'

export function States() {
  const [rightOpen, setRightOpen] = useState(false)
  const [leftOpen, setLeftOpen] = useState(false)
  return (
    <XStack flexWrap="wrap" gap={12} padding={12}>
      <YStack
        paddingHorizontal={16}
        paddingVertical={8}
        backgroundColor="$primaryDefault"
        borderRadius={6}
        onPress={() => setRightOpen(true)}
      >
        <Text color="#fff" fontSize={14}>
          右侧抽屉
        </Text>
      </YStack>
      <YStack
        paddingHorizontal={16}
        paddingVertical={8}
        borderWidth={1}
        borderColor="$borderDefault"
        borderRadius={6}
        onPress={() => setLeftOpen(true)}
      >
        <Text color="$textPrimary" fontSize={14}>
          左侧抽屉
        </Text>
      </YStack>
      <Drawer open={rightOpen} onOpenChange={setRightOpen} title="右侧抽屉" placement="right">
        <Text fontSize={13} color="$textSecondary">
          这是从右侧滑出的抽屉内容。
        </Text>
      </Drawer>
      <Drawer
        open={leftOpen}
        onOpenChange={setLeftOpen}
        title="左侧抽屉"
        placement="left"
        size={280}
      >
        <Text fontSize={13} color="$textSecondary">
          这是从左侧滑出的抽屉，宽度 280。
        </Text>
      </Drawer>
    </XStack>
  )
}
