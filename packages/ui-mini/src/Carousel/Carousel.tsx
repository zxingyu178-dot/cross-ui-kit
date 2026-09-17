/**
 * Carousel 轮播图（mini：小程序 / 移动 H5）—— View+Text 自建，
 * 滑动切换 + 指示器 + 左右箭头，支持自动播放。
 */
import { Text, View } from '@tarojs/components'
import { useEffect, useState } from 'react'
import type { CarouselProps } from './Carousel.types'
import './Carousel.scss'

export function Carousel({
  items = [],
  autoplay = false,
  interval = 3000,
  dots = true,
  arrows = true,
  onChange,
  height = 200,
  className = '',
}: CarouselProps) {
  const [current, setCurrent] = useState(0)

  const goTo = (index: number) => {
    const next = (index + items.length) % items.length
    setCurrent(next)
    onChange?.(next)
  }

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
    <View className={`kit-carousel ${className}`.trim()} style={{ height }}>
      <View className="kit-carousel__track" style={{ transform: `translateX(-${current * 100}%)` }}>
        {items.map((item) => (
          <View key={item.key} className="kit-carousel__slide">
            {item.content}
          </View>
        ))}
      </View>

      {arrows && items.length > 1 ? (
        <>
          <View
            className="kit-carousel__arrow kit-carousel__arrow--left"
            onClick={() => goTo(current - 1)}
          >
            <Text>‹</Text>
          </View>
          <View
            className="kit-carousel__arrow kit-carousel__arrow--right"
            onClick={() => goTo(current + 1)}
          >
            <Text>›</Text>
          </View>
        </>
      ) : null}

      {dots && items.length > 1 ? (
        <View className="kit-carousel__dots">
          {items.map((item, index) => (
            <View
              key={item.key}
              className={`kit-carousel__dot ${index === current ? 'kit-carousel__dot--active' : ''}`}
              onClick={() => goTo(index)}
            />
          ))}
        </View>
      ) : null}
    </View>
  )
}
