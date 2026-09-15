import type { Meta, StoryObj } from 'storybook/react'
import { Badge } from './index'

const meta = {
  title: 'Components/Data Display/Badge',
  component: Badge,
  args: { children: '标签' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'danger', 'info', 'neutral'],
    },
    tone: { control: 'radio', options: ['soft', 'solid', 'outline'] },
    size: { control: 'radio', options: ['sm', 'md'] },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Soft: Story = { args: { variant: 'primary', tone: 'soft' } }
export const Solid: Story = { args: { variant: 'success', tone: 'solid' } }
export const Outline: Story = { args: { variant: 'info', tone: 'outline' } }
export const Small: Story = { args: { variant: 'warning', size: 'sm' } }
