/** Toast 示例：五种语义类型、三种位置、常驻 loading 与手动关闭（mini）。 */
import { View } from '@tarojs/components'
import { useState } from 'react'
import { Button } from '../../Button'
import { Toast, type ToastPosition, type ToastType } from '../index'

export function States() {
  const [open, setOpen] = useState(false)
  const [type, setType] = useState<ToastType>('info')
  const [duration, setDuration] = useState(2400)
  const [position, setPosition] = useState<ToastPosition>('center')
  const [message, setMessage] = useState('')

  const show = (
    t: ToastType,
    msg: string,
    opts?: { duration?: number; position?: ToastPosition },
  ) => {
    setType(t)
    setMessage(msg)
    setDuration(opts?.duration ?? 2400)
    setPosition(opts?.position ?? 'center')
    setOpen(true)
  }

  return (
    <View style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: 12 }}>
      <Button block variant="primary" onPress={() => show('success', '操作已成功保存')}>
        成功提示
      </Button>
      <Button block variant="danger" onPress={() => show('error', '提交失败，请稍后重试')}>
        错误提示
      </Button>
      <Button block variant="secondary" onPress={() => show('warning', '当前网络不稳定')}>
        警告提示
      </Button>
      <Button block variant="secondary" onPress={() => show('info', '这是一条普通信息提示')}>
        信息提示
      </Button>
      <Button
        block
        variant="secondary"
        onPress={() => show('loading', '正在加载…', { duration: 0 })}
      >
        加载中（常驻）
      </Button>
      <Button
        block
        variant="ghost"
        onPress={() => show('success', '顶部提示', { position: 'top' })}
      >
        顶部
      </Button>
      <Button
        block
        variant="ghost"
        onPress={() => show('success', '底部提示', { position: 'bottom' })}
      >
        底部
      </Button>
      <Button block variant="ghost" onPress={() => setOpen(false)}>
        手动关闭
      </Button>

      <Toast
        open={open}
        onOpenChange={setOpen}
        type={type}
        message={message}
        duration={duration}
        position={position}
      />
    </View>
  )
}
