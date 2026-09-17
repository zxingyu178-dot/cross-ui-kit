import type { Meta, StoryObj } from '@storybook/react'
import { CardGroup } from '../CardGroup'

const meta: Meta<typeof CardGroup> = {
  title: 'DataDisplay/CardGroup',
  component: CardGroup,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof CardGroup>

const items = [
  { key: '1', title: '卡片一', content: '内容一' },
  { key: '2', title: '卡片二', content: '内容二' },
  { key: '3', title: '卡片三', content: '内容三' },
]

export const Default: Story = { args: { items, columns: 3 } }
export const TwoColumns: Story = { args: { items, columns: 2 } }
