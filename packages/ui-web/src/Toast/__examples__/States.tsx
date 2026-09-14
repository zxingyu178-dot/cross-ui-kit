/** Toast 示例：五种语义类型、三种位置、常驻 loading 与手动关闭（web）。 */
import { useState } from 'react'
import { Button } from '../../Button'
import { Toast, type ToastPosition, type ToastType } from '../index'

export function States() {
  const [open, setOpen] = useState(false)
  const [type, setType] = useState<ToastType>('info')
  const [message, setMessage] = useState('')
  const [duration, setDuration] = useState(2400)
  const [position, setPosition] = useState<ToastPosition>('center')

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
    <div className="flex flex-wrap gap-3">
      <Button variant="primary" onClick={() => show('success', '操作已成功保存')}>
        成功提示
      </Button>
      <Button variant="danger" onClick={() => show('error', '提交失败，请稍后重试')}>
        错误提示
      </Button>
      <Button variant="secondary" onClick={() => show('warning', '当前网络不稳定')}>
        警告提示
      </Button>
      <Button variant="secondary" onClick={() => show('info', '这是一条普通信息提示')}>
        信息提示
      </Button>
      <Button variant="secondary" onClick={() => show('loading', '正在加载…', { duration: 0 })}>
        加载中（常驻）
      </Button>
      <Button variant="ghost" onClick={() => show('success', '顶部滑入提示', { position: 'top' })}>
        顶部
      </Button>
      <Button
        variant="ghost"
        onClick={() => show('success', '底部滑入提示', { position: 'bottom' })}
      >
        底部
      </Button>
      <Button variant="ghost" onClick={() => setOpen(false)}>
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
    </div>
  )
}
