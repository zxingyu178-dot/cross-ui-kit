import { Button } from '../../Button'
import { Alert } from '../index'

export function States() {
  return (
    <div className="flex flex-col gap-3">
      <Alert
        type="info"
        title="信息提示"
        description="这是一条信息性提示，用于展示普通说明内容。"
      />
      <Alert
        type="success"
        title="操作成功"
        description="数据已保存，修改将在下次刷新后生效。"
        closable
      />
      <Alert type="warning" title="警告提示" description="当前操作可能影响已有数据，请谨慎确认。" />
      <Alert
        type="error"
        title="错误提示"
        description="请求失败，请检查网络连接后重试。"
        closable
      />
      <Alert type="info" description="仅描述文本（无标题）的简洁提示条。" showIcon={false} />
      <Alert
        type="warning"
        title="需要操作"
        description="您的订阅即将到期，请及时续费以避免服务中断。"
        action={
          <Button size="sm" variant="secondary">
            去续费
          </Button>
        }
      />
    </div>
  )
}
