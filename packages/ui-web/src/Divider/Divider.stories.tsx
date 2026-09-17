import type { Meta, StoryObj } from '@storybook/react'
import { Divider } from '../Divider'

const meta: Meta<typeof Divider> = {
  title: 'Layout/Divider',
  component: Divider,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Divider>

export const Solid: Story = { args: { type: 'solid' } }
export const Dashed: Story = { args: { type: 'dashed' } }
export const Dotted: Story = { args: { type: 'dotted' } }
export const WithText: Story = { args: { text: '或者', textPosition: 'center' } }
export const Vertical: Story = {
  render: () => (
    <div className="flex h-10 items-center gap-4">
      <span>左</span>
      <Divider orientation="vertical" />
      <span>右</span>
    </div>
  ),
}
