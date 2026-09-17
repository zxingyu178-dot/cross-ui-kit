import { useState } from 'react'
import { Notification } from '../index'
import type { NotificationType } from '../Notification.types'

const types: NotificationType[] = ['success', 'info', 'warning', 'error']

export function States() {
  const [visible, setVisible] = useState<Record<string, boolean>>({
    success: true,
    info: true,
    warning: true,
    error: true,
  })

  return (
    <div className="flex flex-col gap-4">
      {types.map((type) =>
        visible[type] ? (
          <Notification
            key={type}
            type={type}
            title={`${type.charAt(0).toUpperCase() + type.slice(1)} 通知`}
            description={`这是一条 ${type} 类型的通知消息，用于展示通知组件的样式。`}
            duration={0}
            onClose={() => setVisible((prev) => ({ ...prev, [type]: false }))}
          />
        ) : (
          <button
            key={type}
            type="button"
            className="w-80 rounded-md border border-border-default bg-bg-card px-4 py-2 text-bodySm text-text-secondary hover:bg-bg-muted"
            onClick={() => setVisible((prev) => ({ ...prev, [type]: true }))}
          >
            重新显示 {type} 通知
          </button>
        ),
      )}
    </div>
  )
}
