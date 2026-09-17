import type { Meta, StoryObj } from '@storybook/react'
import { Descriptions } from '../Descriptions'

const items = [
  { label: '姓名', value: '张三' },
  { label: '手机号', value: '138****8888' },
  { label: '邮箱', value: 'zhangsan@example.com', span: 2 },
]

const meta: Meta<typeof Descriptions> = {
  title: 'DataDisplay/Descriptions',
  component: Descriptions,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Descriptions>

export const Default: Story = { args: { title: '用户信息', items } }
export const Bordered: Story = { args: { title: '用户信息', items, bordered: true, column: 2 } }
