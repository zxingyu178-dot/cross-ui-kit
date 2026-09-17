/**
 * Watermark 水印（mini：小程序 / 移动 H5）—— View+Text 自建，
 * 绝对定位覆盖在子元素上方，重复文字。
 */
import { Text, View } from '@tarojs/components'
import type { WatermarkProps } from './Watermark.types'
import './Watermark.scss'

export function Watermark({
  text = 'Watermark',
  color = 'rgba(0, 0, 0, 0.15)',
  fontSize = 14,
  rotate = -22,
  gap = 100,
  opacity = 1,
  children,
  className = '',
}: WatermarkProps) {
  const rows = 4
  const cols = 3
  const items: { row: number; col: number }[] = []
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      items.push({ row: r, col: c })
    }
  }

  return (
    <View className={`kit-watermark ${className}`.trim()}>
      {children}
      <View className="kit-watermark__overlay" style={{ opacity }}>
        {items.map((item) => (
          <View
            key={`${item.row}-${item.col}`}
            className="kit-watermark__item"
            style={{
              left: `${item.col * gap}px`,
              top: `${item.row * gap}px`,
              transform: `rotate(${rotate}deg)`,
            }}
          >
            <Text style={{ color, fontSize }}>{text}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}
