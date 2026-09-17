/** Popover 示例：基础/上方/右对齐（mini）。 */
import { Text, View } from '@tarojs/components'
import { Popover } from '../index'

export function States() {
  return (
    <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 24, padding: 12 }}>
      <Popover
        trigger={
          <Text
            style={{
              fontSize: 14,
              padding: '8px 12px',
              border: '1px solid var(--kit-color-border-default)',
              borderRadius: 6,
            }}
          >
            点击弹出 ▼
          </Text>
        }
        content={
          <View>
            <Text style={{ fontSize: 14, fontWeight: 500, color: 'var(--kit-color-text-primary)' }}>
              弹出标题
            </Text>
            <Text style={{ fontSize: 13, color: 'var(--kit-color-text-secondary)', marginTop: 4 }}>
              这是弹出层的内容区域。
            </Text>
          </View>
        }
      />
      <Popover
        trigger={
          <Text
            style={{
              fontSize: 14,
              padding: '8px 12px',
              border: '1px solid var(--kit-color-border-default)',
              borderRadius: 6,
            }}
          >
            上方弹出 ▲
          </Text>
        }
        side="top"
        content={
          <Text style={{ fontSize: 13, color: 'var(--kit-color-text-secondary)' }}>
            从上方弹出的内容。
          </Text>
        }
      />
    </View>
  )
}
