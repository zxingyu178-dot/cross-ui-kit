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
