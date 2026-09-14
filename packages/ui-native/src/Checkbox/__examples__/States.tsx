/** Checkbox 示例：基础、受控、半选、禁用、错误（native）。 */
import { YStack } from 'tamagui'
import { useState } from 'react'
import { Checkbox } from '../index'

export function States() {
  const [agree, setAgree] = useState(true)
  const [childA, setChildA] = useState(true)
  const [childB, setChildB] = useState(false)
  const [parent, setParent] = useState<boolean>(true)
  const [indeterminate, setIndeterminate] = useState(true)

  return (
    <YStack gap={12} padding={16} width={300}>
      <Checkbox label="未选中" accessibilityLabel="未选中" />
      <Checkbox
        label={`受控选中（当前：${agree ? '已选' : '未选'}）`}
        checked={agree}
        onChange={setAgree}
      />
      <Checkbox
        label="半选（父级）"
        checked={parent}
        indeterminate={indeterminate}
        onChange={(v) => {
          setIndeterminate(false)
          setParent(v)
          setChildA(v)
          setChildB(v)
        }}
      />
      <YStack gap={12} marginLeft={20}>
        <Checkbox label="子项 A" checked={childA} onChange={setChildA} />
        <Checkbox label="子项 B" checked={childB} onChange={setChildB} />
      </YStack>
      <Checkbox label="禁用未选" disabled />
      <Checkbox label="禁用已选" disabled defaultChecked />
      <Checkbox label="错误态" error />
    </YStack>
  )
}
