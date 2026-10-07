/**
 * PaperCutPage 剪纸层叠材质页（web）—— 同色系深浅多层纸张切割、硬阴影、层叠波浪。
 */
const layers = [
  { c: '#a7f3d0', h: 120, off: 0 },
  { c: '#6ee7b7', h: 140, off: 40 },
  { c: '#34d399', h: 160, off: 90 },
  { c: '#10b981', h: 180, off: 140 },
]

export function PaperCutPage() {
  return (
    <div
      className="relative overflow-hidden p-8"
      style={{ background: '#ecfdf5', borderRadius: 20, minHeight: 460 }}
    >
      <div className="relative z-10 max-w-md">
        <span className="inline-block rounded-md bg-emerald-700 px-3 py-1 text-bodySm font-semibold text-white">
          Paper Cut
        </span>
        <h3 className="mt-4 text-3xl font-bold text-emerald-900">层叠的剪纸艺术</h3>
        <p className="mt-2 text-bodyMd text-emerald-800/80">
          同色系深浅纸张层层切割堆叠，配合硬阴影，形成富有层次与手工温度的画面。
        </p>
        <button className="mt-6 rounded-lg bg-emerald-600 px-5 py-2.5 text-bodyMd font-semibold text-white shadow-[4px_4px_0_0_#065f46]">
          开始创作
        </button>
      </div>

      {/* 层叠波浪（多层纸张） */}
      {layers.map((l, i) => (
        <div
          key={i}
          className="pointer-events-none absolute -bottom-2"
          style={{
            left: l.off - 60,
            right: -l.off,
            height: l.h,
            background: l.c,
            borderRadius: '50% 50% 0 0 / 80px 80px 0 0',
            boxShadow: '0 -8px 20px rgba(6,95,70,0.18)',
            zIndex: i + 1,
          }}
        />
      ))}

      {/* 剪纸风卡片 */}
      <div className="relative z-10 mt-10 grid grid-cols-3 gap-4">
        {[
          { t: '分层', c: '#ffffff' },
          { t: '切割', c: '#d1fae5' },
          { t: '堆叠', c: '#a7f3d0' },
        ].map((c, i) => (
          <div
            key={i}
            className="rounded-xl border border-emerald-200 p-4 text-center"
            style={{ background: c.c, boxShadow: '6px 6px 0 0 rgba(16,185,129,0.35)' }}
          >
            <p className="text-bodyMd font-bold text-emerald-800">{c.t}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
