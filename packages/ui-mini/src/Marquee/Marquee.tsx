/**
 * Marquee 跑马灯（mini：小程序 / 移动 H5）。
 */
import { Text, View } from '@tarojs/components'
import type { MarqueeProps } from './Marquee.types'
import './Marquee.scss'

export function Marquee({ children, reverse = false, className = '' }: MarqueeProps) {
  return (
    <View className={`kit-marquee ${reverse ? 'kit-marquee--reverse' : ''} ${className}`.trim()}>
      <View className="kit-marquee__inner">
        <Text className="kit-marquee__text">{children}</Text>
        <Text className="kit-marquee__text">{children}</Text>
      </View>
    </View>
  )
}
