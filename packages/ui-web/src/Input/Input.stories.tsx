/** Storybook 故事（web）：覆盖 normal/error/disabled/边界。 */
import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './index'

const meta = {
  title: 'Components/Input',
  component: Input,
  args: { placeholder: '请输入' },
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    type: {
      control: 'select',
      options: ['text', 'password', 'number', 'tel', 'email', 'search'],
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 320 }}>
      <Input size="sm" placeholder="小号" />
      <Input size="md" placeholder="中号" />
      <Input size="lg" placeholder="大号" />
    </div>
  ),
}
export const ErrorState: Story = { args: { error: '该字段为必填项', defaultValue: '' } }
export const Disabled: Story = { args: { disabled: true, defaultValue: '不可编辑' } }
export const Password: Story = { args: { type: 'password', placeholder: '密码' } }
