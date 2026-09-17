import type { Meta, StoryObj } from '@storybook/react'
import { Tour } from '../Tour'

const meta: Meta<typeof Tour> = { title: 'Overlay/Tour', component: Tour, tags: ['autodocs'] }
export default meta
type Story = StoryObj<typeof Tour>

const steps = [
  { title: '第一步', description: '这是第一步的说明' },
  { title: '第二步', description: '这是第二步的说明' },
]

export const Default: Story = { args: { steps, current: 0 } }
