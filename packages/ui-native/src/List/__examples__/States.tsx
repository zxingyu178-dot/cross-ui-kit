/** List 示例：基础/小尺寸/加载/空状态（native）。 */
import { Text, YStack } from 'tamagui'
import { List } from '../index'
import type { ListItem } from '../List.types'

const data: ListItem[] = [
  { key: '1', title: '任务一', description: '完成 UI 设计稿评审' },
  { key: '2', title: '任务二', description: '开发登录页面' },
  { key: '3', title: '任务三', description: '编写单元测试' },
]

export function States() {
  return (
    <YStack padding={12} gap={24}>
      <YStack gap={8} width={320}>
        <Text fontSize={12} color="$textTertiary">
          基础列表（带边框 + 头部 + 底部）
        </Text>
        <List dataSource={data} bordered header="任务列表" footer={`共 ${data.length} 项`} />
      </YStack>
      <YStack gap={8} width={320}>
        <Text fontSize={12} color="$textTertiary">
          空状态
        </Text>
        <List dataSource={[]} bordered emptyText="还没有任务" />
      </YStack>
    </YStack>
  )
}
