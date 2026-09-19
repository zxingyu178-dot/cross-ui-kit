/**
 * DashboardPage 仪表盘模板（web）—— 数据驾驶舱：统计卡 + 趋势 + 进度 + 活动流。
 */
import { Card, StatisticCard, Progress, Timeline, Tag, Button } from '@kit/ui-web'

export interface DashboardActivity {
  title: string
  description?: string
  time?: string
  color?: 'primary' | 'success' | 'warning' | 'error' | 'info' | 'neutral'
}

export interface DashboardPageProps {
  greeting?: string
  userName?: string
  activities?: DashboardActivity[]
  onViewAll?: () => void
}

const metrics = [
  {
    title: '今日营收',
    value: '¥128,430',
    trend: 'up' as const,
    trendValue: '+12.5%',
    color: '#16a34a',
  },
  {
    title: '活跃用户',
    value: '8,942',
    trend: 'up' as const,
    trendValue: '+8.2%',
    color: '#2563eb',
  },
  {
    title: '订单量',
    value: '1,204',
    trend: 'down' as const,
    trendValue: '-3.1%',
    color: '#dc2626',
  },
  { title: '转化率', value: '3.42%', trend: 'none' as const, trendValue: '0.0%', color: '#64748b' },
]

export function DashboardPage({
  greeting = '下午好',
  userName = '赵星宇',
  activities = [],
  onViewAll,
}: DashboardPageProps) {
  return (
    <div className="flex flex-col gap-5 p-6">
      {/* 欢迎头 */}
      <div className="flex items-end justify-between">
        <div>
          <p className="text-bodySm text-text-secondary">{greeting}</p>
          <h1 className="text-2xl font-semibold text-text-primary">{userName}，欢迎回来 👋</h1>
        </div>
        <Button variant="primary" onClick={onViewAll}>
          查看全部数据
        </Button>
      </div>

      {/* 统计卡 4 列 */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((m) => (
          <StatisticCard
            key={m.title}
            title={m.title}
            value={m.value}
            trend={m.trend}
            trendValue={m.trendValue}
            valueColor={m.color}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {/* 收入走势（用进度条模拟） */}
        <Card className="lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-titleSm font-medium text-text-primary">本周收入走势</h2>
            <Tag variant="primary">近 7 天</Tag>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { d: '周一', v: 62 },
              { d: '周二', v: 78 },
              { d: '周三', v: 55 },
              { d: '周四', v: 90 },
              { d: '周五', v: 71 },
              { d: '周六', v: 84 },
              { d: '周日', v: 96 },
            ].map((r) => (
              <div key={r.d} className="flex items-center gap-3">
                <span className="w-10 text-bodySm text-text-secondary">{r.d}</span>
                <Progress value={r.v} className="flex-1" />
                <span className="w-12 text-right text-bodySm text-text-primary">{r.v}%</span>
              </div>
            ))}
          </div>
        </Card>

        {/* 最新动态 */}
        <Card>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-titleSm font-medium text-text-primary">最新动态</h2>
            <Button variant="ghost" size="sm" onClick={onViewAll}>
              全部
            </Button>
          </div>
          <Timeline
            items={
              activities.length > 0
                ? activities.map((a) => ({ ...a, color: a.color ?? 'neutral' }))
                : [
                    {
                      title: '新订单 #1024',
                      description: '用户购买了 Pro 套餐',
                      time: '2 分钟前',
                      color: 'success',
                    },
                    {
                      title: '系统更新完成',
                      description: 'v2.4.0 已全量发布',
                      time: '1 小时前',
                      color: 'primary',
                    },
                    {
                      title: '库存预警',
                      description: '商品「咖啡杯」库存不足',
                      time: '3 小时前',
                      color: 'warning',
                    },
                  ]
            }
          />
        </Card>
      </div>
    </div>
  )
}
