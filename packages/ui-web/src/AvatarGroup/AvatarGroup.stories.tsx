import type { Meta, StoryObj } from '@storybook/react'
import { AvatarGroup } from '../AvatarGroup'

const meta: Meta<typeof AvatarGroup> = {
  title: 'DataDisplay/AvatarGroup',
  component: AvatarGroup,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof AvatarGroup>

const items = [
  { key: '1', text: '张', color: '#2563eb' },
  { key: '2', text: '李', color: '#16a34a' },
  { key: '3', text: '王', color: '#d97706' },
  { key: '4', text: '赵', color: '#dc2626' },
  { key: '5', text: '钱', color: '#7c3aed' },
]

export const Default: Story = { args: { items, max: 5, size: 36 } }
export const WithOverflow: Story = { args: { items, max: 3, size: 40 } }
