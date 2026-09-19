/**
 * EmptyStateShowcase 空状态集合页（web）—— 不同场景空态并排。
 */
import { Card, Empty, Button, Tag } from '@kit/ui-web'

export function EmptyStateShowcase() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <Card>
        <Empty title="暂无数据" description="当前还没有任何内容" />
      </Card>
      <Card>
        <Empty title="搜索无结果" description="没有找到匹配的内容，换个关键词试试" icon="🔍" />
      </Card>
      <Card>
        <Empty
          title="购物车是空的"
          description="快去挑选喜欢的商品吧"
          icon="🛒"
          action={
            <Button variant="primary" size="sm">
              去逛逛
            </Button>
          }
        />
      </Card>
      <Card>
        <Empty title="消息列表为空" description="暂时没有新消息" icon="💬" />
      </Card>
      <Card>
        <Empty
          title="网络异常"
          description="请检查网络后重试"
          icon="📡"
          action={
            <Button variant="secondary" size="sm">
              重试
            </Button>
          }
        />
      </Card>
      <Card>
        <Empty
          title="权限不足"
          description="您没有访问该资源的权限"
          icon="🔒"
          action={<Tag variant="warning">联系管理员</Tag>}
        />
      </Card>
    </div>
  )
}
