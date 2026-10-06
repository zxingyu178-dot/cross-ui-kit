/**
 * FluidGradientPage 渐变流体主题页（web）—— 流动光斑 + 多彩渐变 + 玻璃卡。
 */
import { Card, Button, Tag } from '@kit/ui-web'

export function FluidGradientPage() {
  return (
    <div className="relative overflow-hidden rounded-xl p-8 lg:p-12">
      {/* 流动渐变背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600" />
      <div className="absolute -left-10 -top-10 h-72 w-72 animate-pulse rounded-full bg-cyan-400/40 blur-3xl" />
      <div className="absolute -bottom-10 right-0 h-80 w-80 animate-pulse rounded-full bg-amber-300/40 blur-3xl" />
      <div className="absolute left-1/3 top-1/2 h-64 w-64 rounded-full bg-fuchsia-400/30 blur-3xl" />

      <div className="relative">
        <Tag variant="neutral" tone="soft" className="bg-white/20 text-white">
          Fluid Theme
        </Tag>
        <h2 className="mt-4 max-w-xl text-4xl font-bold leading-tight text-white">
          流动的色彩，
          <br />
          让界面充满生命力
        </h2>
        <p className="mt-3 max-w-md text-white/85">
          多层渐变与柔和光斑叠加，配合毛玻璃材质，营造轻盈、梦幻、富有层次的视觉体验。
        </p>
        <div className="mt-6 flex gap-3">
          <Button variant="primary" className="bg-white text-purple-700 hover:bg-white/90">
            立即体验
          </Button>
          <Button variant="ghost" className="text-white hover:bg-white/15">
            查看文档
          </Button>
        </div>

        {/* 玻璃卡片组 */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { icon: '🌈', title: '多彩渐变', desc: '丰富的配色组合' },
            { icon: '💧', title: '流体光斑', desc: '柔和模糊层次' },
            { icon: '🪟', title: '玻璃质感', desc: '半透明磨砂' },
          ].map((c) => (
            <Card key={c.title} className="border border-white/30 bg-white/15 p-4 backdrop-blur-md">
              <span className="text-3xl">{c.icon}</span>
              <h4 className="mt-2 text-bodyMd font-medium text-white">{c.title}</h4>
              <p className="text-bodySm text-white/75">{c.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
