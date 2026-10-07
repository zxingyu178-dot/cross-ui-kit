/**
 * HolographicPage 全息镭射材质页（web）—— 彩虹金属全息渐变、高光泽、镭射卡片与会员卡。
 */
const holo =
  'linear-gradient(135deg,#ff9a9e 0%,#fbc2eb 18%,#a18cd1 36%,#84fab0 54%,#8fd3f4 70%,#fccb90 86%,#ffd1ff 100%)'
const sheen =
  'linear-gradient(120deg,rgba(255,255,255,0.55) 0%,rgba(255,255,255,0) 35%,rgba(255,255,255,0.25) 60%,rgba(255,255,255,0) 100%)'

export function HolographicPage() {
  return (
    <div
      className="p-8"
      style={{ background: 'linear-gradient(135deg,#f3e8ff,#e0f2fe)', borderRadius: 20 }}
    >
      <h3 className="text-titleSm font-semibold text-slate-700">全息镭射 Holographic</h3>
      <p className="mb-7 mt-1 text-bodySm text-slate-500">彩虹金属光泽，随角度变幻的镭射质感</p>

      <div className="grid grid-cols-1 items-center gap-7 lg:grid-cols-2">
        {/* 镭射会员卡 */}
        <div
          className="relative aspect-[1.6/1] overflow-hidden p-6 text-white"
          style={{
            background: holo,
            borderRadius: 22,
            boxShadow: '0 18px 40px rgba(140,110,200,0.45)',
          }}
        >
          <div className="absolute inset-0" style={{ background: sheen }} />
          <div className="relative flex h-full flex-col justify-between">
            <div className="flex items-center justify-between">
              <span
                className="text-bodyLg font-black tracking-wide"
                style={{ textShadow: '0 1px 4px rgba(0,0,0,0.25)' }}
              >
                CROSS UI
              </span>
              <span
                className="text-bodySm font-semibold"
                style={{ textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}
              >
                MEMBER
              </span>
            </div>
            <div>
              <p
                className="text-xl font-bold tracking-[0.2em]"
                style={{ textShadow: '0 1px 4px rgba(0,0,0,0.3)' }}
              >
                8888 6666 2026
              </p>
              <p
                className="mt-1 text-bodySm font-semibold"
                style={{ textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}
              >
                ZHAO XINGYU
              </p>
            </div>
          </div>
        </div>

        {/* 镭射元素集 */}
        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap gap-4">
            {['镭射按钮', 'Holo'].map((t, i) => (
              <button
                key={i}
                className="relative overflow-hidden px-6 py-2.5 text-bodyMd font-bold text-slate-800"
                style={{
                  background: holo,
                  borderRadius: 999,
                  boxShadow: '0 8px 20px rgba(150,120,210,0.4)',
                }}
              >
                <span className="relative z-10">{t}</span>
                <span className="absolute inset-0" style={{ background: sheen }} />
              </button>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-3">
            {['#fbc2eb', '#a18cd1', '#8fd3f4'].map((c, i) => (
              <div
                key={i}
                className="flex aspect-square items-center justify-center rounded-xl text-2xl"
                style={{
                  background: `linear-gradient(135deg,${c},#ffffff)`,
                  boxShadow:
                    'inset 0 2px 6px rgba(255,255,255,0.8),0 8px 18px rgba(150,120,210,0.3)',
                }}
              >
                {['💎', '🌈', '✨'][i]}
              </div>
            ))}
          </div>
          <p className="text-bodySm text-slate-500">
            提示：叠加斜向高光层可强化金属镭射的“反光”效果。
          </p>
        </div>
      </div>
    </div>
  )
}
