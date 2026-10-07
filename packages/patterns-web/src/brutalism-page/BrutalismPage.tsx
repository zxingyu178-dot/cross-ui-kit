/**
 * BrutalismPage 新粗野主义主题页（web）—— 粗黑边框、硬投影、高饱和撞色、粗体大字。
 */
const hard = '4px 4px 0 0 #111111'
const hardLg = '8px 8px 0 0 #111111'

export function BrutalismPage() {
  return (
    <div className="p-8" style={{ background: '#fef9c3', borderRadius: 16 }}>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h3
          className="text-4xl font-black uppercase tracking-tight text-slate-900"
          style={{ textShadow: '3px 3px 0 #f472b6' }}
        >
          Neo-Brutalism
        </h3>
        <button
          className="border-4 border-slate-900 bg-cyan-300 px-5 py-2 text-bodyMd font-bold uppercase transition-transform hover:-translate-y-0.5"
          style={{ boxShadow: hard }}
        >
          点我 →
        </button>
      </div>

      <p className="mt-3 text-bodyMd font-medium text-slate-800">
        毫不掩饰的边框、偏移硬阴影与撞色，直接、有力、记忆点强。
      </p>

      <div className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {[
          { t: '直接', d: '拒绝柔和渐变', bg: '#fb7185', icon: '✊' },
          { t: '醒目', d: '高饱和撞色块', bg: '#a3e635', icon: '👁️' },
          { t: '个性', d: '粗体 + 硬阴影', bg: '#c4b5fd', icon: '🎸' },
        ].map((c) => (
          <div
            key={c.t}
            className="border-4 border-slate-900 p-6"
            style={{ background: c.bg, boxShadow: hardLg }}
          >
            <span className="text-4xl">{c.icon}</span>
            <p className="mt-3 text-bodyLg font-black uppercase">{c.t}</p>
            <p className="mt-1 text-bodySm font-semibold text-slate-800">{c.d}</p>
          </div>
        ))}
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-3">
        {['#f472b6', '#38bdf8', '#fbbf24'].map((c, i) => (
          <span
            key={i}
            className="border-2 border-slate-900 px-3 py-1 text-bodySm font-bold"
            style={{ background: c }}
          >
            标签 {i + 1}
          </span>
        ))}
        <div className="flex-1 border-4 border-slate-900 bg-white px-4 py-2 text-bodySm font-medium text-slate-500">
          粗野主义输入框…
        </div>
      </div>
    </div>
  )
}
