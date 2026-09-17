import type { Meta, StoryObj } from '@storybook/react'
import { Rate } from '../Rate'

const meta: Meta<typeof Rate> = { title: 'Form/Rate', component: Rate, tags: ['autodocs'] }
export default meta
type Story = StoryObj<typeof Rate>

export const Default: Story = { args: { defaultValue: 3 } }
export const AllowHalf: Story = { args: { defaultValue: 3.5, allowHalf: true } }
export const Disabled: Story = { args: { defaultValue: 4, disabled: true } }
export const Custom: Story = { args: { defaultValue: 4, count: 10, character: '♥' } }
