/** ActionSheet 示例：底部动作面板（native）。 */
import { YStack } from 'tamagui'
import { ActionSheet } from '../index'

export function States() {
  return (
    <YStack>
      <ActionSheet
        open
        title="选择操作"
        actions={[
          { key: 'edit', label: '编辑' },
          { key: 'del', label: '删除', danger: true },
        ]}
      />
    </YStack>
  )
}
