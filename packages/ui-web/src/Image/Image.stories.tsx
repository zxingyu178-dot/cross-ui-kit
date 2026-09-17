import type { Meta, StoryObj } from '@storybook/react'
import { Image } from '../Image'

const meta: Meta<typeof Image> = {
  title: 'DataDisplay/Image',
  component: Image,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Image>

export const Default: Story = {
  args: { src: 'https://picsum.photos/200/150', alt: '示例', width: 200, height: 150, radius: 8 },
}
export const Circle: Story = {
  args: { src: 'https://picsum.photos/120', alt: '头像', width: 120, height: 120, radius: 60 },
}
