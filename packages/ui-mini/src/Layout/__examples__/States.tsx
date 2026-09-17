/** Layout 示例：布局（mini）。 */
import { Text, View } from '@tarojs/components'
import { Layout } from '../index'

const { Header, Sider, Content, Footer } = Layout

export function States() {
  return (
    <View style={{ padding: 12 }}>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>完整布局</Text>
        <View
          style={{
            height: 320,
            overflow: 'hidden',
            borderRadius: 8,
            border: '1px solid var(--kit-color-border-default)',
          }}
        >
          <Layout>
            <Header>
              <Text
                style={{ fontSize: 14, fontWeight: '500', color: 'var(--kit-color-text-primary)' }}
              >
                Cross UI Kit
              </Text>
            </Header>
            <Layout direction="horizontal">
              <Sider width={120}>
                <View style={{ padding: 12 }}>
                  <Text style={{ fontSize: 12, color: 'var(--kit-color-primary-default)' }}>
                    首页
                  </Text>
                </View>
              </Sider>
              <Content>
                <View
                  style={{
                    padding: 12,
                    borderRadius: 8,
                    border: '1px solid var(--kit-color-border-default)',
                    backgroundColor: 'var(--kit-color-bg-card)',
                  }}
                >
                  <Text style={{ fontSize: 13, color: 'var(--kit-color-text-secondary)' }}>
                    这是主内容区域。
                  </Text>
                </View>
              </Content>
            </Layout>
            <Footer>
              <Text>© 2026 Cross UI Kit</Text>
            </Footer>
          </Layout>
        </View>
      </View>
    </View>
  )
}
