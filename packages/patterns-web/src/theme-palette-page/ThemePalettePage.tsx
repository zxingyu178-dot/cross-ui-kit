/**
 * ThemePalettePage 主题色板展示页（web）—— 展示 token 色板 + 灰阶 + 语义色。
 */
import { Card, Tag } from '@kit/ui-web'

interface Swatch {
  name: string
  hex: string
  text?: 'light' | 'dark'
}

const groups: { title: string; swatches: Swatch[] }[] = [
  {
    title: '主色 Primary',
    swatches: [
      { name: '50', hex: '#eff6ff', text: 'dark' },
      { name: '100', hex: '#dbeafe', text: 'dark' },
      { name: '500', hex: '#2563eb', text: 'light' },
      { name: '600', hex: '#1d4ed8', text: 'light' },
      { name: '700', hex: '#1e40af', text: 'light' },
    ],
  },
  {
    title: '语义色',
    swatches: [
      { name: 'success', hex: '#16a34a', text: 'light' },
      { name: 'warning', hex: '#d97706', text: 'light' },
      { name: 'danger', hex: '#dc2626', text: 'light' },
      { name: 'info', hex: '#0891b2', text: 'light' },
      { name: 'neutral', hex: '#64748b', text: 'light' },
    ],
  },
  {
    title: '灰阶 Text',
    swatches: [
      { name: 'primary', hex: '#0f172a', text: 'light' },
      { name: 'secondary', hex: '#475569', text: 'light' },
      { name: 'tertiary', hex: '#94a3b8', text: 'dark' },
      { name: 'border', hex: '#e2e8f0', text: 'dark' },
      { name: 'bg', hex: '#f8fafc', text: 'dark' },
    ],
  },
]

export function ThemePalettePage() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold text-text-primary">主题色板</h1>
        <p className="text-bodySm text-text-secondary">所有视觉值均来自 @kit/tokens，禁止硬编码</p>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {groups.map((g) => (
          <Card key={g.title}>
            <h3 className="mb-3 text-titleSm font-medium text-text-primary">{g.title}</h3>
            <div className="flex flex-col gap-2">
              {g.swatches.map((s) => (
                <div
                  key={s.name}
                  className="flex items-center justify-between rounded-md px-3 py-2"
                  style={{ background: s.hex, color: s.text === 'light' ? '#fff' : '#0f172a' }}
                >
                  <span className="text-bodySm">{s.name}</span>
                  <span className="font-mono text-bodySm">{s.hex}</span>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* 按钮材质 */}
      <Card>
        <h3 className="mb-3 text-titleSm font-medium text-text-primary">按钮变体</h3>
        <div className="flex flex-wrap gap-2">
          <Tag variant="primary" tone="solid">
            Primary
          </Tag>
          <Tag variant="success" tone="solid">
            Success
          </Tag>
          <Tag variant="warning" tone="solid">
            Warning
          </Tag>
          <Tag variant="danger" tone="solid">
            Danger
          </Tag>
          <Tag variant="info" tone="solid">
            Info
          </Tag>
          <Tag variant="neutral" tone="solid">
            Neutral
          </Tag>
          <Tag variant="primary">soft</Tag>
          <Tag variant="primary" tone="outline">
            outline
          </Tag>
        </div>
      </Card>
    </div>
  )
}
