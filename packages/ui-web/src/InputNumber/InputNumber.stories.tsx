import type { Meta, StoryObj } from '@storybook/react'
import { InputNumber } from '../InputNumber'

const meta: Meta<typeof InputNumber> = {
  title: 'Form/InputNumber',
  component: InputNumber,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof InputNumber>

export const Default: Story = { args: { defaultValue: 1, min: 0, max: 10 } }
export const Decimal: Story = { args: { defaultValue: 3.14, precision: 2, step: 0.1 } }
export const Disabled: Story = { args: { defaultValue: 5, disabled: true } }
export const NoControls: Story = { args: { controls: false, placeholder: '请输入数量' } }
