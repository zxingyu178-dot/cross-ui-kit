/**
 * Carousel 轮播图（web）—— div 容器 + 滑动切换 + 指示器 + 左右箭头，
 * 支持自动播放，受控/非受控。
 */
import { useEffect, useState } from 'react'
import { cn } from '@kit/core'
import type { CarouselProps } from './Carousel.types'

export function Carousel({
  items = [],
  autoplay = false,
  interval = 3000,
  dots = true,
  arrows = true,
  onChange,
  height = 200,
  className,
}: CarouselProps) {
  const [current, setCurrent] = useState(0)

  const goTo = (index: number) => {
    const next = (index + items.length) % items.length
    setCurrent(next)
    onChange?.(next)
  }

  const prev = () => goTo(current - 1)
  const next = () => goTo(current + 1)

  useEffect(() => {
    if (!autoplay || items.length <= 1) return
    const timer = setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % items.length
        onChange?.(next)
        return next
      })
    }, interval)
    return () => clearInterval(timer)
  }, [autoplay, interval, items.length, onChange])

  if (items.length === 0) return null

  return (
    <div
      className={cn('relative overflow-hidden rounded-md bg-bg-muted', className)}
      style={{ height }}
    >
      <div
        className="flex h-full transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {items.map((item) => (
          <div key={item.key} className="h-full w-full shrink-0">
            {item.content}
          </div>
        ))}
      </div>

      {arrows && items.length > 1 ? (
        <>
          <button
            type="button"
            onClick={prev}
            className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-bg-card/80 text-text-primary shadow-md transition-opacity hover:bg-bg-card"
            aria-label="上一张"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-bg-card/80 text-text-primary shadow-md transition-opacity hover:bg-bg-card"
            aria-label="下一张"
          >
            ›
          </button>
        </>
      ) : null}

      {dots && items.length > 1 ? (
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
          {items.map((item, index) => (
            <button
              key={item.key}
              type="button"
              onClick={() => goTo(index)}
              className={cn(
                'h-2 rounded-full transition-all',
                index === current ? 'w-6 bg-primary-default' : 'w-2 bg-bg-card/60 hover:bg-bg-card',
              )}
              aria-label={`第 ${index + 1} 张`}
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}
