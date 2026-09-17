import { useState } from 'react'
import { Button } from '../../Button'
import { Drawer } from '../index'

export function States() {
  const [rightOpen, setRightOpen] = useState(false)
  const [leftOpen, setLeftOpen] = useState(false)
  const [bottomOpen, setBottomOpen] = useState(false)

  return (
    <div className="flex flex-wrap gap-3">
      <Button onClick={() => setRightOpen(true)}>右侧抽屉</Button>
      <Button variant="secondary" onClick={() => setLeftOpen(true)}>
        左侧抽屉
      </Button>
      <Button variant="ghost" onClick={() => setBottomOpen(true)}>
        底部抽屉
      </Button>

      <Drawer open={rightOpen} onOpenChange={setRightOpen} title="右侧抽屉" placement="right">
        <p className="text-bodySm text-text-secondary">
          这是从右侧滑出的抽屉内容，可以放置表单、详情、菜单等。
        </p>
      </Drawer>
      <Drawer
        open={leftOpen}
        onOpenChange={setLeftOpen}
        title="左侧抽屉"
        placement="left"
        size={280}
      >
        <p className="text-bodySm text-text-secondary">这是从左侧滑出的抽屉，宽度 280px。</p>
      </Drawer>
      <Drawer
        open={bottomOpen}
        onOpenChange={setBottomOpen}
        title="底部抽屉"
        placement="bottom"
        size={300}
      >
        <p className="text-bodySm text-text-secondary">这是从底部滑出的抽屉，高度 300px。</p>
      </Drawer>
    </div>
  )
}
