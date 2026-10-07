import type { Meta, StoryObj } from '@storybook/react'
import { SwipeAction } from '../SwipeAction'
import { Cell } from '../Cell'

const meta: Meta<typeof SwipeAction> = {
  title: 'Interaction/SwipeAction',
  component: SwipeAction,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof SwipeAction>

export const Default: Story = {
  render: () => (
    <SwipeAction
      actions={[
        { key: 'edit', label: '编辑' },
        { key: 'del', label: '删除', danger: true },
      ]}
    >
      <Cell title="订单 #12345" />
    </SwipeAction>
  ),
}
