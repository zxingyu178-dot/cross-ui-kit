import { useState } from 'react'
import { Transfer } from '../index'
import type { TransferItem } from '../Transfer.types'

const data: TransferItem[] = [
  { key: '1', title: '用户管理', description: '管理系统用户' },
  { key: '2', title: '角色管理', description: '管理用户角色' },
  { key: '3', title: '权限管理', description: '管理权限配置' },
  { key: '4', title: '菜单管理', description: '管理系统菜单' },
  { key: '5', title: '部门管理', description: '管理组织架构' },
  { key: '6', title: '日志管理', description: '查看操作日志', disabled: true },
  { key: '7', title: '系统设置', description: '系统参数配置' },
  { key: '8', title: '数据备份', description: '数据备份恢复' },
]

export function States() {
  const [target, setTarget] = useState<string[]>(['3', '5'])
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">
          基础穿梭框（当前右侧：{target.length} 项）
        </span>
        <Transfer dataSource={data} targetKeys={target} onChange={setTarget} />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">自定义标题和操作按钮</span>
        <Transfer
          dataSource={data.slice(0, 4)}
          targetKeys={[]}
          onChange={() => {}}
          titles={['待选', '已选']}
          operations={['→', '←']}
        />
      </div>
    </div>
  )
}
