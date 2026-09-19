import { Marquee } from '../index'

export function States() {
  return (
    <div className="flex flex-col gap-3">
      <Marquee speed={60}>这是一条普通跑马灯内容，用于展示滚动效果</Marquee>
      <Marquee speed={100} reverse>
        反向滚动的跑马灯
      </Marquee>
    </div>
  )
}
