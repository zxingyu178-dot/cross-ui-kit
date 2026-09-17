/** Carousel 示例：基础/自动播放（mini）。 */
import { View } from '@tarojs/components'
import { Carousel } from '../index'
import type { CarouselItem } from '../Carousel.types'

const items: CarouselItem[] = [
  { key: '1', content: <View style={{ background: '#2563eb', height: '100%' }} /> },
  { key: '2', content: <View style={{ background: '#10b981', height: '100%' }} /> },
  { key: '3', content: <View style={{ background: '#f59e0b', height: '100%' }} /> },
]

export function States() {
  return (
    <View style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 12 }}>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Carousel items={items} height={180} />
      </View>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Carousel items={items} height={180} autoplay interval={3000} arrows={false} />
      </View>
    </View>
  )
}
