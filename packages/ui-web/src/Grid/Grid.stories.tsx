import type { Meta, StoryObj } from '@storybook/react'
import { Row, Col } from '../Grid'

const meta: Meta<typeof Row> = { title: 'Layout/Grid', component: Row, tags: ['autodocs'] }
export default meta
type Story = StoryObj<typeof Row>

export const Default: Story = {
  render: () => (
    <Row gutter={16}>
      <Col span={12}>
        <div style={{ background: '#e0e7ff', padding: 16 }}>col-12</div>
      </Col>
      <Col span={12}>
        <div style={{ background: '#e0e7ff', padding: 16 }}>col-12</div>
      </Col>
    </Row>
  ),
}
