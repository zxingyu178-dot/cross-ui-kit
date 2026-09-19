/**
 * NeumorphismPage 新拟态材质页（web）—— soft shadow 凸起/凹陷。
 */
export function NeumorphismPage() {
  const base = {
    background: '#e0e5ec',
    borderRadius: 16,
  }
  const raised = {
    boxShadow: '8px 8px 16px #a3b1c6, -8px -8px 16px #ffffff',
  }
  const pressed = {
    boxShadow: 'inset 6px 6px 12px #a3b1c6, inset -6px -6px 12px #ffffff',
  }

  return (
    <div style={{ ...base, padding: 32, borderRadius: 16 }}>
      <h3 className="mb-4 text-titleSm font-medium text-slate-700">新拟态 Neumorphism</h3>
      <p className="mb-6 text-bodySm text-slate-500">同色背景 + 双向软阴影 = 凸起/凹陷</p>

      <div className="flex flex-wrap gap-6">
        {/* 凸起卡片 */}
        <div className="flex flex-col items-center gap-2">
          <div
            className="flex h-24 w-24 items-center justify-center"
            style={{ ...base, ...raised, borderRadius: 24 }}
          >
            <span className="text-3xl">✨</span>
          </div>
          <span className="text-bodySm text-slate-600">凸起 Raised</span>
        </div>

        {/* 凹陷输入 */}
        <div className="flex flex-col items-center gap-2">
          <div
            className="flex h-24 w-48 items-center px-4"
            style={{ ...base, ...pressed, borderRadius: 16 }}
          >
            <span className="text-bodySm text-slate-400">输入框…</span>
          </div>
          <span className="text-bodySm text-slate-600">凹陷 Pressed</span>
        </div>

        {/* 圆形按钮 */}
        <div className="flex flex-col items-center gap-2">
          <button
            className="flex h-20 w-20 items-center justify-center text-2xl"
            style={{ ...base, ...raised, borderRadius: '50%' }}
          >
            👍
          </button>
          <span className="text-bodySm text-slate-600">圆形按钮</span>
        </div>

        {/* 开关 */}
        <div className="flex flex-col items-center gap-2">
          <div
            className="flex h-12 w-24 items-center px-1"
            style={{ ...base, ...pressed, borderRadius: 999 }}
          >
            <div className="h-10 w-10 rounded-full" style={raised} />
          </div>
          <span className="text-bodySm text-slate-600">开关</span>
        </div>
      </div>
    </div>
  )
}
