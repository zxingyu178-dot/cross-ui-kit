import type { Meta, StoryObj } from '@storybook/react'
import { Slider } from '../Slider'

const meta: Meta<typeof Slider> = { title: 'Form/Slider', component: Slider, tags: ['autodocs'] }
export default meta
type Story = StoryObj<typeof Slider>

export const Default: Story = { args: { defaultValue: 30 } }
export const Disabled: Story = { args: { defaultValue: 60, disabled: true } }
export const Step: Story = { args: { defaultValue: 5, min: 0, max: 10, step: 0.5 } }
