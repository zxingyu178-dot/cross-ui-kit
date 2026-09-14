/** Checkbox 示例：基础、默认选中、半选、禁用、错误（web）。 */
import { useState } from 'react'
import { Checkbox } from '../index'

export function States() {
  const [agree, setAgree] = useState(true)
  const [indeterminate, setIndeterminate] = useState(true)
  const [childA, setChildA] = useState(true)
  const [childB, setChildB] = useState(false)

  return (
    <div className="flex flex-col gap-3">
      <Checkbox label="未选中" />
      <Checkbox
        label={`受控选中（当前：${agree ? '已选' : '未选'}）`}
        onChange={setAgree}
        checked={agree}
      />
      <Checkbox label="默认选中（非受控）" defaultChecked />
      <Checkbox
        label="半选（父级，部分子项选中）"
        checked={indeterminate}
        indeterminate={indeterminate}
        onChange={(v) => {
          setIndeterminate(false)
          setChildA(v)
          setChildB(v)
        }}
      />
      <div className="ml-6 flex flex-col gap-3">
        <Checkbox label="子项 A" checked={childA} onChange={setChildA} />
        <Checkbox label="子项 B" checked={childB} onChange={setChildB} />
      </div>
      <Checkbox label="禁用未选" disabled />
      <Checkbox label="禁用已选" disabled defaultChecked />
      <Checkbox label="错误态" error />
    </div>
  )
}
