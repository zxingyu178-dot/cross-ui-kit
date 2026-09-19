import type { Meta, StoryObj } from '@storybook/react'
import { QRCode } from '../QRCode'

const meta: Meta<typeof QRCode> = {
  title: 'DataDisplay/QRCode',
  component: QRCode,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof QRCode>

export const Default: Story = { args: { value: 'https://example.com', size: 128 } }
export const CustomColor: Story = { args: { value: 'cross-ui-kit', size: 160, color: '#2563eb' } }
