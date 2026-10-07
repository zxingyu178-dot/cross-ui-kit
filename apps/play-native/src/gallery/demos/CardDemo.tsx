import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@kit/ui-native'
import { Text, YStack } from 'tamagui'
import { DemoScreen, Section } from '../DemoShell'

export default function CardDemo() {
  return (
    <DemoScreen title="Card 卡片">
      <Section label="描边 + 完整结构">
        <Card variant="outlined">
          <CardHeader
            title={<CardTitle>项目概览</CardTitle>}
            description={<CardDescription>展示组合式卡片结构</CardDescription>}
            action={
              <Button size="sm" variant="ghost">
                更多
              </Button>
            }
          />
          <CardContent>
            <Text color="$textSecondary">卡片正文内容，可放置任意组件。</Text>
          </CardContent>
          <CardFooter>
            <Button size="sm">确认</Button>
          </CardFooter>
        </Card>
      </Section>

      <Section label="悬浮">
        <YStack gap="$3">
          <Card variant="elevated">
            <CardContent>
              <Text color="$textSecondary">elevated 带阴影的卡片。</Text>
            </CardContent>
          </Card>
        </YStack>
      </Section>
    </DemoScreen>
  )
}
