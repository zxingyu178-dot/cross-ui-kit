import type { Meta, StoryObj } from '@storybook/react'
import { Transfer } from '../Transfer'

const meta: Meta<typeof Transfer> = {
  title: 'Form/Transfer',
  component: Transfer,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Transfer>

const data = [
  { key: '1', title: '选项 1', description: '描述 1' },
  { key: '2', title: '选项 2', description: '描述 2' },
  { key: '3', title: '选项 3', description: '描述 3' },
]

export const Default: Story = { args: { dataSource: data, targetKeys: [] } }
