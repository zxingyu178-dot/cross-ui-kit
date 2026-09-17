/**
 * Watermark 水印（web）—— 纯 CSS 背景图实现，覆盖在子元素上方。
 */
import { useMemo } from 'react'
import { cn } from '@kit/core'
import type { WatermarkProps } from './Watermark.types'

export function Watermark({
  text = 'Watermark',
  color = 'rgba(0, 0, 0, 0.15)',
  fontSize = 14,
  rotate = -22,
  gap = 100,
  opacity = 1,
  children,
  className,
}: WatermarkProps) {
  const watermarkStyle = useMemo(() => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    if (!ctx) return {}
    const size = gap * 2
    canvas.width = size
    canvas.height = size
    ctx.translate(size / 2, size / 2)
    ctx.rotate((rotate * Math.PI) / 180)
    ctx.font = `${fontSize}px sans-serif`
    ctx.fillStyle = color
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(text, 0, 0)
    const dataUrl = canvas.toDataURL()
    return {
      backgroundImage: `url(${dataUrl})`,
      backgroundRepeat: 'repeat',
      opacity,
      pointerEvents: 'none' as const,
    }
  }, [text, color, fontSize, rotate, gap, opacity])

  return (
    <div className={cn('relative', className)}>
      {children}
      <div className="absolute inset-0 z-50" style={watermarkStyle} aria-hidden="true" />
    </div>
  )
}
