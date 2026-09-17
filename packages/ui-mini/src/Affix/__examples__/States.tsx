/** Affix 示例：顶部/底部固钉（mini）。 */
import { View } from '@tarojs/components'
import { Affix } from '../index'
import { Button } from '../../Button'

export function States() {
  return (
    <View style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: 12 }}>
      <Affix offsetTop={20}>
        <Button size="sm">固定在顶部 20px</Button>
      </Affix>
    </View>
  )
}
