import { NoticeBar } from '../index'

export function States() {
  return (
    <div className="flex flex-col gap-2">
      <NoticeBar content="欢迎使用 cross-ui-kit 组件库" tone="info" icon="ℹ" />
      <NoticeBar content="系统将于今晚 24:00 维护，请提前保存" tone="warning" />
      <NoticeBar
        content="订单已发货"
        tone="success"
        action={<span className="underline">查看</span>}
      />
      <NoticeBar content="网络异常，请检查连接" tone="danger" onClose={() => {}} />
      <NoticeBar content="这是一条很长的滚动通知，用于演示跑马灯效果" tone="info" scrollable />
    </div>
  )
}
