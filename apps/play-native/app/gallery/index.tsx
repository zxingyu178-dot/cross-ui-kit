import { useRouter } from 'expo-router'
import { Button, Tag } from '@kit/ui-native'
import { ScrollView, Stack, Text, XStack, YStack } from 'tamagui'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { GALLERY } from '../../src/gallery/manifest'

export default function GalleryIndex() {
  const insets = useSafeAreaInsets()
  const router = useRouter()

  return (
    <ScrollView
      backgroundColor="$bgPage"
      contentContainerStyle={{
        paddingTop: insets.top + 12,
        paddingBottom: insets.bottom + 32,
        paddingHorizontal: 16,
      }}
    >
      <YStack gap="$3">
        <XStack alignItems="center" gap="$3">
          <Button size="sm" variant="ghost" onPress={() => router.back()}>
            ‹ 返回
          </Button>
          <Text fontSize="$titleMd" color="$textPrimary" fontWeight={700}>
            组件 Gallery
          </Text>
        </XStack>
        <Text fontSize="$caption" color="$textTertiary">
          共 {GALLERY.length} 个组件，每个均为独立演示入口
        </Text>

        {GALLERY.map((item, i) => (
          <Stack
            key={item.name}
            backgroundColor="$bgCard"
            borderWidth={1}
            borderColor="$borderDefault"
            borderRadius="$md"
            paddingVertical="$3"
            paddingHorizontal="$4"
            onPress={() => router.push(`/gallery/${item.name}`)}
            accessibilityRole="button"
            accessibilityLabel={`打开 ${item.title}`}
          >
            <XStack alignItems="center" justifyContent="space-between">
              <YStack gap="$1">
                <Text fontSize="$bodyMd" color="$textPrimary" fontWeight={500}>
                  {item.name}
                </Text>
                <Text fontSize="$caption" color="$textTertiary">
                  {item.title}
                </Text>
              </YStack>
              <XStack alignItems="center" gap="$2">
                <Tag size="sm" variant={item.status === 'stable' ? 'success' : 'warning'}>
                  {item.status}
                </Tag>
                <Text color="$textTertiary">{i + 1} ›</Text>
              </XStack>
            </XStack>
          </Stack>
        ))}
      </YStack>
    </ScrollView>
  )
}
