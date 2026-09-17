/** Watermark 示例：基础水印（mini）。 */
import { Text, View } from '@tarojs/components'
import { Watermark } from '../index'

export function States() {
  return (
    <View style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 12 }}>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>基础水印</Text>
        <Watermark text="机密文件">
          <View
            style={{
              height: 128,
              borderWidth: 1,
              borderColor: 'var(--kit-color-border-default)',
              borderRadius: 6,
              padding: 16,
              background: 'var(--kit-color-bg-card)',
            }}
          >
            <Text style={{ fontSize: 14, color: 'var(--kit-color-text-primary)' }}>
              这是一段需要加水印的内容。
            </Text>
          </View>
        </Watermark>
      </View>
    </View>
  )
}
