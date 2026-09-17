/** Descriptions 示例：基础/带边框（mini）。 */
import { View } from '@tarojs/components'
import { Descriptions } from '../index'

const USER_ITEMS = [
  { label: '姓名', value: '张三' },
  { label: '手机号', value: '138****8888' },
  { label: '邮箱', value: 'zhangsan@example.com', span: 2 },
  { label: '地址', value: '江苏省徐州市', span: 2 },
]

export function States() {
  return (
    <View style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 12 }}>
      <Descriptions title="用户信息" items={USER_ITEMS} />
      <Descriptions title="订单信息" column={2} bordered items={USER_ITEMS} />
    </View>
  )
}
