/** NoticeBar 示例：通知栏（native）。 */
import { YStack } from 'tamagui'
import { NoticeBar } from '../index'

export function States() {
  return (
    <YStack gap={8}>
      <NoticeBar content="系统维护通知" tone="warning" />
      <NoticeBar content="订单已发货" tone="success" />
      <NoticeBar content="网络异常" tone="danger" onClose={() => {}} />
    </YStack>
  )
}
