import { Cell } from '../index'

export function States() {
  return (
    <div className="flex flex-col divide-y divide-border-default rounded-lg border border-border-default">
      <Cell title="账号安全" description="已绑定手机" icon="🔒" onClick={() => {}} />
      <Cell
        title="消息通知"
        right={<span className="text-success-default">已开启</span>}
        clickable
      />
      <Cell title="清除缓存" description="12.3 MB" />
      <Cell title="关于我们" description="v1.0.0" onClick={() => {}} />
    </div>
  )
}
