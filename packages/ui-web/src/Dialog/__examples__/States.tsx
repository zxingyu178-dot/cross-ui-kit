/** Dialog 示例：基础确认、无取消、遮罩不关闭 + 提交 loading、自定义底部（web）。 */
import { useState } from 'react'
import { Button } from '../../Button'
import { Dialog } from '../index'

export function States() {
  const [basic, setBasic] = useState(false)
  const [alert, setAlert] = useState(false)
  const [persist, setPersist] = useState(false)
  const [saving, setSaving] = useState(false)
  const [custom, setCustom] = useState(false)

  const openPersist = () => {
    setSaving(false)
    setPersist(true)
  }
  const confirmPersist = (): false | void => {
    setSaving(true)
    // 模拟异步提交：返回 false 阻止自动关闭，loading 期间按钮禁用，1.2s 后外部关闭
    setTimeout(() => setPersist(false), 1200)
    return false
  }

  return (
    <div className="flex flex-wrap gap-3">
      <Button variant="primary" onClick={() => setBasic(true)}>
        基础确认弹窗
      </Button>
      <Button variant="danger" onClick={() => setAlert(true)}>
        警告（无取消钮）
      </Button>
      <Button variant="secondary" onClick={openPersist}>
        遮罩不关闭 + 提交 loading
      </Button>
      <Button variant="secondary" onClick={() => setCustom(true)}>
        自定义底部
      </Button>

      <Dialog
        open={basic}
        onOpenChange={setBasic}
        title="确认操作"
        description="确定要执行此操作吗？此操作可在设置中撤销。"
      />

      <Dialog
        open={alert}
        onOpenChange={setAlert}
        title="删除确认"
        showCancel={false}
        confirmText="我知道了"
        description="删除后数据将无法恢复，请谨慎操作。"
      />

      <Dialog
        open={persist}
        onOpenChange={setPersist}
        title="保存修改"
        closeOnOverlayClick={false}
        closeOnEsc={false}
        confirmText="保存"
        confirmLoading={saving}
        onConfirm={confirmPersist}
        description="遮罩与 Esc 不会关闭，只有底部按钮能关闭，避免误触丢失内容。"
      />

      <Dialog
        open={custom}
        onOpenChange={setCustom}
        title="自定义底部"
        footer={
          <div className="mt-6 flex flex-col gap-2">
            <Button variant="primary" block onClick={() => setCustom(false)}>
              主行动
            </Button>
            <Button variant="ghost" block onClick={() => setCustom(false)}>
              稍后再说
            </Button>
          </div>
        }
      >
        通过 footer prop 完全自定义底部按钮区。
      </Dialog>
    </div>
  )
}
