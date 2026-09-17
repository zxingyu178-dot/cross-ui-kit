import type { Meta, StoryObj } from '@storybook/react'
import { Layout } from '../Layout'

const meta: Meta<typeof Layout> = { title: 'Layout/Layout', component: Layout, tags: ['autodocs'] }
export default meta
type Story = StoryObj<typeof Layout>

const { Header, Sider, Content, Footer } = Layout

export const Full: Story = {
  render: () => (
    <div style={{ height: 400 }}>
      <Layout>
        <Header>顶部</Header>
        <Layout direction="horizontal">
          <Sider width={160}>侧边栏</Sider>
          <Content>内容</Content>
        </Layout>
        <Footer>底部</Footer>
      </Layout>
    </div>
  ),
}
