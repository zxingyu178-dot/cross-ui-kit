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
export const LongText: Story = {
  args: {
    defaultValue: 'a',
    items: [
      {
        value: 'a',
        label: '这是一个超长的标签标题，用于验证换行与截断表现',
        content:
          '这是一段超长的面板内容文本，用于验证标签面板在超长文本下的换行与布局稳定性。'.repeat(3),
      },
      { value: 'b', label: '标签 B', content: '面板 B' },
    ],
  },
}
