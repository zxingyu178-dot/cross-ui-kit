/** Cell 示例：列表项（mini）。 */
import { View } from '@tarojs/components'
import { Cell } from '../index'

export function States() {
  return (
    <View style={{ display: 'flex', flexDirection: 'column' }}>
      <Cell title="账号安全" description="已绑定手机" onClick={() => {}} />
      <Cell title="消息通知" clickable />
      <Cell title="清除缓存" description="12.3 MB" />
    </View>
  )
}
