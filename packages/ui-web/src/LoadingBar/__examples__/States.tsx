import { LoadingBar } from '../index'
import { Button } from '../../Button'

export function States() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-2">
        <LoadingBar progress={20} visible />
      </div>
      <p className="text-bodySm text-text-secondary">上方进度条（20%）。下方为不确定进度演示：</p>
      <div className="flex gap-2">
        <Button variant="secondary" onClick={() => {}}>
          点击触发不确定进度条
        </Button>
      </div>
    </div>
  )
}
