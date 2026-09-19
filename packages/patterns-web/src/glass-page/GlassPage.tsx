/**
 * GlassPage 玻璃拟态材质页（web）—— 渐变背景 + 毛玻璃卡片浮层。
 */
import { Tag } from '@kit/ui-web'

export function GlassPage() {
  return (
    <div
      className="relative overflow-hidden rounded-lg p-8"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
      }}
    >
      {/* 装饰光斑 */}
      <div className="pointer-events-none absolute left-10 top-10 h-40 w-40 rounded-full bg-yellow-300/40 blur-2xl" />
      <div className="pointer-events-none absolute right-20 bottom-10 h-52 w-52 rounded-full bg-pink-400/40 blur-2xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-32 w-32 rounded-full bg-cyan-300/40 blur-2xl" />

      <div className="relative flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold text-white drop-shadow">玻璃拟态 Glassmorphism</h1>
          <p className="text-white/80">backdrop-blur + 半透明白 + 1px 描边</p>
        </div>

        {/* 毛玻璃卡 */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            { emoji: '✨', title: '轻盈', desc: '5% 不透明白底 + 12px 模糊' },
            { emoji: '🔮', title: '通透', desc: '背景光斑透过卡片可见' },
            { emoji: '💎', title: '层次', desc: '1px 白色描边模拟高光边缘' },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-white/30 bg-white/15 p-5 backdrop-blur-xl"
            >
              <div className="text-4xl">{c.emoji}</div>
              <h3 className="mt-2 text-lg font-semibold text-white">{c.title}</h3>
              <p className="text-sm text-white/85">{c.desc}</p>
            </div>
          ))}
        </div>

        {/* 毛玻璃按钮组 */}
        <div className="flex flex-wrap gap-3">
          <button className="rounded-full border border-white/40 bg-white/20 px-6 py-2.5 text-white backdrop-blur-md transition hover:bg-white/30">
            主要操作
          </button>
          <button className="rounded-full border border-white/40 bg-white/5 px-6 py-2.5 text-white backdrop-blur-md transition hover:bg-white/15">
            次要操作
          </button>
          <Tag className="border border-white/40 bg-white/20 text-white backdrop-blur-md">
            毛玻璃标签
          </Tag>
        </div>

        {/* 半透明 Card */}
        <div className="rounded-2xl border border-white/30 bg-white/10 p-5 backdrop-blur-xl">
          <h3 className="font-semibold text-white">Glass Card</h3>
          <p className="text-sm text-white/85">
            这是一张毛玻璃卡片，浮在彩色渐变背景上。白色半透明 + 高斯模糊是玻璃拟态的核心。
          </p>
        </div>
      </div>
    </div>
  )
}
