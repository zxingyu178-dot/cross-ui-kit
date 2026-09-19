/**
 * NotificationCenterPage 通知中心页（web）—— 消息列表 + 分类 tab + 已读/未读。
 */
import { Card, Tag, Button, Tabs } from '@kit/ui-web'

const notifications = [
  {
    id: '1',
    type: 'system',
    title: '系统升级完成',
    desc: 'v2.4.0 已发布，新增暗色模式',
    time: '10 分钟前',
    read: false,
    emoji: '🔔',
  },
  {
    id: '2',
    type: 'comment',
    title: '赵星宇 评论了「跨端组件库」',
    desc: '这个按钮的尺寸能再小一点吗？',
    time: '1 小时前',
    read: false,
    emoji: '💬',
  },
  {
    id: '3',
    type: 'task',
    title: '任务已完成',
    desc: '「登录页重构」已由 李明 完成',
    time: '3 小时前',
    read: true,
    emoji: '✅',
  },
  {
    id: '4',
    type: 'system',
    title: '账号安全提醒',
    desc: '你的账号在新设备登录，请确认',
    time: '昨天',
    read: true,
    emoji: '🔒',
  },
  {
    id: '5',
    type: 'like',
    title: '收到 12 个赞',
    desc: '你的设计稿被同事点赞了',
    time: '昨天',
    read: true,
    emoji: '👍',
  },
]

export function NotificationCenterPage() {
  return (
    <Card className="mx-auto max-w-2xl">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-titleSm font-medium text-text-primary">通知中心</h3>
        <Button variant="ghost" size="sm">
          全部已读
        </Button>
      </div>

      <Tabs
        items={[
          { value: 'all', label: '全部' },
          { value: 'unread', label: '未读' },
          { value: 'system', label: '系统' },
        ]}
        defaultValue="all"
      />

      <div className="mt-4 flex flex-col gap-2">
        {notifications.map((n) => (
          <div
            key={n.id}
            className={`flex items-start gap-3 rounded-lg p-3 ${n.read ? 'bg-bg-secondary' : 'bg-primary-default/5'}`}
          >
            <div className="text-2xl">{n.emoji}</div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <p className="text-bodyMd font-medium text-text-primary">{n.title}</p>
                {!n.read && <span className="h-2 w-2 rounded-full bg-danger" />}
              </div>
              <p className="text-bodySm text-text-secondary">{n.desc}</p>
              <p className="mt-1 text-bodySm text-text-tertiary">{n.time}</p>
            </div>
            <Tag
              variant={n.type === 'system' ? 'info' : n.type === 'task' ? 'success' : 'primary'}
              tone="soft"
            >
              {n.type}
            </Tag>
          </div>
        ))}
      </div>
    </Card>
  )
}
