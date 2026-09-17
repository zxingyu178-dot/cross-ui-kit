import { Layout } from '../index'

const { Header, Sider, Content, Footer } = Layout

export function States() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">
          完整布局（Header + Sider + Content + Footer）
        </span>
        <div className="h-80 overflow-hidden rounded-lg border border-border-default">
          <Layout>
            <Header>
              <span className="text-bodyMd font-medium text-text-primary">Cross UI Kit</span>
            </Header>
            <Layout direction="horizontal">
              <Sider width={160}>
                <div className="p-3">
                  <div className="mb-2 text-caption text-text-tertiary">导航菜单</div>
                  <div className="flex flex-col gap-1">
                    <div className="rounded bg-primary-bg px-3 py-1.5 text-bodySm text-primary-default">
                      首页
                    </div>
                    <div className="rounded px-3 py-1.5 text-bodySm text-text-primary hover:bg-bg-muted">
                      产品
                    </div>
                    <div className="rounded px-3 py-1.5 text-bodySm text-text-primary hover:bg-bg-muted">
                      关于
                    </div>
                  </div>
                </div>
              </Sider>
              <Content>
                <div className="rounded-lg border border-border-default bg-bg-card p-4">
                  <h3 className="mb-2 text-bodyMd font-medium text-text-primary">欢迎使用</h3>
                  <p className="text-bodySm text-text-secondary">
                    这是主内容区域，可以放置页面的主要内容。
                  </p>
                </div>
              </Content>
            </Layout>
            <Footer>© 2026 Cross UI Kit. All rights reserved.</Footer>
          </Layout>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">
          简单布局（Header + Content + Footer）
        </span>
        <div className="h-48 overflow-hidden rounded-lg border border-border-default">
          <Layout>
            <Header>
              <span className="text-bodyMd font-medium text-text-primary">页面标题</span>
            </Header>
            <Content>
              <div className="rounded-lg border border-border-default bg-bg-card p-4">
                <p className="text-bodySm text-text-secondary">简单布局，只有顶部和底部。</p>
              </div>
            </Content>
            <Footer>底部信息</Footer>
          </Layout>
        </div>
      </div>
    </div>
  )
}
