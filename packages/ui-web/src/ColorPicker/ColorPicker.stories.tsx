import type { Meta, StoryObj } from '@storybook/react'
import { ColorPicker } from '../ColorPicker'

const meta: Meta<typeof ColorPicker> = {
  title: 'Form/ColorPicker',
  component: ColorPicker,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof ColorPicker>

export const Default: Story = { args: { defaultValue: '#2563eb' } }
export const Disabled: Story = { args: { defaultValue: '#2563eb', disabled: true } }
