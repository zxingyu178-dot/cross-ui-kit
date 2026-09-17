import type { Meta, StoryObj } from '@storybook/react'
import { Popconfirm } from '../Popconfirm'

const meta: Meta<typeof Popconfirm> = {
  title: 'Overlay/Popconfirm',
  component: Popconfirm,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Popconfirm>

export const Default: Story = {
  args: { title: '确认删除？', description: '删除后不可恢复', trigger: <button>删除</button> },
}
