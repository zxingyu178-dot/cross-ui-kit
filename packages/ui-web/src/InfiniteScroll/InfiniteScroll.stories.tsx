import type { Meta, StoryObj } from '@storybook/react'
import { InfiniteScroll } from '../InfiniteScroll'

const meta: Meta<typeof InfiniteScroll> = {
  title: 'Interaction/InfiniteScroll',
  component: InfiniteScroll,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof InfiniteScroll>

export const Default: Story = {
  args: { children: <div style={{ padding: 16 }}>滚动查看效果</div> },
}
