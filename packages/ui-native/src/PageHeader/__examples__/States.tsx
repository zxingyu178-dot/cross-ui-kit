/** PageHeader 示例：页头（native）。 */
import { Text, YStack } from 'tamagui'
import { PageHeader } from '../index'

export function States() {
  return (
    <YStack padding={12} gap={24}>
      <YStack gap={8}>
        <Text fontSize={12} color="$textTertiary">
          基础页头
        </Text>
        <YStack
          padding={16}
          borderRadius="$md"
          borderWidth={1}
          borderColor="$borderDefault"
          backgroundColor="$bgCard"
        >
          <PageHeader title="页面标题" subTitle="这是页面副标题，用于描述页面内容。" />
        </YStack>
      </YStack>
      <YStack gap={8}>
        <Text fontSize={12} color="$textTertiary">
          带面包屑
        </Text>
        <YStack
          padding={16}
          borderRadius="$md"
          borderWidth={1}
          borderColor="$borderDefault"
          backgroundColor="$bgCard"
        >
          <PageHeader
            title="订单详情"
            subTitle="查看订单的详细信息和状态。"
            breadcrumb="首页 / 订单管理 / 订单详情"
          />
        </YStack>
      </YStack>
    </YStack>
  )
}
