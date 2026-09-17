import { useState } from 'react'
import { Button } from '../../Button'
import { Popconfirm } from '../index'

export function States() {
  const [msg, setMsg] = useState('')
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-3">
        <Popconfirm
          title="确认删除？"
          description="删除后不可恢复，请谨慎操作。"
          onConfirm={() => setMsg('已确认删除')}
          onCancel={() => setMsg('已取消')}
          trigger={<Button variant="danger">删除</Button>}
        />
        <Popconfirm
          title="确认提交？"
          onConfirm={() => setMsg('已确认提交')}
          okText="提交"
          cancelText="再想想"
          trigger={<Button>提交</Button>}
        />
        <Popconfirm
          title="上方弹出"
          placement="top"
          onConfirm={() => setMsg('已确认')}
          trigger={<Button variant="secondary">上方确认</Button>}
        />
      </div>
      {msg ? <span className="text-bodySm text-text-tertiary">状态：{msg}</span> : null}
    </div>
  )
}
