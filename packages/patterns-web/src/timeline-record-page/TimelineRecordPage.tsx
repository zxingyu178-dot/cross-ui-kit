/**
 * TimelineRecordPage 时间轴记录页（web）—— 垂直时间轴 + 事件分类 + 筛选。
 */
import { useState } from 'react'
import { Card, Tag, Select, Button } from '@kit/ui-web'

interface Event {
  time: string
  date: string
  title: string
  desc: string
  type: 'milestone' | 'release' | 'meeting' | 'change'
  by: string
}

const events: Event[] = [
  {
    date: '2026-09-18',
    time: '16:20',
    title: 'V2.1 版本正式发布',
    desc: '完成看板、图表、多标签等 16 个新模板，质量门全部通过。',
    type: 'release',
    by: '赵星宇',
  },
  {
    date: '2026-09-17',
    time: '14:00',
    title: '跨端组件评审会',
    desc: '确认三栈组件命名映射与 props 语义一致性，通过 98 个组件验收。',
    type: 'meeting',
    by: '李明',
  },
  {
    date: '2026-09-15',
    time: '10:30',
    title: '达成 100 组件里程碑',
    desc: '基础组件 P1 阶段目标完成，三栈齐备并登记 registry。',
    type: 'milestone',
    by: '赵星宇',
  },
  {
    date: '2026-09-12',
    time: '09:00',
    title: 'Token 体系重构',
    desc: '引入 Style Dictionary 统一导出颜色、字号、间距等多端变量。',
    type: 'change',
    by: '王芳',
  },
]

const typeMap = {
  milestone: { label: '里程碑', variant: 'warning' as const, dot: 'bg-warning' },
  release: { label: '发布', variant: 'success' as const, dot: 'bg-success' },
  meeting: { label: '会议', variant: 'primary' as const, dot: 'bg-primary-default' },
  change: { label: '变更', variant: 'info' as const, dot: 'bg-info' },
}

export function TimelineRecordPage() {
  const [filter, setFilter] = useState('all')
  const shown = events.filter((e) => filter === 'all' || e.type === filter)

  return (
    <Card className="mx-auto max-w-3xl">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-titleSm font-medium text-text-primary">项目时间轴</h3>
        <div className="flex items-center gap-2">
          <Select
            value={filter}
            onChange={setFilter}
            options={[
              { label: '全部事件', value: 'all' },
              { label: '里程碑', value: 'milestone' },
              { label: '发布', value: 'release' },
              { label: '会议', value: 'meeting' },
              { label: '变更', value: 'change' },
            ]}
          />
          <Button variant="primary" size="sm">
            + 记录
          </Button>
        </div>
      </div>

      <div className="relative flex flex-col gap-6 pl-6">
        <div className="absolute bottom-2 left-[7px] top-2 w-0.5 bg-border-default" />
        {shown.map((e) => {
          const meta = typeMap[e.type]
          return (
            <div key={e.title} className="relative">
              <span
                className={`absolute -left-[22px] top-1 h-3.5 w-3.5 rounded-full border-2 border-bg-card ${meta.dot}`}
              />
              <div className="flex items-center gap-2">
                <h4 className="text-bodyMd font-semibold text-text-primary">{e.title}</h4>
                <Tag variant={meta.variant} tone="soft">
                  {meta.label}
                </Tag>
              </div>
              <p className="mt-1 text-bodySm text-text-secondary">{e.desc}</p>
              <p className="mt-1 text-bodySm text-text-tertiary">
                {e.date} {e.time} · {e.by}
              </p>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
