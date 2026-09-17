import { Button } from '../../Button'
import { Tooltip } from '../index'

export function States() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row flex-wrap items-end gap-4">
        <Tooltip content="顶部提示气泡" placement="top">
          <Button size="sm">Top</Button>
        </Tooltip>
        <Tooltip content="底部提示气泡" placement="bottom">
          <Button size="sm">Bottom</Button>
        </Tooltip>
        <Tooltip content="左侧提示气泡" placement="left">
          <Button size="sm">Left</Button>
        </Tooltip>
        <Tooltip content="右侧提示气泡" placement="right">
          <Button size="sm">Right</Button>
        </Tooltip>
      </div>
      <div className="flex flex-row flex-wrap items-end gap-4">
        <Tooltip
          content="这是一段较长的提示文本，用于测试气泡在长内容下的自动换行与最大宽度表现"
          placement="top"
        >
          <Button size="sm" variant="secondary">
            长文本
          </Button>
        </Tooltip>
        <Tooltip content="延迟 500ms 显示" delayDuration={500} placement="top">
          <Button size="sm" variant="secondary">
            延迟 500ms
          </Button>
        </Tooltip>
        <Tooltip content="此提示已禁用" disabled placement="top">
          <Button size="sm" variant="ghost" disabled>
            Disabled
          </Button>
        </Tooltip>
      </div>
    </div>
  )
}
