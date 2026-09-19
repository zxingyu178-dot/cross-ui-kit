import { useState } from 'react'
import { Backdrop } from '../index'
import { Button } from '../../Button'
import { Card } from '../../Card'

export function States() {
  const [open, setOpen] = useState(false)
  return (
    <div className="flex flex-col gap-3">
      <Button variant="primary" onClick={() => setOpen(true)}>
        打开遮罩层
      </Button>
      <Backdrop open={open} onClose={() => setOpen(false)}>
        <Card className="w-80 p-6">
          <p className="text-bodyMd text-text-primary">这是遮罩层内容</p>
          <p className="mt-2 text-bodySm text-text-secondary">点击遮罩空白处关闭</p>
        </Card>
      </Backdrop>
    </div>
  )
}
