/** Cell 示例：列表项（native）。 */
import { YStack } from 'tamagui'
import { Cell } from '../index'

export function States() {
  return (
    <YStack>
      <Cell title="账号安全" description="已绑定手机" onClick={() => {}} />
      <Cell title="消息通知" clickable />
      <Cell title="清除缓存" description="12.3 MB" />
    </YStack>
  )
}
