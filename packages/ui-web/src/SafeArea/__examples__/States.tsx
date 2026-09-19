import { SafeArea } from '../index'
import { Button } from '../../Button'

export function States() {
  return (
    <div className="flex flex-col gap-3">
      <SafeArea position="top">
        <div className="rounded bg-bg-secondary p-3 text-bodySm text-text-secondary">
          顶部安全区占位（刘海屏生效）
        </div>
      </SafeArea>
      <SafeArea position="bottom">
        <Button variant="primary" className="w-full">
          底部按钮
        </Button>
      </SafeArea>
    </div>
  )
}
