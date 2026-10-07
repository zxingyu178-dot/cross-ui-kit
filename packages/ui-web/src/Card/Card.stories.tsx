import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../Button'
import { Card, CardContent, CardFooter, CardHeader } from './Card'

const meta = {
  title: 'Data Display/Card',
  component: Card,
  args: {
    children: (
      <>
        <CardHeader
          title="卡片标题"
          description="卡片的次要描述文字"
          action={<Button size="sm">操作</Button>}
        />
        <CardContent>
          <p className="text-body-sm text-text-secondary">卡片正文内容区。</p>
        </CardContent>
        <CardFooter>
          <Button size="sm">确认</Button>
        </CardFooter>
      </>
    ),
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Outlined: Story = {}

export const Elevated: Story = { args: { variant: 'elevated' } }

export const LongText: Story = {
  render: () => (
    <Card className="max-w-sm">
      <CardHeader title="这是一个超长的卡片标题，用于验证超长标题下的换行与截断表现" />
      <CardContent>
        <p className="text-body-sm text-text-secondary">
          {'这是一段超长的卡片正文内容，用于验证卡片在超长文本下的换行、省略与布局稳定性。'.repeat(
            3,
          )}
        </p>
      </CardContent>
    </Card>
  ),
}
