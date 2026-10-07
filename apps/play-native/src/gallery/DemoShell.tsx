/** Gallery 演示页共用外壳：安全区滚动容器 + 分区标题。 */
import type { ReactNode } from 'react'
import { ScrollView, Text, YStack } from 'tamagui'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export function Section({ label, children }: { label: string; children: ReactNode }) {
  return (
    <YStack gap="$3" marginBottom="$6">
      <Text fontSize="$caption" color="$textTertiary" fontWeight={600}>
        {label}
      </Text>
      {children}
    </YStack>
  )
}

export function DemoScreen({ title, children }: { title: string; children: ReactNode }) {
  const insets = useSafeAreaInsets()
  return (
    <ScrollView
      backgroundColor="$bgPage"
      contentContainerStyle={{
        paddingTop: insets.top + 12,
        paddingBottom: insets.bottom + 32,
        paddingHorizontal: 16,
      }}
    >
      <Text fontSize="$titleMd" color="$textPrimary" fontWeight={700} marginBottom="$6">
        {title}
      </Text>
      {children}
    </ScrollView>
  )
}
