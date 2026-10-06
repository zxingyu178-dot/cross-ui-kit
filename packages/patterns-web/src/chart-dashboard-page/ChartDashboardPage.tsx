/**
 * ChartDashboardPage 图表看板页（web）—— SVG 柱状/折线/环形图，无第三方依赖。
 */
import { Card, Tag, Select } from '@kit/ui-web'

const bars = [42, 65, 50, 78, 60, 88, 72, 95, 68, 82, 58, 90]
const months = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']

// 折线点（0-100 映射到 200 高）
const line = [30, 45, 38, 60, 52, 70, 65, 82, 75, 90, 85, 96]
const toPath = (pts: number[]) =>
  pts
    .map((v, i) => `${i === 0 ? 'M' : 'L'} ${(i / (pts.length - 1)) * 300} ${200 - v * 1.8}`)
    .join(' ')

// 环形图
const donut = [
  { label: '直接访问', value: 38, color: '#2563eb' },
  { label: '搜索引擎', value: 27, color: '#10b981' },
  { label: '社交媒体', value: 20, color: '#f59e0b' },
  { label: '其他', value: 15, color: '#94a3b8' },
]

export function ChartDashboardPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="text-titleSm font-medium text-text-primary">数据可视化看板</h3>
        <Select
          value="2026"
          onChange={() => {}}
          options={[
            { label: '2026 年', value: '2026' },
            { label: '2025 年', value: '2025' },
          ]}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* 柱状图 */}
        <Card>
          <div className="mb-3 flex items-center justify-between">
            <h4 className="text-bodyMd font-medium text-text-primary">月度活跃（柱状）</h4>
            <Tag variant="primary" tone="soft">
              +18.6%
            </Tag>
          </div>
          <svg viewBox="0 0 320 220" className="w-full">
            {bars.map((b, i) => (
              <g key={i}>
                <rect
                  x={i * 26 + 6}
                  y={210 - b * 2}
                  width="16"
                  height={b * 2}
                  rx="3"
                  fill={i === 7 ? '#2563eb' : '#bfdbfe'}
                />
                <text x={i * 26 + 14} y="218" fontSize="8" textAnchor="middle" fill="#94a3b8">
                  {months[i]}
                </text>
              </g>
            ))}
          </svg>
        </Card>

        {/* 折线图 */}
        <Card>
          <div className="mb-3 flex items-center justify-between">
            <h4 className="text-bodyMd font-medium text-text-primary">增长趋势（折线）</h4>
            <Tag variant="success" tone="soft">
              持续上升
            </Tag>
          </div>
          <svg viewBox="0 0 300 210" className="w-full">
            <defs>
              <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2563eb" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d={`${toPath(line)} L 300 200 L 0 200 Z`} fill="url(#area)" />
            <path d={toPath(line)} fill="none" stroke="#2563eb" strokeWidth="2.5" />
            {line.map((v, i) => (
              <circle
                key={i}
                cx={(i / (line.length - 1)) * 300}
                cy={200 - v * 1.8}
                r="2.5"
                fill="#2563eb"
              />
            ))}
          </svg>
        </Card>

        {/* 环形图 */}
        <Card>
          <h4 className="mb-3 text-bodyMd font-medium text-text-primary">流量来源（环形）</h4>
          <div className="flex items-center gap-6">
            <svg viewBox="0 0 120 120" className="h-36 w-36">
              {(() => {
                let offset = 0
                return donut.map((d) => {
                  const dash = d.value * 2.51
                  const el = (
                    <circle
                      key={d.label}
                      cx="60"
                      cy="60"
                      r="40"
                      fill="none"
                      stroke={d.color}
                      strokeWidth="18"
                      strokeDasharray={`${dash} 251`}
                      strokeDashoffset={-offset}
                      transform="rotate(-90 60 60)"
                    />
                  )
                  offset += dash
                  return el
                })
              })()}
              <text
                x="60"
                y="58"
                fontSize="14"
                fontWeight="bold"
                textAnchor="middle"
                fill="#0f172a"
              >
                100%
              </text>
              <text x="60" y="72" fontSize="8" textAnchor="middle" fill="#94a3b8">
                总流量
              </text>
            </svg>
            <div className="flex flex-col gap-2">
              {donut.map((d) => (
                <div
                  key={d.label}
                  className="flex items-center gap-2 text-bodySm text-text-secondary"
                >
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: d.color }} />
                  {d.label} <span className="ml-auto text-text-primary">{d.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* 进度指标 */}
        <Card>
          <h4 className="mb-3 text-bodyMd font-medium text-text-primary">目标完成度</h4>
          <div className="flex flex-col gap-4">
            {[
              { label: '年度销售额', value: 76, color: '#2563eb' },
              { label: '新增用户', value: 58, color: '#10b981' },
              { label: '客户满意度', value: 92, color: '#f59e0b' },
            ].map((p) => (
              <div key={p.label}>
                <div className="mb-1 flex justify-between text-bodySm">
                  <span className="text-text-secondary">{p.label}</span>
                  <span className="text-text-primary">{p.value}%</span>
                </div>
                <div className="h-2 rounded-full bg-bg-secondary">
                  <div
                    className="h-2 rounded-full"
                    style={{ width: `${p.value}%`, background: p.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
