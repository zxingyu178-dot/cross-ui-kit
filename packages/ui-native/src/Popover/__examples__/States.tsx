/** Popover 示例：基础/上方（native）。 */
import { Text, XStack, YStack } from 'tamagui'
import { Popover } from '../index'

export function States() {
  return (
    <XStack flexWrap="wrap" gap={24} padding={12}>
      <Popover
        trigger={
          <Text
            fontSize={14}
            padding={8}
            borderWidth={1}
            borderColor="$borderDefault"
            borderRadius={6}
          >
            点击弹出 ▼
          </Text>
        }
        content={
          <YStack>
            <Text fontSize={14} fontWeight={500} color="$textPrimary">
              弹出标题
            </Text>
            <Text fontSize={13} color="$textSecondary" marginTop={4}>
              这是弹出层的内容区域。
            </Text>
          </YStack>
        }
      />
      <Popover
        trigger={
          <Text
            fontSize={14}
            padding={8}
            borderWidth={1}
            borderColor="$borderDefault"
            borderRadius={6}
          >
            上方弹出 ▲
          </Text>
        }
        side="top"
        content={
          <Text fontSize={13} color="$textSecondary">
            从上方弹出的内容。
          </Text>
        }
      />
    </XStack>
  )
}
