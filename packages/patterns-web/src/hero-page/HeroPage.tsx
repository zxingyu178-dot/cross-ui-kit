/**
 * HeroPage 营销首屏模板（web）—— 渐变背景 + 大标题 + CTA + 特性点。
 */
import { Button, Card, Tag } from '@kit/ui-web'

export interface HeroPageProps {
  badge?: string
  title?: string
  subtitle?: string
  primaryCta?: string
  secondaryCta?: string
  onPrimary?: () => void
  onSecondary?: () => void
}

export function HeroPage({
  badge = '全新 v2.4',
  title = '一套组件，覆盖全端',
  subtitle = '98 个三栈齐备组件 + 设计感页面模板，网页 / 小程序 / iOS / Android 统一标准，让开发直接取用。',
  primaryCta = '立即开始',
  secondaryCta = '查看文档',
  onPrimary,
  onSecondary,
}: HeroPageProps) {
  return (
    <div
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0f172a 0%, #1e1b4b 50%, #4c1d95 100%)' }}
    >
      {/* 装饰光斑 */}
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-blue-500/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-purple-500/30 blur-3xl" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 py-24 text-center">
        <Tag variant="primary" tone="solid">
          {badge}
        </Tag>
        <h1 className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-6xl">
          {title}
        </h1>
        <p className="max-w-2xl text-bodyMd text-slate-100">{subtitle}</p>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary" size="lg" onClick={onPrimary}>
            {primaryCta}
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="border-white/20 bg-white/10 text-white hover:bg-white/20"
            onClick={onSecondary}
          >
            {secondaryCta}
          </Button>
        </div>

        {/* 特性点 */}
        <div className="mt-8 grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { emoji: '⚡', t: '开箱即用', d: '复制组件即跑通，无需配置' },
            { emoji: '🎯', t: '统一标准', d: '三栈同名同义同 props' },
            { emoji: '🌙', t: '暗色友好', d: '全部组件内置暗色主题' },
          ].map((f) => (
            <Card key={f.t} className="bg-white/5 backdrop-blur">
              <div className="flex flex-col items-center gap-2">
                <span className="text-3xl">{f.emoji}</span>
                <h3 className="text-bodyMd font-medium text-white">{f.t}</h3>
                <p className="text-bodySm text-slate-200">{f.d}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
