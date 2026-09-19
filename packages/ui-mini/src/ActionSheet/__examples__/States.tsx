/** ActionSheet 示例：底部动作面板（mini）。 */
import { View } from '@tarojs/components'
import { ActionSheet } from '../index'

export function States() {
  return (
    <View>
      <ActionSheet
        open
        title="选择操作"
        actions={[
          { key: 'edit', label: '编辑' },
          { key: 'del', label: '删除', danger: true },
        ]}
      />
    </View>
  )
}
