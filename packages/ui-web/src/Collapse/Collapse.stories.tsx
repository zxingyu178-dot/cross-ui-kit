import type { Meta, StoryObj } from '@storybook/react'
import { Collapse } from '../Collapse'

const items = [
  { key: '1', title: '面板一', content: '内容一' },
  { key: '2', title: '面板二', content: '内容二' },
]

const meta: Meta<typeof Collapse> = {
  title: 'Layout/Collapse',
  component: Collapse,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Collapse>

export const Default: Story = { args: { items, defaultActiveKey: ['1'] } }
export const Accordion: Story = { args: { items, accordion: true, defaultActiveKey: '1' } }
