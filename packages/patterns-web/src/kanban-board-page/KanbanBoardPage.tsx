/**
 * KanbanBoardPage 看板页（web）—— 多列任务卡片墙（拖拽预留）。
 */
import { useState } from 'react'
import { Card, Tag, Avatar, Button } from '@kit/ui-web'

interface Task {
  id: string
  title: string
  tags: { label: string; variant: 'primary' | 'success' | 'warning' | 'danger' }[]
  owner: string
  priority?: 'high' | 'mid' | 'low'
}

interface Column {
  key: string
  title: string
  tasks: Task[]
}

const initial: Column[] = [
  {
    key: 'todo',
    title: '待办',
    tasks: [
      {
        id: 't1',
        title: '设计登录页交互稿',
        tags: [{ label: '设计', variant: 'primary' }],
        owner: '李',
        priority: 'high',
      },
      {
        id: 't2',
        title: '梳理接口字段',
        tags: [{ label: '后端', variant: 'warning' }],
        owner: '王',
        priority: 'mid',
      },
    ],
  },
  {
    key: 'doing',
    title: '进行中',
    tasks: [
      {
        id: 't3',
        title: '开发看板组件',
        tags: [{ label: '前端', variant: 'success' }],
        owner: '赵',
        priority: 'high',
      },
      {
        id: 't4',
        title: '对接登录接口',
        tags: [
          { label: '前端', variant: 'success' },
          { label: '联调', variant: 'danger' },
        ],
        owner: '赵',
        priority: 'mid',
      },
    ],
  },
  {
    key: 'review',
    title: '评审',
    tasks: [
      {
        id: 't5',
        title: '走查暗色模式',
        tags: [{ label: '设计', variant: 'primary' }],
        owner: '李',
        priority: 'low',
      },
    ],
  },
  {
    key: 'done',
    title: '已完成',
    tasks: [
      {
        id: 't6',
        title: '搭建项目脚手架',
        tags: [{ label: '基建', variant: 'warning' }],
        owner: '赵',
        priority: 'mid',
      },
      {
        id: 't7',
        title: 'Button 组件三栈',
        tags: [{ label: '组件', variant: 'success' }],
        owner: '赵',
        priority: 'high',
      },
    ],
  },
]

const priorityColor = { high: 'border-l-danger', mid: 'border-l-warning', low: 'border-l-success' }

export function KanbanBoardPage() {
  const [columns] = useState(initial)

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {columns.map((col) => (
        <div key={col.key} className="flex flex-col rounded-lg bg-bg-secondary p-3">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-bodyMd font-medium text-text-primary">{col.title}</h3>
            <span className="rounded-full bg-bg-card px-2 text-bodySm text-text-secondary">
              {col.tasks.length}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            {col.tasks.map((t) => (
              <Card
                key={t.id}
                className={`cursor-grab border-l-4 p-3 ${priorityColor[t.priority ?? 'mid']}`}
              >
                <p className="text-bodySm font-medium text-text-primary">{t.title}</p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {t.tags.map((tag) => (
                    <Tag key={tag.label} variant={tag.variant} tone="soft">
                      {tag.label}
                    </Tag>
                  ))}
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <Avatar name={t.owner} size="sm" />
                  <span className="text-bodySm text-text-tertiary">⋮⋮</span>
                </div>
              </Card>
            ))}
          </div>
          <Button variant="ghost" size="sm" block className="mt-2">
            + 添加卡片
          </Button>
        </div>
      ))}
    </div>
  )
}
