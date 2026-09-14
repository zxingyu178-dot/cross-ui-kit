/** Button 示例：尺寸、加载、禁用、撑满（web），覆盖四态与边界。 */
import { Button } from '../index'

export function States() {
  return (
    <div className="flex w-80 flex-col gap-3">
      <div className="flex flex-wrap items-center gap-3">
        <Button size="sm">小号</Button>
        <Button size="md">中号</Button>
        <Button size="lg">大号</Button>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Button loading>提交中</Button>
        <Button disabled>已禁用</Button>
      </div>
      <Button block>撑满宽度</Button>
      <Button
        variant="primary"
        onClick={() => {
          // 演示：点击后进入 loading（防重复提交模式由业务接 useSubmitLock）
        }}
      >
        点击操作
      </Button>
    </div>
  )
}
