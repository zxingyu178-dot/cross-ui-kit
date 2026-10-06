/**
 * FlipCardPage 卡片翻转页（web）—— 点击 3D 翻转，正反两面内容。
 * 用原生 div 承担 3D；除 backface-visibility 外，再用 visibility 在翻转中点切换两面，
 * 即使个别浏览器 backface 合成异常，也能保证初始/结束只显示正确面。
 */
import { useState } from 'react'
import { Tag } from '@kit/ui-web'

const cards = [
  {
    front: { emoji: '❓', title: '什么是 cross-ui-kit？' },
    back: {
      title: '跨端 UI 模板库',
      desc: '覆盖网页、PC、小程序、原生 App 的组件与页面模板库，统一标准、即取即用。',
    },
  },
  {
    front: { emoji: '🎯', title: '支持哪些技术栈？' },
    back: {
      title: '三大渲染栈',
      desc: 'React + Vite + Tailwind（web/Tauri）、Taro + NutUI（小程序/H5）、Expo + Tamagui（原生）。',
    },
  },
  {
    front: { emoji: '⚡', title: '如何保证开发效率？' },
    back: {
      title: 'AI 友好契约',
      desc: '机器可读 registry + 组件映射 + AGENTS.md 铁律，AI 可直接检索调用，避免重复造轮子。',
    },
  },
]

export function FlipCardPage() {
  const [flipped, setFlipped] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((c, i) => {
        const isFlipped = flipped === i
        return (
          <div
            key={i}
            role="button"
            tabIndex={0}
            className="h-56 cursor-pointer outline-none [perspective:1200px]"
            onClick={() => setFlipped(isFlipped ? null : i)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') setFlipped(isFlipped ? null : i)
            }}
          >
            <div
              className="relative h-full w-full transition-transform duration-500 ease-out [transform-style:preserve-3d]"
              style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
            >
              {/* 正面 */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-lg border border-border-default bg-bg-card p-6 text-center shadow-card [backface-visibility:hidden]"
                style={{
                  transform: 'rotateY(0deg)',
                  visibility: isFlipped ? 'hidden' : 'visible',
                  transition: 'visibility 0s linear 0.25s',
                }}
              >
                <span className="text-5xl">{c.front.emoji}</span>
                <h3 className="text-bodyMd font-medium text-text-primary">{c.front.title}</h3>
                <Tag variant="primary" tone="soft">
                  点击翻转
                </Tag>
              </div>
              {/* 背面 */}
              <div
                className="absolute inset-0 flex flex-col justify-center gap-2 rounded-lg bg-gradient-to-br from-primary-default to-indigo-700 p-6 text-white shadow-card [backface-visibility:hidden]"
                style={{
                  transform: 'rotateY(180deg)',
                  visibility: isFlipped ? 'visible' : 'hidden',
                  transition: 'visibility 0s linear 0.25s',
                }}
              >
                <h3 className="text-bodyMd font-semibold">{c.back.title}</h3>
                <p className="text-bodySm text-white/85">{c.back.desc}</p>
                <span className="mt-2 inline-flex items-center self-start rounded-md bg-white/20 px-3 py-1 text-bodySm">
                  了解详情
                </span>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
