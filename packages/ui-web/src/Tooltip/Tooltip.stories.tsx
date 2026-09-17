import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../Button'
import { Tooltip } from '../Tooltip'

const meta: Meta<typeof Tooltip> = {
  title: 'Overlay/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  args: {
    content: '提示内容',
    children: <Button size="sm">悬停我</Button>,
  },
}

export const Placements: Story = {
  render: () => (
    <div className="flex items-center gap-8 p-16">
      <Tooltip content="Top" placement="top">
        <Button>Top</Button>
      </Tooltip>
      <Tooltip content="Bottom" placement="bottom">
        <Button>Bottom</Button>
      </Tooltip>
      <Tooltip content="Left" placement="left">
        <Button>Left</Button>
      </Tooltip>
      <Tooltip content="Right" placement="right">
        <Button>Right</Button>
      </Tooltip>
    </div>
  ),
}

export const LongContent: Story = {
  args: {
    content: '这是一段较长的提示文本，用于测试气泡在长内容下的自动换行与最大宽度表现',
    children: <Button size="sm">长文本提示</Button>,
  },
}
