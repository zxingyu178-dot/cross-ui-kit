/** QRCode 示例：二维码（native）。 */
import { YStack } from 'tamagui'
import { QRCode } from '../index'

export function States() {
  return (
    <YStack padding={12} gap={16}>
      <QRCode value="https://example.com" size={128} />
      <QRCode value="cross-ui-kit" size={140} color="#2563eb" level="H" />
    </YStack>
  )
}
