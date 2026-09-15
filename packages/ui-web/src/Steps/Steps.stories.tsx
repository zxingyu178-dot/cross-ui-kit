import type { Meta, StoryObj } from '@storybook/react'
import { Steps } from './Steps'

const items = [
  { title: '填写信息', description: '基础资料' },
  { title: '资质上传' },
  { title: '平台审核' },
  { title: '完成开通' },
]

const meta = {
  title: 'Navigation/Steps',
  component: Steps,
  args: { items, current: 1 },
} satisfies Meta<typeof Steps>

export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {}

export const Vertical: Story = { args: { current: 2, direction: 'vertical' } }

export const ErrorStep: Story = {
  args: {
    items: [
      { title: '填写信息' },
      { title: '资质上传', status: 'error', description: '图片不清晰' },
      { title: '审核' },
    ],
    current: 1,
  },
}
