/** QRCode 示例：二维码（mini）。 */
import { View } from '@tarojs/components'
import { QRCode } from '../index'

export function States() {
  return (
    <View style={{ padding: 12 }}>
      <QRCode value="https://example.com" size={240} />
    </View>
  )
}
