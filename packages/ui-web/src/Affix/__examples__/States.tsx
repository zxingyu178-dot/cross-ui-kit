import { Affix } from '../index'
import { Button } from '../../Button'

export function States() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">
          顶部固钉（offsetTop=20，滚动页面查看效果）
        </span>
        <Affix offsetTop={20}>
          <Button variant="primary">固定在顶部 20px</Button>
        </Affix>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">底部固钉（offsetBottom=20）</span>
        <Affix offsetBottom={20}>
          <Button variant="secondary">固定在底部 20px</Button>
        </Affix>
      </div>
    </div>
  )
}
