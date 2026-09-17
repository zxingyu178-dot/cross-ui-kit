import type { Meta, StoryObj } from '@storybook/react'
import { Countdown } from '../Countdown'

const meta: Meta<typeof Countdown> = {
  title: 'DataDisplay/Countdown',
  component: Countdown,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Countdown>

export const Default: Story = { args: { value: 60000, format: 'mm:ss' } }
