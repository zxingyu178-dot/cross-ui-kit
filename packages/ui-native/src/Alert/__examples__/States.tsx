/** Alert 示例：四语义色、可关闭、无标题、带操作区（native）。 */
import { YStack } from 'tamagui'
import { Button } from '../../Button'
import { Alert } from '../index'

export function States() {
  return (
    <YStack padding={12} gap={12}>
      <Alert type="info" title="信息提示" description="这是一条信息性提示。" />
      <Alert type="success" title="操作成功" description="数据已保存。" closable />
      <Alert type="warning" title="警告提示" description="请谨慎操作。" />
      <Alert type="error" title="错误提示" description="请求失败，请重试。" closable />
      <Alert type="info" description="仅描述文本（无标题）的简洁提示条。" showIcon={false} />
      <Alert
        type="warning"
        title="需要操作"
        description="订阅即将到期，请及时续费。"
        action={
          <Button size="sm" variant="secondary">
            去续费
          </Button>
        }
      />
    </YStack>
  )
}
