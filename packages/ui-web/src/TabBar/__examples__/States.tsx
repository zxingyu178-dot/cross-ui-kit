import { TabBar } from '../index'

export function States() {
  return (
    <div className="flex flex-col gap-4">
      <TabBar
        items={[
          { key: 'home', label: '首页', icon: '⌂' },
          { key: 'order', label: '订单', icon: '☰' },
          { key: 'msg', label: '消息', icon: '✉', badge: 5 },
          { key: 'me', label: '我的', icon: '☺' },
        ]}
        defaultActiveKey="home"
      />
      <TabBar
        items={[
          { key: 'a', label: '推荐' },
          { key: 'b', label: '关注' },
          { key: 'c', label: '同城' },
        ]}
        defaultActiveKey="b"
      />
    </div>
  )
}
