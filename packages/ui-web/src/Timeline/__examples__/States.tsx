import { Timeline } from '../index'
import type { TimelineItem } from '../Timeline.types'

const ITEMS: TimelineItem[] = [
  {
    time: '2024-01-15',
    title: '项目启动',
    description: '完成需求评审与技术选型，确定跨端 UI 库方案。',
    color: 'primary',
  },
  {
    time: '2024-03-20',
    title: '基础组件完成',
    description: 'Button / Input / Dialog 等 20+ 基础组件三栈落地。',
    color: 'success',
    dotType: 'solid',
  },
  { time: '2024-05-10', title: '反馈类组件补齐', color: 'info' },
  {
    time: '2024-06-01',
    title: '待上线',
    description: '等待测试验收后发布 v1.0。',
    color: 'warning',
  },
]

export function States() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">默认（outline 圆点）</span>
        <Timeline items={ITEMS} />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">倒序</span>
        <Timeline items={ITEMS} reverse />
      </div>
    </div>
  )
}
