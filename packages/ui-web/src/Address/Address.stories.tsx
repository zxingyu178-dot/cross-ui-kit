import type { Meta, StoryObj } from '@storybook/react'
import { Address } from '../Address'

const meta: Meta<typeof Address> = { title: 'Form/Address', component: Address, tags: ['autodocs'] }
export default meta
type Story = StoryObj<typeof Address>

export const Default: Story = {}
export const WithValue: Story = {
  args: { value: { province: 'guangdong', city: 'shenzhen', district: 'nanshan' } },
}
export const Disabled: Story = { args: { disabled: true } }
