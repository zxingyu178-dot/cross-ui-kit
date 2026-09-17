import type { Meta, StoryObj } from '@storybook/react'
import { OtpInput } from '../OtpInput'

const meta: Meta<typeof OtpInput> = {
  title: 'Form/OtpInput',
  component: OtpInput,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof OtpInput>

export const Default: Story = { args: { length: 6 } }
export const Password: Story = { args: { length: 4, password: true } }
