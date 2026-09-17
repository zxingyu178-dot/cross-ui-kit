/** Layout 示例：布局（native）。 */
import { Text, YStack } from 'tamagui'
import { Layout } from '../index'

const { Header, Sider, Content, Footer } = Layout

export function States() {
  return (
    <YStack padding={12} gap={24}>
      <YStack gap={8}>
        <Text fontSize={12} color="$textTertiary">
          完整布局
        </Text>
        <YStack
          height={320}
          overflow="hidden"
          borderRadius="$md"
          borderWidth={1}
          borderColor="$borderDefault"
        >
          <Layout>
            <Header>
              <Text fontSize={14} fontWeight="500" color="$textPrimary">
                Cross UI Kit
              </Text>
            </Header>
            <Layout direction="horizontal">
              <Sider width={120}>
                <YStack padding={12}>
                  <Text fontSize={12} color="$primaryDefault">
                    首页
                  </Text>
                </YStack>
              </Sider>
              <Content>
                <YStack
                  padding={12}
                  borderRadius="$md"
                  borderWidth={1}
                  borderColor="$borderDefault"
                  backgroundColor="$bgCard"
                >
                  <Text fontSize={13} color="$textSecondary">
                    这是主内容区域。
                  </Text>
                </YStack>
              </Content>
            </Layout>
            <Footer>
              <Text fontSize={12} color="$textTertiary">
                © 2026 Cross UI Kit
              </Text>
            </Footer>
          </Layout>
        </YStack>
      </YStack>
    </YStack>
  )
}
