import { useState } from 'react'
import { Button, Dialog } from '@kit/ui-native'
import { YStack } from 'tamagui'
import { DemoScreen, Section } from '../DemoShell'

export default function DialogDemo() {
  const [basic, setBasic] = useState(false)
  const [asyncOpen, setAsyncOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleAsyncConfirm = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setAsyncOpen(false)
    }, 1200)
  }

  return (
    <DemoScreen title="Dialog 对话框">
      <Section label="基础（遮罩 / 按钮关闭）">
        <YStack gap="$3">
          <Button onPress={() => setBasic(true)}>打开基础对话框</Button>
          <Dialog
            open={basic}
            onOpenChange={setBasic}
            title="删除确认"
            description="删除后不可恢复，确定继续吗？"
            onConfirm={() => setBasic(false)}
          />
        </YStack>
      </Section>

      <Section label="异步提交（确认 loading + 防重复）">
        <YStack gap="$3">
          <Button variant="secondary" onPress={() => setAsyncOpen(true)}>
            打开异步对话框
          </Button>
          <Dialog
            open={asyncOpen}
            onOpenChange={(o) => !loading && setAsyncOpen(o)}
            title="提交数据"
            confirmLoading={loading}
            confirmText="提交"
            onConfirm={handleAsyncConfirm}
          >
            提交过程中按钮进入加载态，不可重复点击。
          </Dialog>
        </YStack>
      </Section>
    </DemoScreen>
  )
}
