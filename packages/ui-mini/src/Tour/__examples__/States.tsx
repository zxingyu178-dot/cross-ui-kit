/** Tour 示例：基础引导（mini）。 */
import { useState } from 'react'
import { Text, View } from '@tarojs/components'
import { Tour } from '../index'
import type { TourStep } from '../Tour.types'

const steps: TourStep[] = [
  { title: '欢迎使用', description: '这是一个引导示例。' },
  { title: '组件库', description: '我们提供了丰富的 UI 组件。' },
  { title: '开始使用', description: '现在你可以开始探索了！' },
]

export function States() {
  const [open, setOpen] = useState(false)
  return (
    <View style={{ padding: 12 }}>
      <View
        style={{
          alignSelf: 'flex-start',
          padding: '8px 16px',
          borderRadius: 6,
          background: 'var(--kit-color-primary-default)',
        }}
        onClick={() => setOpen(true)}
      >
        <Text style={{ color: '#fff', fontSize: 14 }}>开始引导</Text>
      </View>
      {open ? (
        <Tour steps={steps} onFinish={() => setOpen(false)} onClose={() => setOpen(false)} />
      ) : null}
    </View>
  )
}
