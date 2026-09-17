import type { Meta, StoryObj } from '@storybook/react'
import { TagGroup } from '../TagGroup'

const meta: Meta<typeof TagGroup> = {
  title: 'DataDisplay/TagGroup',
  component: TagGroup,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof TagGroup>

const items = [
  { key: '1', label: '标签一', color: 'primary' as const },
  { key: '2', label: '标签二', color: 'success' as const },
  { key: '3', label: '标签三', color: 'warning' as const },
]

export const Default: Story = { args: { items } }
export const WithMax: Story = { args: { items, max: 2 } }
