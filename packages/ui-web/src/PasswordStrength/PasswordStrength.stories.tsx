import type { Meta, StoryObj } from '@storybook/react'
import { PasswordStrength } from '../PasswordStrength'

const meta: Meta<typeof PasswordStrength> = {
  title: 'Form/PasswordStrength',
  component: PasswordStrength,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof PasswordStrength>

export const Empty: Story = { args: { value: '', minLength: 8 } }
export const Weak: Story = { args: { value: '123', minLength: 8 } }
export const Medium: Story = { args: { value: 'abc123', minLength: 8 } }
export const Strong: Story = { args: { value: 'Abc123!@#', minLength: 8 } }
