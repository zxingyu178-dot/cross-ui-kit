/** Tour 示例：基础引导（native）。 */
import { useState } from 'react'
import { Text, XStack, YStack } from 'tamagui'
import { Tour } from '../index'
import type { TourStep } from '../Tour.types'

const steps: TourStep[] = [
  { title: '欢迎使用', description: '这是一个引导示例。' },
  { title: '组件库', description: '我们提供了丰富的 UI 组件。' },
  { title: '开始使用', description: '现在你可以开始探索了！' },
]

export function States() {
  const [open, setOpen] = useState(false)
  return (
    <YStack padding={12}>
      <XStack
        alignSelf="flex-start"
        paddingHorizontal={16}
        paddingVertical={8}
        borderRadius={6}
        backgroundColor="$primaryDefault"
        onPress={() => setOpen(true)}
      >
        <Text color="#fff" fontSize={14}>
          开始引导
        </Text>
      </XStack>
      {open ? (
        <Tour steps={steps} onFinish={() => setOpen(false)} onClose={() => setOpen(false)} />
      ) : null}
    </YStack>
  )
}
