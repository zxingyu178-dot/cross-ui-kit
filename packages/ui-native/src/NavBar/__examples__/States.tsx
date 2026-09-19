/** NavBar 示例：顶部导航栏（native）。 */
import { YStack } from 'tamagui'
import { NavBar } from '../index'

export function States() {
  return (
    <YStack gap={16}>
      <NavBar title="详情" onBack={() => {}} />
      <NavBar title="订单" showBack={false} />
    </YStack>
  )
}
