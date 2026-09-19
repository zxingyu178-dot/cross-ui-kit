import type { Meta, StoryObj } from '@storybook/react'
import { ActionSheet } from '../ActionSheet'

const meta: Meta<typeof ActionSheet> = {
  title: 'Overlay/ActionSheet',
  component: ActionSheet,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof ActionSheet>

export const Default: Story = {
  args: {
    open: true,
    title: '选择操作',
    actions: [
      { key: 'edit', label: '编辑' },
      { key: 'share', label: '分享' },
      { key: 'del', label: '删除', danger: true },
    ],
  },
}
