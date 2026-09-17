import type { Meta, StoryObj } from '@storybook/react'
import { Cascader } from '../Cascader'

const options = [
  {
    value: 'js',
    label: '江苏',
    children: [{ value: 'xz', label: '徐州', children: [{ value: 'ql', label: '泉山区' }] }],
  },
]

const meta: Meta<typeof Cascader> = {
  title: 'Form/Cascader',
  component: Cascader,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Cascader>

export const Default: Story = { args: { options, placeholder: '请选择' } }
