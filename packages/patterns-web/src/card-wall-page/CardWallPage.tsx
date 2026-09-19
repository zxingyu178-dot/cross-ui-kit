/**
 * CardWallPage 卡片墙页（web）—— 网格卡片 + 封面 + 标签 + 操作。
 */
import { Card, Tag, Button } from '@kit/ui-web'

const items = [
  {
    emoji: '🏠',
    title: '智能家居',
    desc: '全屋智能控制方案',
    tag: 'IoT',
    color: 'from-blue-50 to-indigo-100',
  },
  {
    emoji: '🚗',
    title: '车载系统',
    desc: '电动车中控交互',
    tag: '车机',
    color: 'from-emerald-50 to-teal-100',
  },
  {
    emoji: '📱',
    title: '移动 App',
    desc: '巡检任务移动端',
    tag: 'App',
    color: 'from-amber-50 to-orange-100',
  },
  {
    emoji: '💻',
    title: 'PC 桌面',
    desc: 'Tauri 桌面端',
    tag: '桌面',
    color: 'from-rose-50 to-pink-100',
  },
  {
    emoji: '🎨',
    title: '设计系统',
    desc: '跨端 UI 组件库',
    tag: 'Design',
    color: 'from-violet-50 to-purple-100',
  },
  {
    emoji: '📊',
    title: '数据看板',
    desc: '实时业务监控',
    tag: 'Data',
    color: 'from-cyan-50 to-blue-100',
  },
]

export function CardWallPage() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it) => (
        <Card key={it.title} className="overflow-hidden p-0">
          <div
            className={`flex h-32 items-center justify-center bg-gradient-to-br text-5xl ${it.color}`}
          >
            {it.emoji}
          </div>
          <div className="p-4">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-titleSm font-medium text-text-primary">{it.title}</h3>
              <Tag variant="primary" tone="soft">
                {it.tag}
              </Tag>
            </div>
            <p className="text-bodySm text-text-secondary">{it.desc}</p>
            <div className="mt-3 flex gap-2">
              <Button variant="secondary" size="sm">
                查看
              </Button>
              <Button variant="ghost" size="sm">
                编辑
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
