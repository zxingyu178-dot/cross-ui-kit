/**
 * QrCodeLoginPage 扫码登录页（web）—— 二维码 + 扫码状态 + 切换登录方式。
 */
import { Card, Button } from '@kit/ui-web'

export function QrCodeLoginPage() {
  return (
    <Card className="mx-auto max-w-sm">
      <h1 className="text-2xl font-semibold text-text-primary">扫码登录</h1>
      <p className="mt-1 text-bodySm text-text-secondary">使用 App 扫一扫，安全快捷</p>

      <div className="mt-6 flex flex-col items-center gap-4">
        {/* 二维码（模拟） */}
        <div className="relative flex h-48 w-48 items-center justify-center rounded-lg border-2 border-dashed border-primary-default bg-bg-secondary">
          <div className="grid grid-cols-8 gap-0.5">
            {Array.from({ length: 64 }).map((_, i) => (
              <div
                key={i}
                className={`h-3 w-3 ${[0, 1, 2, 8, 16, 5, 13, 21, 6, 14, 22, 56, 57, 58, 48, 40, 61, 53, 45].includes(i) ? 'bg-text-primary' : 'bg-transparent'}`}
              />
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-2xl shadow">
              🟢
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-full bg-success/10 px-4 py-1.5">
          <span className="text-success">✓</span>
          <span className="text-bodySm text-success">请使用手机 App 扫描二维码</span>
        </div>

        <p className="text-bodySm text-text-secondary">
          扫码后请在手机上<span className="text-primary-default">确认登录</span>
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-border-default" />
          <span className="text-bodySm text-text-tertiary">其他登录方式</span>
          <div className="h-px flex-1 bg-border-default" />
        </div>
        <div className="flex justify-center gap-4 text-2xl">
          <button title="密码登录">🔑</button>
          <button title="短信登录">📱</button>
          <button title="微信登录">💬</button>
          <button title="邮箱登录">📧</button>
        </div>
        <Button variant="ghost" block size="sm">
          使用账号密码登录 →
        </Button>
      </div>
    </Card>
  )
}
