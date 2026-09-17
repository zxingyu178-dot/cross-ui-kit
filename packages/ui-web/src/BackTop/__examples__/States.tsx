import { BackTop } from '../index'

export function States() {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-caption text-text-tertiary">
        向下滚动页面超过 400px 后，右下角会出现回到顶部按钮
      </span>
      <BackTop visibilityHeight={200} />
    </div>
  )
}
