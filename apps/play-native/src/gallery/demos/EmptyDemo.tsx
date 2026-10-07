import { Button, Empty } from '@kit/ui-native'
import { YStack } from 'tamagui'
import { DemoScreen, Section } from '../DemoShell'

export default function EmptyDemo() {
  return (
    <DemoScreen title="Empty 空态">
      <Section label="默认">
        <Empty title="暂无数据" description="当前列表没有任何内容" />
      </Section>

      <Section label="带操作">
        <Empty
          title="还没有项目"
          description="点击下方按钮创建你的第一个项目"
          action={<Button size="sm">新建项目</Button>}
        />
      </Section>

      <Section label="自定义图标 / 长文本">
        <YStack>
          <Empty
            icon={
              <Button variant="ghost" disabled>
                🔌
              </Button>
            }
            title="网络已断开"
            description="请检查你的网络连接后重试，这是一段用于验证居中布局的较长描述文本"
            action={
              <Button size="sm" variant="secondary">
                重新加载
              </Button>
            }
          />
        </YStack>
      </Section>
    </DemoScreen>
  )
}
