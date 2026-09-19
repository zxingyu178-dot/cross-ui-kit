/**
 * OnboardingPage 引导页模板（web/mini 风格）—— Carousel + 指示器 + 跳过/下一步。
 */
import { useState } from 'react'
import { Button, Carousel, type CarouselItem } from '@kit/ui-web'

export interface OnboardingSlide {
  title: string
  description: string
  emoji?: string
  bg?: string
}

export interface OnboardingPageProps {
  slides?: OnboardingSlide[]
  onFinish?: () => void
  onSkip?: () => void
}

const defaultSlides: OnboardingSlide[] = [
  {
    title: '统一组件库',
    description: '98 个三栈齐备组件，开发即取即用',
    emoji: '🧩',
    bg: '#eff6ff',
  },
  {
    title: '设计感模板',
    description: '仪表盘、个人中心、营销首屏，开箱即用',
    emoji: '🎨',
    bg: '#faf5ff',
  },
  {
    title: '全端覆盖',
    description: '网页 / 小程序 / iOS / Android 一套标准',
    emoji: '📱',
    bg: '#f0fdf4',
  },
]

export function OnboardingPage({ slides = defaultSlides, onFinish, onSkip }: OnboardingPageProps) {
  const [index, setIndex] = useState(0)
  const isLast = index === slides.length - 1

  const items: CarouselItem[] = slides.map((s, i) => ({
    key: String(i),
    content: (
      <div
        className="flex h-80 flex-col items-center justify-center gap-4 rounded-2xl p-8"
        style={{ background: s.bg ?? '#f8fafc' }}
      >
        <span className="text-6xl">{s.emoji}</span>
        <h2 className="text-xl font-semibold text-text-primary">{s.title}</h2>
        <p className="max-w-sm text-center text-bodySm text-text-secondary">{s.description}</p>
      </div>
    ),
  }))

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center gap-6 p-6">
      <div className="flex justify-end">
        <Button variant="ghost" size="sm" onClick={onSkip}>
          跳过
        </Button>
      </div>
      <Carousel items={items} dots onChange={setIndex} height={320} />
      <div className="flex gap-3">
        <Button variant="secondary" block onClick={onSkip}>
          稍后再说
        </Button>
        <Button variant="primary" block onClick={isLast ? onFinish : undefined}>
          {isLast ? '开始使用' : '下一步'}
        </Button>
      </div>
    </div>
  )
}
