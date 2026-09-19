import { Trend } from '../index'

export function States() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">默认（涨红跌绿）</span>
        <div className="flex items-center gap-6">
          <Trend direction="up" value="12.5%" />
          <Trend direction="down" value="3.2%" />
          <Trend direction="flat" value="0.0%" showArrow={false} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">反转（涨绿跌红）</span>
        <div className="flex items-center gap-6">
          <Trend direction="up" value="8.8%" inverted />
          <Trend direction="down" value="1.4%" inverted />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">隐藏箭头</span>
        <div className="flex items-center gap-6">
          <Trend direction="up" value="12.5%" showArrow={false} />
          <Trend direction="down" value="3.2%" showArrow={false} />
        </div>
      </div>
    </div>
  )
}
