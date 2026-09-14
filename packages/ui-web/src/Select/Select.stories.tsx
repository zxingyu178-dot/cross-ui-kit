import type { Meta, StoryObj } from 'storybook/react'
import { Select } from './Select'

const options = [
  { label: '选项一', value: 'a' },
  { label: '选项二', value: 'b' },
  { label: '选项三（禁用）', value: 'c', disabled: true },
]

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  args: { options, placeholder: '请选择' },
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}
export const WithDefault: Story = { args: { defaultValue: 'a' } }
export const Disabled: Story = { args: { disabled: true } }
export const ErrorState: Story = { args: { error: '请选择一项' } }
export const Sizes: Story = {
  render: () => (
    <div className="flex w-72 flex-col gap-4">
      <Select size="sm" options={options} placeholder="小号" />
      <Select size="md" options={options} placeholder="中号" />
      <Select size="lg" options={options} placeholder="大号" />
    </div>
  ),
}
