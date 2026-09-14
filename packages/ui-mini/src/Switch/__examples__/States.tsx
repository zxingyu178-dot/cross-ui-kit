/** Switch 示例：受控、非受控、尺寸、禁用、异步 loading、带标签（mini）。 */
import { View } from '@tarojs/components'
import { useState } from 'react'
import { Switch } from '../index'

export function States() {
  const [notify, setNotify] = useState(true)
  const [autoSave, setAutoSave] = useState(false)
  const [asyncOn, setAsyncOn] = useState(false)
  const [asyncLoading, setAsyncLoading] = useState(false)

  const handleAsync = (next: boolean) => {
    setAsyncLoading(true)
    setTimeout(() => {
      setAsyncOn(next)
      setAsyncLoading(false)
    }, 1200)
  }

  return (
    <View style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: 12 }}>
      <Switch
        checked={notify}
        onCheckedChange={setNotify}
        label={`受控（当前：${notify ? '开' : '关'}）`}
      />
      <Switch defaultChecked label="默认打开（非受控）" />
      <Switch checked={autoSave} onCheckedChange={setAutoSave} label="默认关闭受控" />
      <View style={{ display: 'flex', gap: 24 }}>
        <Switch size="md" defaultChecked label="中号 md" />
        <Switch size="sm" defaultChecked label="小号 sm" />
      </View>
      <Switch disabled label="禁用（关）" />
      <Switch disabled defaultChecked label="禁用（开）" />
      <Switch
        checked={asyncOn}
        onCheckedChange={handleAsync}
        loading={asyncLoading}
        label="异步切换（loading 1.2s）"
      />
    </View>
  )
}
