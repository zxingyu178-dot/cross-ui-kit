/** Space 示例：水平/垂直/自定义间距（mini）。 */
import { View } from '@tarojs/components'
import { Space } from '../index'
import { Button } from '../../Button'

export function States() {
  return (
    <View style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 12 }}>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Space size="md" direction="horizontal">
          <Button size="sm">按钮 1</Button>
          <Button size="sm">按钮 2</Button>
        </Space>
      </View>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Space direction="vertical" size="sm">
          <Button size="sm">按钮 1</Button>
          <Button size="sm">按钮 2</Button>
          <Button size="sm">按钮 3</Button>
        </Space>
      </View>
    </View>
  )
}
