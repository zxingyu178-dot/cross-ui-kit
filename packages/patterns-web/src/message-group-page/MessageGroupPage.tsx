/**
 * MessageGroupPage 消息分组中心（web）—— 分类分组 + 消息列表 + 未读标记。
 */
import { useState } from 'react'
import { Card, Tag, Avatar, Tabs, Checkbox } from '@kit/ui-web'

interface Msg {
  id: string
  name: string
  avatar: string
  preview: string
  time: string
  unread: number
  group: string
  starred?: boolean
}

const messages: Msg[] = [
  {
    id: '1',
    name: '产品研发群',
    avatar: '产',
    preview: '李明：新版本已提交测试',
    time: '10:24',
    unread: 5,
    group: '群聊',
    starred: true,
  },
  {
    id: '2',
    name: '赵星宇',
    avatar: '赵',
    preview: '好的，下午评审会上讨论',
    time: '09:50',
    unread: 2,
    group: '私聊',
  },
  {
    id: '3',
    name: '系统通知',
    avatar: '系',
    preview: '您的工单已处理完成',
    time: '昨天',
    unread: 0,
    group: '通知',
  },
  {
    id: '4',
    name: '电器开发组',
    avatar: '电',
    preview: '王芳：固件升级文档已更新',
    time: '昨天',
    unread: 12,
    group: '群聊',
  },
  {
    id: '5',
    name: '李明',
    avatar: '李',
    preview: '[图片] 这是修改后的设计稿',
    time: '周一',
    unread: 0,
    group: '私聊',
  },
  {
    id: '6',
    name: '运维告警',
    avatar: '运',
    preview: '服务器 CPU 使用率超过阈值',
    time: '周一',
    unread: 1,
    group: '通知',
  },
]

export function MessageGroupPage() {
  const [tab, setTab] = useState('all')
  const [selected, setSelected] = useState<string[]>([])

  const filtered = messages.filter((m) =>
    tab === 'all' ? true : tab === 'unread' ? m.unread > 0 : m.group === tab,
  )

  const toggle = (id: string) =>
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]))

  return (
    <Card className="mx-auto max-w-3xl">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-titleSm font-medium text-text-primary">消息中心</h3>
        <Tag variant="primary" tone="soft">
          {messages.reduce((s, m) => s + m.unread, 0)} 条未读
        </Tag>
      </div>

      <Tabs
        value={tab}
        onValueChange={setTab}
        items={[
          { value: 'all', label: '全部', content: null },
          { value: 'unread', label: '未读', content: null },
          { value: '群聊', label: '群聊', content: null },
          { value: '私聊', label: '私聊', content: null },
          { value: '通知', label: '通知', content: null },
        ]}
      />

      <div className="mt-3 flex flex-col">
        {filtered.map((m) => (
          <div
            key={m.id}
            className={`flex cursor-pointer items-center gap-3 rounded-lg px-2 py-3 hover:bg-bg-secondary ${
              selected.includes(m.id) ? 'bg-primary-default/5' : ''
            }`}
          >
            <Checkbox checked={selected.includes(m.id)} onChange={() => toggle(m.id)} />
            <div className="relative">
              <Avatar name={m.avatar} size="md" />
              {m.unread > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-danger px-1 text-[10px] text-white">
                  {m.unread}
                </span>
              )}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <p className="text-bodyMd font-medium text-text-primary">
                  {m.starred && <span className="text-warning">★</span>} {m.name}
                </p>
                <span className="text-bodySm text-text-tertiary">{m.time}</span>
              </div>
              <p className="truncate text-bodySm text-text-secondary">{m.preview}</p>
            </div>
            <Tag variant="neutral" tone="soft">
              {m.group}
            </Tag>
          </div>
        ))}
      </div>
    </Card>
  )
}
