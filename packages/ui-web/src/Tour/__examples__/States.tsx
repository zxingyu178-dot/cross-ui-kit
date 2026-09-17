import { useState } from 'react'
import { Tour } from '../index'
import type { TourStep } from '../Tour.types'

const steps: TourStep[] = [
  { title: '欢迎使用', description: '这是一个引导示例，将带你了解系统的主要功能。' },
  { title: '组件库', description: '我们提供了丰富的 UI 组件，可以直接在开发中使用。' },
  { title: '统一标准', description: '所有组件遵循统一的设计标准，确保视觉一致性。' },
  { title: '开始使用', description: '现在你可以开始探索和使用这些组件了！' },
]

export function States() {
  const [open, setOpen] = useState(false)
  return (
    <div className="flex flex-col gap-4">
      <button
        type="button"
        className="w-fit rounded-md bg-primary-default px-4 py-2 text-bodySm text-white hover:bg-primary-default/90"
        onClick={() => setOpen(true)}
      >
        开始引导
      </button>
      {open ? (
        <Tour steps={steps} onFinish={() => setOpen(false)} onClose={() => setOpen(false)} />
      ) : null}
    </div>
  )
}
