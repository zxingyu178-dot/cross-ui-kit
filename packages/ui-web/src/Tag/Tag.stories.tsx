import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Tag } from './Tag'

const meta = {
  title: 'Data Display/Tag',
  component: Tag,
  args: { children: '标签' },
} satisfies Meta<typeof Tag>

export default meta
type Story = StoryObj<typeof meta>

export const Variants: Story = {
  render: () => (
    <div className="flex gap-2">
      <Tag>neutral</Tag>
      <Tag variant="primary">primary</Tag>
      <Tag variant="success">success</Tag>
      <Tag variant="warning">warning</Tag>
      <Tag variant="danger">danger</Tag>
      <Tag variant="info">info</Tag>
    </div>
  ),
}

export const Selectable: Story = {
  render: () => {
    const [on, setOn] = useState(true)
    return (
      <div className="flex gap-2">
        <Tag variant="primary" selected={on} onClick={() => setOn(!on)}>
          可选中
        </Tag>
        <Tag variant="primary" selected={false} onClick={() => setOn(false)}>
          未选中
        </Tag>
      </div>
    )
  },
}

export const Closable: Story = {
  args: { closable: true, tone: 'outline', children: '可关闭' },
}

export const LongText: Story = {
  render: () => (
    <div className="flex max-w-xs flex-wrap gap-2">
      <Tag>这是一个超长的标签文本，用于验证标签在超长文本下的换行、截断与布局稳定性</Tag>
    </div>
  ),
}
