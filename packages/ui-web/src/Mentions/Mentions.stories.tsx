import type { Meta, StoryObj } from '@storybook/react'
import { Mentions } from '../Mentions'

const meta: Meta<typeof Mentions> = {
  title: 'Form/Mentions',
  component: Mentions,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Mentions>

const options = [
  { key: '1', label: '张三', description: '前端工程师' },
  { key: '2', label: '李四', description: '后端工程师' },
]

export const Default: Story = { args: { options, placeholder: '输入 @ 提及用户' } }
