import { useRouter } from 'expo-router'
import Constants from 'expo-constants'
import { Platform } from 'react-native'
import { Button, Card, CardContent } from '@kit/ui-native'
import { ScrollView, Text, YStack } from 'tamagui'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useThemeMode } from '../src/theme/useThemeMode'
import { GALLERY } from '../src/gallery/manifest'
import nativeRegistry from '../../../registry/native/registry.json'

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <YStack flexDirection="row" justifyContent="space-between" paddingVertical="$2">
      <Text color="$textTertiary" fontSize="$bodySm">
        {label}
      </Text>
      <Text color="$textPrimary" fontSize="$bodySm" fontWeight={500}>
        {value}
      </Text>
    </YStack>
  )
}

export default function HomeScreen() {
  const insets = useSafeAreaInsets()
  const router = useRouter()
  const { mode, resolved, cycle } = useThemeMode()

  const items = nativeRegistry.items
  const total = items.length
  const stable = items.filter((i) => i.status === 'stable').length
  const beta = total - stable

  const modeLabel = { light: '亮色', dark: '暗色', system: '跟随系统' }[mode]

  return (
    <ScrollView
      backgroundColor="$bgPage"
      contentContainerStyle={{
        paddingTop: insets.top + 20,
        paddingBottom: insets.bottom + 32,
        paddingHorizontal: 16,
      }}
    >
      <YStack gap="$4">
        <YStack gap="$1">
          <Text fontSize="$titleLg" color="$textPrimary" fontWeight={700}>
            Cross UI Kit
          </Text>
          <Text fontSize="$bodyMd" color="$textTertiary">
            Native 验收壳 · Expo + Tamagui
          </Text>
        </YStack>

        <Card variant="outlined">
          <CardContent>
            <Text fontSize="$caption" color="$textTertiary" fontWeight={600} marginBottom="$2">
              原生环境
            </Text>
            <InfoRow label="平台" value={`${Platform.OS} ${String(Platform.Version)}`} />
            <InfoRow label="Expo" value={Constants.expoVersion ?? '-'} />
            <InfoRow label="App 版本" value={Constants.expoConfig?.version ?? '0.0.1'} />
            <InfoRow label="运行方式" value={Constants.appOwnership ?? 'standalone'} />
          </CardContent>
        </Card>

        <Card variant="outlined">
          <CardContent>
            <Text fontSize="$caption" color="$textTertiary" fontWeight={600} marginBottom="$2">
              主题
            </Text>
            <InfoRow label="模式" value={modeLabel} />
            <InfoRow label="当前生效" value={resolved === 'dark' ? '暗色' : '亮色'} />
            <YStack marginTop="$2">
              <Button size="sm" variant="secondary" onPress={cycle}>
                切换主题
              </Button>
            </YStack>
          </CardContent>
        </Card>

        <Card variant="outlined">
          <CardContent>
            <Text fontSize="$caption" color="$textTertiary" fontWeight={600} marginBottom="$2">
              组件统计（native）
            </Text>
            <InfoRow label="组件总数" value={String(total)} />
            <InfoRow label="Stable" value={String(stable)} />
            <InfoRow label="Beta" value={String(beta)} />
            <InfoRow label="本壳覆盖首批" value={String(GALLERY.length)} />
          </CardContent>
        </Card>

        <Button block size="lg" onPress={() => router.push('/gallery')}>
          进入组件 Gallery
        </Button>

        <Text fontSize="$caption" color="$textTertiary" textAlign="center">
          native 尚未通过独立 Graduation Gate，组件保持 beta；毕业须走 graduate --stack native
        </Text>
      </YStack>
    </ScrollView>
  )
}
