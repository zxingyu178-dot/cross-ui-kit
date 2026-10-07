import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './Avatar'

const meta = {
  title: 'Data Display/Avatar',
  component: Avatar,
  args: { name: '张伟' },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Text: Story = {
  render: () => (
    <div className="flex gap-3">
      <Avatar name="张伟" />
      <Avatar name="李娜" />
      <Avatar name="Wang" />
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Avatar name="赵" size="sm" />
      <Avatar name="钱" size="md" />
      <Avatar name="孙" size="lg" />
    </div>
  ),
}

export const Square: Story = { args: { shape: 'square', name: '周' } }

export const LongText: Story = {
  args: { name: '这是一个超长的用户名称，用于验证头像文字的缩放与截断表现' },
}
