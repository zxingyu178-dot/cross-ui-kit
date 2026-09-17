import type { Meta, StoryObj } from '@storybook/react'
import { Watermark } from '../Watermark'

const meta: Meta<typeof Watermark> = {
  title: 'Other/Watermark',
  component: Watermark,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Watermark>

export const Default: Story = {
  args: { text: 'Watermark', children: <div style={{ height: 120 }}>内容</div> },
}
