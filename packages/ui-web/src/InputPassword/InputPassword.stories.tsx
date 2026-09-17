import type { Meta, StoryObj } from '@storybook/react'
import { InputPassword } from '../InputPassword'

const meta: Meta<typeof InputPassword> = {
  title: 'Form/InputPassword',
  component: InputPassword,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof InputPassword>

export const Default: Story = { args: { placeholder: '请输入密码' } }
export const Disabled: Story = { args: { value: '123456', disabled: true } }
