import type { Meta, StoryObj } from '@storybook/react'
import { Calendar } from '../Calendar'

const meta: Meta<typeof Calendar> = {
  title: 'DataDisplay/Calendar',
  component: Calendar,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Calendar>

export const Default: Story = { args: { defaultValue: new Date() } }
