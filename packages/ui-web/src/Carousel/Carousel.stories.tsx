import type { Meta, StoryObj } from '@storybook/react'
import { Carousel } from '../Carousel'

const meta: Meta<typeof Carousel> = {
  title: 'DataDisplay/Carousel',
  component: Carousel,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Carousel>

const items = [
  { key: '1', content: <div style={{ background: '#2563eb', height: '100%' }} /> },
  { key: '2', content: <div style={{ background: '#10b981', height: '100%' }} /> },
]

export const Default: Story = { args: { items, height: 200 } }
export const Autoplay: Story = { args: { items, height: 200, autoplay: true, interval: 2000 } }
