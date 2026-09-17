import type { Meta, StoryObj } from '@storybook/react'
import { Segmented } from '../Segmented'

const meta: Meta<typeof Segmented> = {
  title: 'Form/Segmented',
  component: Segmented,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Segmented>

export const Default: Story = {
  args: {
    defaultValue: 'day',
    options: [
      { label: '日', value: 'day' },
      { label: '周', value: 'week' },
      { label: '月', value: 'month' },
    ],
  },
}
export const Disabled: Story = {
  args: {
    defaultValue: 'list',
    options: [
      { label: '列表', value: 'list' },
      { label: '网格', value: 'grid' },
      { label: '看板', value: 'board', disabled: true },
    ],
  },
}
