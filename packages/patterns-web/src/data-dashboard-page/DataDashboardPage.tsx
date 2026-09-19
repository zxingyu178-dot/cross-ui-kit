/**
 * DataDashboardPage 数据大屏页（web）—— 统计卡 + 进度条 + 排行列表。
 */
import { Card, StatisticCard, Progress, Tag } from '@kit/ui-web'

const ranks = [
  { name: '金彭电器管理系统', value: 92, trend: '+12%' },
  { name: '跨端 UI 组件库', value: 78, trend: '+8%' },
  { name: '移动端巡检 App', value: 65, trend: '-3%' },
  { name: '数据大屏', value: 54, trend: '+21%' },
]

export function DataDashboardPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <StatisticCard title="今日访问" value="8,241" trend="up" trendValue="+18%" />
        <StatisticCard title="活跃用户" value="1,234" trend="up" trendValue="+5%" />
        <StatisticCard title="转化率" value="3.42%" trend="down" trendValue="-0.8%" />
        <StatisticCard title="客单价" value="¥256" trend="up" trendValue="+12%" />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card>
          <h3 className="mb-4 text-titleSm font-medium text-text-primary">项目完成度排行</h3>
          <div className="flex flex-col gap-3">
            {ranks.map((r, i) => (
              <div key={r.name} className="flex items-center gap-3">
                <span className="w-6 text-bodySm text-text-tertiary">{i + 1}</span>
                <div className="flex-1">
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-bodySm text-text-primary">{r.name}</span>
                    <span className="text-bodySm text-text-secondary">{r.value}%</span>
                  </div>
                  <Progress value={r.value} max={100} size="sm" />
                </div>
                <Tag variant={r.trend.startsWith('+') ? 'success' : 'danger'} tone="soft">
                  {r.trend}
                </Tag>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="mb-4 text-titleSm font-medium text-text-primary">本周趋势</h3>
          <div className="flex h-48 items-end gap-2">
            {[40, 65, 50, 80, 60, 90, 75].map((h, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-1">
                <div
                  className="w-full rounded-t bg-primary-default/80"
                  style={{ height: `${h * 1.6}px` }}
                />
                <span className="text-bodySm text-text-tertiary">周{'一二三四五六日'[i]}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
