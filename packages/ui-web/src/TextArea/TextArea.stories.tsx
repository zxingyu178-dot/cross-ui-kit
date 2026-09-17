import type { Meta, StoryObj } from '@storybook/react'
import { TextArea } from '../TextArea'

const meta: Meta<typeof TextArea> = {
  title: 'Form/TextArea',
  component: TextArea,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof TextArea>

export const Default: Story = { args: { rows: 4, placeholder: '请输入内容' } }
export const WithCount: Story = {
  args: { rows: 3, maxLength: 200, showCount: true, placeholder: '最多输入 200 字' },
}
