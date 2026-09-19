import type { Meta, StoryObj } from '@storybook/react'
import { SafeArea } from '../SafeArea'

const meta: Meta<typeof SafeArea> = {
  title: 'Layout/SafeArea',
  component: SafeArea,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof SafeArea>

export const Default: Story = {
  args: { position: 'bottom', children: <div style={{ padding: 16 }}>内容</div> },
}
