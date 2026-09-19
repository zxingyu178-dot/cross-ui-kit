import type { Meta, StoryObj } from '@storybook/react'
import { StatusDot } from '../StatusDot'

const meta: Meta<typeof StatusDot> = {
  title: 'DataDisplay/StatusDot',
  component: StatusDot,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof StatusDot>

export const Default: Story = { args: { tone: 'success', text: '运行中' } }
export const Outlined: Story = { args: { tone: 'danger', outlined: true, text: '异常' } }
