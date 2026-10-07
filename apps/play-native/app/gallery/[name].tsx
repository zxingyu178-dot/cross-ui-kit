import { useLocalSearchParams } from 'expo-router'
import { Text, YStack } from 'tamagui'
import { byName } from '../../src/gallery/manifest'

export default function ComponentRoute() {
  const params = useLocalSearchParams<{ name: string }>()
  const name = typeof params.name === 'string' ? params.name : ''
  const item = byName[name]

  if (item === undefined) {
    return (
      <YStack flex={1} alignItems="center" justifyContent="center" backgroundColor="$bgPage">
        <Text color="$textTertiary">未找到组件：{name}</Text>
      </YStack>
    )
  }

  return <item.Demo />
}
