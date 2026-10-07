import { useState } from 'react'
import { Button, Toast } from '@kit/ui-native'
import { XStack, YStack } from 'tamagui'
import { DemoScreen, Section } from '../DemoShell'

type ToastType = 'info' | 'success' | 'warning' | 'error' | 'loading'

export default function ToastDemo() {
  const [open, setOpen] = useState(false)
  const [msg, setMsg] = useState('')
  const [type, setType] = useState<ToastType>('info')

  const show = (t: ToastType, m: string) => {
    setType(t)
    setMsg(m)
    setOpen(true)
  }

  return (
    <DemoScreen title="Toast 轻提示">
      <Section label="各类型（点击触发，不阻断下层）">
        <YStack gap="$3">
          <XStack flexWrap="wrap" gap="$3">
            <Button size="sm" onPress={() => show('info', '这是一条普通提示')}>
              信息
            </Button>
            <Button size="sm" variant="secondary" onPress={() => show('success', '操作成功')}>
              成功
            </Button>
            <Button size="sm" variant="ghost" onPress={() => show('warning', '请注意风险')}>
              警告
            </Button>
            <Button size="sm" variant="danger" onPress={() => show('error', '操作失败')}>
              错误
            </Button>
            <Button size="sm" onPress={() => show('loading', '加载中…')}>
              加载
            </Button>
          </XStack>
        </YStack>
      </Section>

      <Toast open={open} onOpenChange={setOpen} message={msg} type={type} position="center" />
    </DemoScreen>
  )
}
