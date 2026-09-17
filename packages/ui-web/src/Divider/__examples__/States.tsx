import { Divider } from '../index'

export function States() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3">
        <span className="text-caption text-text-tertiary">solid / dashed / dotted</span>
        <Divider type="solid" />
        <Divider type="dashed" />
        <Divider type="dotted" />
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-caption text-text-tertiary">带文字（left / center / right）</span>
        <Divider text="左侧文字" textPosition="left" />
        <Divider text="或者" textPosition="center" />
        <Divider text="右侧文字" textPosition="right" />
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-caption text-text-tertiary">垂直方向（需父容器高度）</span>
        <div className="flex h-10 flex-row items-center gap-4">
          <span className="text-body-sm">左侧</span>
          <Divider orientation="vertical" />
          <span className="text-body-sm">右侧</span>
          <Divider orientation="vertical" type="dashed" />
          <span className="text-body-sm">末尾</span>
        </div>
      </div>
    </div>
  )
}
