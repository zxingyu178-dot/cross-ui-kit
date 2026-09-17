import type { Meta, StoryObj } from '@storybook/react'
import { Captcha } from '../Captcha'

const meta: Meta<typeof Captcha> = { title: 'Form/Captcha', component: Captcha, tags: ['autodocs'] }
export default meta
type Story = StoryObj<typeof Captcha>

export const Default: Story = { args: { countdown: 60 } }
export const Disabled: Story = { args: { value: '123456', disabled: true } }
