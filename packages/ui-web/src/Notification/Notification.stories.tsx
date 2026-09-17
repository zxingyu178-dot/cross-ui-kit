import type { Meta, StoryObj } from '@storybook/react'
import { Notification } from '../Notification'

const meta: Meta<typeof Notification> = {
  title: 'Feedback/Notification',
  component: Notification,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Notification>

export const Default: Story = {
  args: { type: 'info', title: '通知标题', description: '通知描述内容', duration: 0 },
}
