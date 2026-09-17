/** DropdownMenu 示例：基础/禁用/危险/对齐（mini）。 */
import { Text, View } from '@tarojs/components'
import { DropdownMenu } from '../index'

export function States() {
  return (
    <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 24, padding: 12 }}>
      <DropdownMenu
        trigger={
          <Text
            style={{
              fontSize: 14,
              padding: '8px 12px',
              border: '1px solid var(--kit-color-border-default)',
              borderRadius: 6,
            }}
          >
            操作 ▼
          </Text>
        }
        items={[
          { key: 'edit', label: '编辑', onClick: () => {} },
          { key: 'copy', label: '复制', onClick: () => {} },
          { key: 'export', label: '导出', disabled: true },
          { key: 'delete', label: '删除', danger: true, onClick: () => {} },
        ]}
      />
      <DropdownMenu
        trigger={
          <Text
            style={{
              fontSize: 14,
              padding: '8px 12px',
              border: '1px solid var(--kit-color-border-default)',
              borderRadius: 6,
            }}
          >
            右对齐 ▼
          </Text>
        }
        align="end"
        items={[
          { key: 'a', label: '选项 A' },
          { key: 'b', label: '选项 B' },
        ]}
      />
    </View>
  )
}
