import type { Meta, StoryObj } from '@storybook/react'
import { PullToRefresh } from '../PullToRefresh'

const meta: Meta<typeof PullToRefresh> = {
  title: 'Interaction/PullToRefresh',
  component: PullToRefresh,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof PullToRefresh>

export const Default: Story = {
  args: { children: <div style={{ padding: 16 }}>下拉查看效果</div> },
}
