import type { Meta, StoryObj } from '@storybook/react'
import { Marquee } from '../Marquee'

const meta: Meta<typeof Marquee> = {
  title: 'Feedback/Marquee',
  component: Marquee,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Marquee>

export const Default: Story = { args: { children: '这是一条跑马灯内容' } }
