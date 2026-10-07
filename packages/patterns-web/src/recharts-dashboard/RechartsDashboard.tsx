/**
 * RechartsDashboard 图表看板（web）—— recharts（MIT）集成模板。
 * 覆盖：面积趋势、柱状对比、饼图占比 + 统计卡片。
 * 颜色不硬编码：挂载时从 @kit/tokens 的 CSS 变量读取并注入 recharts 主题，
 * 因此亮暗主题切换后刷新即跟随（库本身不感知 CSS 变量，故运行时读取）。
 */
import { useMemo } from 'react'
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { Icon } from '@kit/icons'
import type { KitIconName } from '@kit/icons'
import { Card } from '@kit/ui-web'

interface ChartTokens {
  primary: string
  success: string
  warning: string
  danger: string
  info: string
  grid: string
  text: string
  elevated: string
}

function readChartTokens(): ChartTokens {
  const styles = getComputedStyle(document.documentElement)
  const get = (name: string) => styles.getPropertyValue(name).trim()
  return {
    primary: get('--color-primary-default'),
    success: get('--color-success-default'),
    warning: get('--color-warning-default'),
    danger: get('--color-danger-default'),
    info: get('--color-info-default'),
    grid: get('--color-border-default'),
    text: get('--color-text-secondary'),
    elevated: get('--color-bg-elevated'),
  }
}

const revenue = [
  { month: '1月', value: 4200 },
  { month: '2月', value: 3800 },
  { month: '3月', value: 5100 },
  { month: '4月', value: 4700 },
  { month: '5月', value: 6200 },
  { month: '6月', value: 7400 },
  { month: '7月', value: 6900 },
  { month: '8月', value: 8200 },
  { month: '9月', value: 9100 },
  { month: '10月', value: 8600 },
  { month: '11月', value: 9800 },
  { month: '12月', value: 11200 },
]

const weekly = [
  { day: '周一', visits: 320, orders: 120 },
  { day: '周二', visits: 410, orders: 160 },
  { day: '周三', visits: 380, orders: 140 },
  { day: '周四', visits: 520, orders: 210 },
  { day: '周五', visits: 610, orders: 260 },
  { day: '周六', visits: 720, orders: 310 },
  { day: '周日', visits: 560, orders: 230 },
]

const sources = [
  { name: '直接访问', value: 4200 },
  { name: '搜索引擎', value: 3600 },
  { name: '社交媒体', value: 2100 },
  { name: '其他渠道', value: 900 },
]

const stats: { label: string; value: string; icon: KitIconName; trend: string; up: boolean }[] = [
  { label: '总营收', value: '¥91,200', icon: 'credit-card', trend: '+12.4%', up: true },
  { label: '活跃用户', value: '24,830', icon: 'users', trend: '+8.1%', up: true },
  { label: '转化率', value: '3.62%', icon: 'trending-up', trend: '+0.4%', up: true },
  { label: '退款率', value: '1.08%', icon: 'rotate-ccw', trend: '-0.2%', up: false },
]

export function RechartsDashboard() {
  const t = useMemo(readChartTokens, [])
  const tooltipStyle = {
    backgroundColor: t.elevated,
    border: `1px solid ${t.grid}`,
    borderRadius: 8,
    color: t.text,
    fontSize: 12,
  }
  const sourceColors = [t.primary, t.info, t.success, t.warning]

  return (
    <div className="flex flex-col gap-4">
      {/* 统计卡片 */}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {stats.map((s) => (
          <Card key={s.label}>
            <div className="flex items-center justify-between">
              <span className="text-body-sm text-text-secondary">{s.label}</span>
              <span className="text-text-tertiary">
                <Icon name={s.icon} size={18} />
              </span>
            </div>
            <p className="mt-2 text-title-md font-semibold text-text-primary">{s.value}</p>
            <p
              className={`mt-1 text-body-sm ${s.up ? 'text-success-default' : 'text-danger-default'}`}
            >
              {s.trend} 较上月
            </p>
          </Card>
        ))}
      </div>

      <Card>
        <h3 className="text-title-sm font-medium text-text-primary">营收趋势 · 面积图</h3>
        <div className="mt-3 h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={revenue} margin={{ top: 10, right: 12, left: -12, bottom: 0 }}>
              <defs>
                <linearGradient id="kitArea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={t.primary} stopOpacity={0.35} />
                  <stop offset="95%" stopColor={t.primary} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke={t.grid} vertical={false} />
              <XAxis
                dataKey="month"
                tick={{ fill: t.text, fontSize: 12 }}
                axisLine={{ stroke: t.grid }}
                tickLine={false}
              />
              <YAxis tick={{ fill: t.text, fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={tooltipStyle} cursor={{ stroke: t.grid }} />
              <Area
                type="monotone"
                dataKey="value"
                name="营收"
                stroke={t.primary}
                strokeWidth={2}
                fill="url(#kitArea)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card>
          <h3 className="text-title-sm font-medium text-text-primary">周活跃 · 柱状图</h3>
          <div className="mt-3 h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weekly} margin={{ top: 10, right: 8, left: -16, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={t.grid} vertical={false} />
                <XAxis
                  dataKey="day"
                  tick={{ fill: t.text, fontSize: 12 }}
                  axisLine={{ stroke: t.grid }}
                  tickLine={false}
                />
                <YAxis tick={{ fill: t.text, fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={tooltipStyle} cursor={{ fill: t.grid, fillOpacity: 0.08 }} />
                <Legend wrapperStyle={{ fontSize: 12, color: t.text }} />
                <Bar dataKey="visits" name="访问量" fill={t.primary} radius={[4, 4, 0, 0]} />
                <Bar dataKey="orders" name="订单量" fill={t.success} radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <h3 className="text-title-sm font-medium text-text-primary">流量来源 · 饼图</h3>
          <div className="mt-3 h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={sources}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={52}
                  outerRadius={86}
                  paddingAngle={2}
                >
                  {sources.map((_, i) => (
                    <Cell key={i} fill={sourceColors[i]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={tooltipStyle} />
                <Legend wrapperStyle={{ fontSize: 12, color: t.text }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  )
}
