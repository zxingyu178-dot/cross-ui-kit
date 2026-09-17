/** DropdownMenu 示例：基础/禁用/危险/对齐（native）。 */
import { Text, XStack } from 'tamagui'
import { DropdownMenu } from '../index'

export function States() {
  return (
    <XStack flexWrap="wrap" gap={24} padding={12}>
      <DropdownMenu
        trigger={
          <Text
            fontSize={14}
            padding={8}
            borderWidth={1}
            borderColor="$borderDefault"
            borderRadius={6}
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
            fontSize={14}
            padding={8}
            borderWidth={1}
            borderColor="$borderDefault"
            borderRadius={6}
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
    </XStack>
  )
}
