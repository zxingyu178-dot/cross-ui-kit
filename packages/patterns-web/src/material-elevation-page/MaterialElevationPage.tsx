/**
 * MaterialElevationPage 材质层级展示页（web）—— 阴影/圆角/投影层级 + 渐变按钮。
 */
import { Card, Tag } from '@kit/ui-web'

const elevations = [
  { level: '0', desc: '扁平', shadow: 'none' },
  { level: '1', desc: '卡片', shadow: '0 1px 3px rgba(0,0,0,0.08)' },
  { level: '2', desc: '浮层', shadow: '0 4px 12px rgba(0,0,0,0.12)' },
  { level: '3', desc: '弹窗', shadow: '0 8px 24px rgba(0,0,0,0.16)' },
  { level: '4', desc: '抽屉', shadow: '0 16px 40px rgba(0,0,0,0.2)' },
]

const radii = [
  { name: 'sm', px: 4 },
  { name: 'md', px: 8 },
  { name: 'lg', px: 12 },
  { name: 'xl', px: 16 },
  { name: '2xl', px: 24 },
]

export function MaterialElevationPage() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold text-text-primary">材质与层级</h1>
        <p className="text-bodySm text-text-secondary">elevation 阴影 / radius 圆角 / 渐变按钮</p>
      </div>

      {/* Elevation */}
      <Card>
        <h3 className="mb-4 text-titleSm font-medium text-text-primary">Elevation 阴影层级</h3>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
          {elevations.map((e) => (
            <div key={e.level} className="flex flex-col items-center gap-2">
              <div
                className="flex h-20 w-full items-center justify-center rounded-lg bg-bg-card"
                style={{ boxShadow: e.shadow }}
              >
                <span className="text-bodySm text-text-secondary">{e.level}</span>
              </div>
              <span className="text-bodySm text-text-primary">{e.desc}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Radius */}
      <Card>
        <h3 className="mb-4 text-titleSm font-medium text-text-primary">圆角 Radius</h3>
        <div className="flex flex-wrap gap-4">
          {radii.map((r) => (
            <div key={r.name} className="flex flex-col items-center gap-2">
              <div className="h-16 w-16 bg-primary-default" style={{ borderRadius: r.px }} />
              <span className="text-bodySm text-text-primary">
                {r.name} ({r.px}px)
              </span>
            </div>
          ))}
        </div>
      </Card>

      {/* 渐变按钮 */}
      <Card>
        <h3 className="mb-4 text-titleSm font-medium text-text-primary">渐变材质按钮</h3>
        <div className="flex flex-wrap gap-3">
          <button
            className="rounded-full px-6 py-2.5 text-white"
            style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)' }}
          >
            紫蓝渐变
          </button>
          <button
            className="rounded-full px-6 py-2.5 text-white"
            style={{ background: 'linear-gradient(135deg, #f093fb, #f5576c)' }}
          >
            粉红渐变
          </button>
          <button
            className="rounded-full px-6 py-2.5 text-white"
            style={{ background: 'linear-gradient(135deg, #43e97b, #38f9d7)' }}
          >
            青绿渐变
          </button>
          <button
            className="rounded-full px-6 py-2.5 text-white shadow-lg"
            style={{ background: 'linear-gradient(135deg, #fa709a, #fee140)' }}
          >
            粉黄渐变 + 投影
          </button>
        </div>
      </Card>

      {/* 标签材质 */}
      <Card>
        <h3 className="mb-4 text-titleSm font-medium text-text-primary">Tag 材质组合</h3>
        <div className="flex flex-wrap gap-2">
          <Tag variant="primary" tone="solid">
            solid
          </Tag>
          <Tag variant="primary">soft</Tag>
          <Tag variant="primary" tone="outline">
            outline
          </Tag>
          <Tag variant="success" tone="solid">
            success
          </Tag>
          <Tag variant="warning" tone="solid">
            warning
          </Tag>
          <Tag variant="danger" tone="solid">
            danger
          </Tag>
        </div>
      </Card>
    </div>
  )
}
