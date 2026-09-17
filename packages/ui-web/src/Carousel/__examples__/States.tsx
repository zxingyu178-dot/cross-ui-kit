import { Carousel } from '../index'
import type { CarouselItem } from '../Carousel.types'

const slideStyle = (color: string, text: string) => (
  <div
    style={{
      background: color,
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontSize: 24,
      fontWeight: 600,
    }}
  >
    {text}
  </div>
)

const items: CarouselItem[] = [
  { key: '1', content: slideStyle('#2563eb', 'Slide 1') },
  { key: '2', content: slideStyle('#10b981', 'Slide 2') },
  { key: '3', content: slideStyle('#f59e0b', 'Slide 3') },
  { key: '4', content: slideStyle('#ef4444', 'Slide 4') },
]

export function States() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">基础轮播（箭头 + 指示器）</span>
        <Carousel items={items} height={180} />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">自动播放（3秒切换）</span>
        <Carousel items={items} height={180} autoplay interval={3000} arrows={false} />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">无指示器</span>
        <Carousel items={items.slice(0, 2)} height={140} dots={false} />
      </div>
    </div>
  )
}
