import { FloatButton } from '../index'

export function States() {
  return (
    <div className="relative h-48">
      <div className="flex flex-wrap gap-6">
        <div className="relative h-20 w-20">
          <FloatButton bottom={0} right={0} tooltip="新建" />
        </div>
        <div className="relative h-20 w-20">
          <FloatButton bottom={0} right={0} type="default" tooltip="默认" icon={<span>⚙</span>} />
        </div>
        <div className="relative h-20 w-20">
          <FloatButton bottom={0} right={0} shape="square" tooltip="方形" icon={<span>✎</span>} />
        </div>
      </div>
    </div>
  )
}
