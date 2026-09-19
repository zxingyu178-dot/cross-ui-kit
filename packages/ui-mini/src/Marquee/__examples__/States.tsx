/** Marquee 示例：跑马灯（mini）。 */
import { View } from '@tarojs/components'
import { Marquee } from '../index'

export function States() {
  return (
    <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <Marquee>这是一条普通跑马灯内容</Marquee>
      <Marquee reverse>反向滚动的跑马灯</Marquee>
    </View>
  )
}
