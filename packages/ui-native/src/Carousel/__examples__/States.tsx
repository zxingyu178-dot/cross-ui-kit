/** Carousel 示例：基础/自动播放（native）。 */
import { YStack } from 'tamagui'
import { Carousel } from '../index'
import type { CarouselItem } from '../Carousel.types'

const items: CarouselItem[] = [
  { key: '1', content: <YStack backgroundColor="#2563eb" flex={1} /> },
  { key: '2', content: <YStack backgroundColor="#10b981" flex={1} /> },
  { key: '3', content: <YStack backgroundColor="#f59e0b" flex={1} /> },
]

export function States() {
  return (
    <YStack padding={12} gap={24}>
      <Carousel items={items} height={180} />
      <Carousel items={items} height={180} autoplay interval={3000} arrows={false} />
    </YStack>
  )
}
