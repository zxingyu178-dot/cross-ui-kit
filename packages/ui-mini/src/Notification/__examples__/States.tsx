/** Notification 示例：四种类型（mini）。 */
import { View } from '@tarojs/components'
import { Notification } from '../index'

export function States() {
  return (
    <View style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: 12 }}>
      <Notification
        type="success"
        title="成功通知"
        description="操作已成功完成"
        duration={0}
        onClose={() => {}}
      />
      <Notification
        type="info"
        title="信息通知"
        description="这是一条信息通知"
        duration={0}
        onClose={() => {}}
      />
      <Notification
        type="warning"
        title="警告通知"
        description="请注意这个警告"
        duration={0}
        onClose={() => {}}
      />
      <Notification
        type="error"
        title="错误通知"
        description="操作失败，请重试"
        duration={0}
        onClose={() => {}}
      />
    </View>
  )
}
