import type { Meta, StoryObj } from 'storybook/react'
import { Tabs } from './index'

const meta = {
  title: 'Components/Navigation/Tabs',
  component: Tabs,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md'] },
  },
  args: {
    items: [
      { value: 'a', label: '标签 A', content: '面板 A 内容' },
      { value: 'b', label: '标签 B', content: '面板 B 内容' },
      { value: 'c', label: '标签 C', disabled: true, content: '面板 C 内容' },
    ],
  },
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Line: Story = { args: { defaultValue: 'a' } }
export const Small: Story = { args: { defaultValue: 'a', size: 'sm' } }
