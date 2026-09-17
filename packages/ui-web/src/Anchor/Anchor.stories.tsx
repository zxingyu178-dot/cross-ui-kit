import type { Meta, StoryObj } from '@storybook/react'
import { Anchor } from '../Anchor'

const meta: Meta<typeof Anchor> = {
  title: 'Navigation/Anchor',
  component: Anchor,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Anchor>

const items = [
  { key: '1', title: '第一部分', href: 'section-1' },
  { key: '2', title: '第二部分', href: 'section-2' },
]

export const Default: Story = { args: { items } }
