import { useState } from 'react'
import { Button } from '../../Button'
import { ActionSheet } from '../index'

export function States() {
  const [open, setOpen] = useState(false)
  return (
    <div className="flex flex-col gap-4">
      <Button variant="primary" onClick={() => setOpen(true)}>
        打开 ActionSheet
      </Button>
      <ActionSheet
        open={open}
        title="选择操作"
        actions={[
          { key: 'edit', label: '编辑' },
          { key: 'share', label: '分享' },
          { key: 'del', label: '删除', danger: true },
        ]}
        onClose={() => setOpen(false)}
      />
    </div>
  )
}
