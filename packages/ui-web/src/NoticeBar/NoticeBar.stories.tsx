import type { Meta, StoryObj } from '@storybook/react'
import { NoticeBar } from '../NoticeBar'

const meta: Meta<typeof NoticeBar> = {
  title: 'Feedback/NoticeBar',
  component: NoticeBar,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof NoticeBar>

export const Default: Story = { args: { content: '系统将于今晚 24:00 维护', tone: 'warning' } }
