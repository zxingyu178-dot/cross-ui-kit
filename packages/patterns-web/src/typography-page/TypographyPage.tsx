/**
 * TypographyPage 字体排版层级展示页（web）—— 字号/字重/行高/间距 token。
 */
import { Card } from '@kit/ui-web'

const scale = [
  { name: 'Display 4xl', size: 36, weight: 700, sample: '跨端 UI 组件库' },
  { name: 'Title 2xl', size: 24, weight: 600, sample: '页面主标题' },
  { name: 'Title xl', size: 20, weight: 600, sample: '区块标题' },
  { name: 'Title md', size: 16, weight: 500, sample: '卡片标题' },
  { name: 'Body lg', size: 16, weight: 400, sample: '正文段落，阅读舒适' },
  { name: 'Body md', size: 14, weight: 400, sample: '正文，默认字号' },
  { name: 'Body sm', size: 13, weight: 400, sample: '辅助说明文字' },
  { name: 'Caption', size: 12, weight: 400, sample: '标签/时间戳' },
]

export function TypographyPage() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold text-text-primary">字体排版 Typography</h1>
        <p className="text-bodySm text-text-secondary">字号 / 字重均来自 @kit/tokens，禁止硬编码</p>
      </div>

      <Card>
        <h3 className="mb-4 text-titleSm font-medium text-text-primary">字号层级</h3>
        <div className="flex flex-col gap-3">
          {scale.map((s) => (
            <div
              key={s.name}
              className="flex items-baseline gap-4 border-b border-border-default pb-3"
            >
              <span className="w-32 shrink-0 text-bodySm text-text-tertiary">{s.name}</span>
              <span
                style={{ fontSize: s.size, fontWeight: s.weight }}
                className="text-text-primary"
              >
                {s.sample}
              </span>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <h3 className="mb-4 text-titleSm font-medium text-text-primary">字重</h3>
        <div className="flex flex-wrap gap-6">
          {[
            { w: 400, label: 'Regular 400' },
            { w: 500, label: 'Medium 500' },
            { w: 600, label: 'Semibold 600' },
            { w: 700, label: 'Bold 700' },
          ].map((f) => (
            <div key={f.w} className="flex flex-col">
              <span style={{ fontWeight: f.w, fontSize: 20 }} className="text-text-primary">
                字体样例 Aa
              </span>
              <span className="text-bodySm text-text-secondary">{f.label}</span>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <h3 className="mb-4 text-titleSm font-medium text-text-primary">行内文本</h3>
        <div className="flex flex-col gap-2 text-bodyMd text-text-primary">
          <p>
            普通正文段落。<strong>加粗强调</strong>，
            <span className="text-primary-default">链接样式</span>，
            <span className="text-danger">危险提示</span>。
          </p>
          <p className="text-bodySm text-text-secondary">
            次要说明文字，用于辅助信息、时间戳、描述。
          </p>
          <p className="font-mono text-bodySm text-text-primary">const theme = 'dark';</p>
        </div>
      </Card>
    </div>
  )
}
