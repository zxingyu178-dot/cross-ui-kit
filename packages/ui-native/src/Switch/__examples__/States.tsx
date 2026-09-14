/** Switch 示例：受控、非受控、尺寸、禁用、异步 loading、带标签（native）。 */
import { useState } from 'react'
import { XStack, YStack } from 'tamagui'
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
    <YStack gap="$4" padding="$4">
      <Switch
        checked={notify}
        onCheckedChange={setNotify}
        label={`受控（当前：${notify ? '开' : '关'}）`}
      />
      <Switch defaultChecked label="默认打开（非受控）" />
      <Switch checked={autoSave} onCheckedChange={setAutoSave} label="默认关闭受控" />
      <XStack gap="$6" alignItems="center">
        <Switch size="md" defaultChecked label="中号 md" />
        <Switch size="sm" defaultChecked label="小号 sm" />
      </XStack>
      <Switch disabled label="禁用（关）" />
      <Switch disabled defaultChecked label="禁用（开）" />
      <Switch
        checked={asyncOn}
        onCheckedChange={handleAsync}
        loading={asyncLoading}
        label="异步切换（loading 1.2s）"
      />
    </YStack>
  )
}
