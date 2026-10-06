/**
 * DataScreenPage 深色数据大屏页（web）—— 深色科技风 + 霓虹指标 + 图表。
 */
import { Tag } from '@kit/ui-web'

const kpis = [
  { label: '今日订单', value: '8,642', trend: '+12.4%', color: 'text-cyan-400' },
  { label: '在线用户', value: '23,180', trend: '+8.1%', color: 'text-emerald-400' },
  { label: '交易额', value: '¥1.28M', trend: '+23.7%', color: 'text-amber-400' },
  { label: '转化率', value: '4.86%', trend: '-0.3%', color: 'text-pink-400' },
]

const bars = [40, 65, 50, 80, 62, 90, 70]
const ranks = [
  { name: '智能控制器 X1', val: 92 },
  { name: '仪表总成 Pro', val: 78 },
  { name: '电池管理系统', val: 66 },
  { name: '车载充电机', val: 54 },
]

export function DataScreenPage() {
  return (
    <div className="overflow-hidden rounded-xl bg-slate-950 p-6 text-white lg:p-8">
      {/* 标题 */}
      <div className="mb-6 flex items-center justify-between border-b border-cyan-500/20 pb-4">
        <div>
          <h2 className="text-2xl font-bold tracking-wide text-cyan-300">运营数据实时大屏</h2>
          <p className="text-bodySm text-slate-400">REAL-TIME OPERATION CENTER</p>
        </div>
        <Tag variant="success" tone="soft">
          ● 实时更新
        </Tag>
      </div>

      {/* KPI */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {kpis.map((k) => (
          <div key={k.label} className="rounded-lg border border-cyan-500/20 bg-slate-900/60 p-4">
            <p className="text-bodySm text-slate-400">{k.label}</p>
            <p className={`mt-1 text-2xl font-bold ${k.color}`}>{k.value}</p>
            <p className="text-bodySm text-slate-400">较昨日 {k.trend}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        {/* 柱状 */}
        <div className="rounded-lg border border-cyan-500/20 bg-slate-900/60 p-4 lg:col-span-2">
          <h3 className="mb-4 text-bodyMd font-medium text-cyan-300">近 7 日活跃趋势</h3>
          <div className="flex h-40 items-stretch justify-around gap-2">
            {bars.map((b, i) => (
              <div key={i} className="flex h-full flex-1 flex-col items-center justify-end gap-1">
                <div
                  className="w-full rounded-t bg-gradient-to-t from-cyan-600 to-cyan-300"
                  style={{ height: `${b}%` }}
                />
                <span className="text-[10px] text-slate-500">D{i + 1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 排行 */}
        <div className="rounded-lg border border-cyan-500/20 bg-slate-900/60 p-4">
          <h3 className="mb-4 text-bodyMd font-medium text-cyan-300">产品销量排行</h3>
          <div className="flex flex-col gap-3">
            {ranks.map((r, i) => (
              <div key={r.name}>
                <div className="mb-1 flex justify-between text-bodySm">
                  <span className="text-slate-300">
                    <span
                      className={`mr-2 font-bold ${i < 3 ? 'text-amber-400' : 'text-slate-500'}`}
                    >
                      {i + 1}
                    </span>
                    {r.name}
                  </span>
                  <span className="text-cyan-300">{r.val}</span>
                </div>
                <div className="h-1.5 rounded-full bg-slate-800">
                  <div
                    className="h-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-400"
                    style={{ width: `${r.val}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
