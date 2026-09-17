import type { Meta, StoryObj } from '@storybook/react'
import { Space } from '../Space'
import { Button } from '../../Button'

const meta: Meta<typeof Space> = { title: 'Layout/Space', component: Space, tags: ['autodocs'] }
export default meta
type Story = StoryObj<typeof Space>

export const Horizontal: Story = {
  args: { size: 'md', direction: 'horizontal' },
  render: (args) => (
    <Space {...args}>
      <Button>按钮 1</Button>
      <Button>按钮 2</Button>
    </Space>
  ),
}
export const Vertical: Story = {
  args: { size: 'md', direction: 'vertical' },
  render: (args) => (
    <Space {...args}>
      <Button>按钮 1</Button>
      <Button>按钮 2</Button>
    </Space>
  ),
}
