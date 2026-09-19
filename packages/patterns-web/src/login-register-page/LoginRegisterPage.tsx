/**
 * LoginRegisterPage 双栏登录注册页（web）—— 左侧品牌视觉 + 右侧表单。
 */
import { Input, Button, Checkbox } from '@kit/ui-web'

export function LoginRegisterPage() {
  return (
    <div className="grid min-h-[480px] grid-cols-1 overflow-hidden rounded-lg md:grid-cols-2">
      {/* 左侧品牌区 */}
      <div
        className="hidden flex-col justify-between p-8 text-white md:flex"
        style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)' }}
      >
        <div className="text-2xl font-bold">🟢 CrossUI Kit</div>
        <div>
          <h2 className="text-3xl font-bold leading-tight">一套组件，覆盖全端</h2>
          <p className="mt-3 text-white/85">网页 / PC 桌面 / 小程序 / 原生 App，统一设计语言。</p>
        </div>
        <p className="text-sm text-white/70">© 2026 CrossUI Kit</p>
      </div>

      {/* 右侧表单 */}
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-sm">
          <h1 className="text-2xl font-semibold text-text-primary">欢迎登录</h1>
          <p className="mt-1 text-bodySm text-text-secondary">使用账号密码登录</p>

          <div className="mt-6 flex flex-col gap-4">
            <Input placeholder="邮箱 / 手机号" />
            <Input type="password" placeholder="密码" />
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-bodySm text-text-secondary">
                <Checkbox /> 记住我
              </label>
              <button className="text-bodySm text-primary-default">忘记密码？</button>
            </div>
            <Button variant="primary" block size="lg">
              登 录
            </Button>
            <div className="text-center text-bodySm text-text-secondary">
              还没有账号？<button className="text-primary-default">立即注册</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
