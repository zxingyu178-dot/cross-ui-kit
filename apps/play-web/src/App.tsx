import { useEffect, useState } from 'react'
import { Button } from '@kit/ui-web'
// 直接引用库内示例（与 hub/Storybook 同源，保证演示即真实资产）
import { Variants } from '@kit/ui-web/src/Button/__examples__/Variants'
import { States } from '@kit/ui-web/src/Button/__examples__/States'
import { States as InputStates } from '@kit/ui-web/src/Input/__examples__/States'

/**
 * play-web 演示壳入口。
 * 暗色通过给 <html> 根节点切换 .dark 类实现（与 tokens.dark.css 的 .dark 选择器一致）：
 * 必须挂在 documentElement 上，body 及其后代才能统一继承暗色 CSS 变量。
 */
export default function App() {
  const [dark, setDark] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  const mockSubmit = () => {
    setLoading(true)
    // 演示提交锁：loading 期间按钮禁用，1.2s 后恢复（真实业务接 core useSubmitLock）
    setTimeout(() => setLoading(false), 1200)
  }

  return (
    <main className="mx-auto flex min-h-full max-w-5xl flex-col gap-8 p-8">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-title-md font-semibold text-text-primary">cross-ui-kit · play-web</h1>
          <p className="text-body-sm text-text-secondary">
            大端组件预览壳（React 18.3 + Vite 6 + Tailwind v4 + @kit/tokens）
          </p>
        </div>
        <Button variant="secondary" onClick={() => setDark((v) => !v)}>
          {dark ? '切换亮色' : '切换暗色'}
        </Button>
      </header>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">Button · 视觉层级</h2>
        <Variants />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">Button · 尺寸与状态</h2>
        <States />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">Input · 输入框</h2>
        <InputStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          Button · 提交锁（防重复提交）
        </h2>
        <div className="flex gap-3">
          <Button loading={loading} onClick={mockSubmit}>
            {loading ? '提交中…' : '提交表单'}
          </Button>
          <Button variant="ghost" disabled={loading} onClick={() => location.reload()}>
            重置
          </Button>
        </div>
      </section>
    </main>
  )
}
