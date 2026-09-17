/** Image 示例：基础/圆形/加载失败（mini）。 */
import { Text, View } from '@tarojs/components'
import { Image } from '../index'

export function States() {
  return (
    <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 16, padding: 12 }}>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>基础</Text>
        <Image src="https://picsum.photos/200/150" width={200} height={150} radius={8} />
      </View>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>圆形</Text>
        <Image src="https://picsum.photos/120" width={120} height={120} radius={60} />
      </View>
    </View>
  )
}
