/** Transfer 示例：基础穿梭框（mini）。 */
import { useState } from 'react'
import { Text, View } from '@tarojs/components'
import { Transfer } from '../index'
import type { TransferItem } from '../Transfer.types'

const data: TransferItem[] = [
  { key: '1', title: '用户管理', description: '管理系统用户' },
  { key: '2', title: '角色管理', description: '管理用户角色' },
  { key: '3', title: '权限管理', description: '管理权限配置' },
  { key: '4', title: '菜单管理', description: '管理系统菜单' },
  { key: '5', title: '部门管理', description: '管理组织架构' },
]

export function States() {
  const [target, setTarget] = useState<string[]>(['3'])
  return (
    <View style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: 12 }}>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>
          基础穿梭框（当前右侧：{target.length} 项）
        </Text>
        <Transfer dataSource={data} targetKeys={target} onChange={setTarget} />
      </View>
    </View>
  )
}
