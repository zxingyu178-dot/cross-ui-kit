import type { Meta, StoryObj } from '@storybook/react'
import { TreeSelect } from '../TreeSelect'

const meta: Meta<typeof TreeSelect> = {
  title: 'Form/TreeSelect',
  component: TreeSelect,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof TreeSelect>

const data = [
  { key: '1', title: '父节点 1', children: [{ key: '1-1', title: '子节点 1-1' }] },
  { key: '2', title: '父节点 2' },
]

export const Default: Story = { args: { data, placeholder: '请选择' } }
