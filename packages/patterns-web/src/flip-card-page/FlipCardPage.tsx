/**
 * FlipCardPage 卡片翻转页（web）—— 点击/悬停 3D 翻转，正反两面内容。
 */
import { Card, Tag, Button } from '@kit/ui-web'

const cards = [
  {
    front: { emoji: '❓', title: '什么是 cross-ui-kit？', tag: '点击翻转' },
    back: {
      title: '跨端 UI 模板库',
      desc: '覆盖网页、PC、小程序、原生 App 的组件与页面模板库，统一标准、即取即用。',
    },
  },
  {
    front: { emoji: '🎯', title: '支持哪些技术栈？', tag: '点击翻转' },
    back: {
      title: '三大渲染栈',
      desc: 'React + Vite + Tailwind（web/Tauri）、Taro + NutUI（小程序/H5）、Expo + Tamagui（原生）。',
    },
  },
  {
    front: { emoji: '⚡', title: '如何保证开发效率？', tag: '点击翻转' },
    back: {
      title: 'AI 友好契约',
      desc: '机器可读 registry + 组件映射 + AGENTS.md 铁律，AI 可直接检索调用，避免重复造轮子。',
    },
  },
]

export function FlipCardPage() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((c, i) => (
        <div key={i} className="group h-56 [perspective:1200px]">
          <div className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            {/* 正面 */}
            <Card className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center [backface-visibility:hidden]">
              <span className="text-5xl">{c.front.emoji}</span>
              <h3 className="text-bodyMd font-medium text-text-primary">{c.front.title}</h3>
              <Tag variant="primary" tone="soft">
                {c.front.tag}
              </Tag>
            </Card>
            {/* 背面 */}
            <Card className="absolute inset-0 flex flex-col justify-center gap-2 bg-gradient-to-br from-primary-default to-indigo-700 p-6 text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <h3 className="text-bodyMd font-semibold">{c.back.title}</h3>
              <p className="text-bodySm text-white/85">{c.back.desc}</p>
              <Button variant="secondary" size="sm" className="mt-2 self-start">
                了解详情
              </Button>
            </Card>
          </div>
        </div>
      ))}
    </div>
  )
}
