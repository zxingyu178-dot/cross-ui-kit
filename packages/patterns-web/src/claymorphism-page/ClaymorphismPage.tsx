/**
 * ClaymorphismPage 黏土拟态材质页（web）—— 马卡龙色、圆胖大圆角、内外双向柔和阴影。
 */
const clay = (outer: string, hi = 'rgba(255,255,255,0.65)') => ({
  background: outer,
  boxShadow: `inset -6px -6px 12px rgba(0,0,0,0.10), inset 6px 6px 12px ${hi}, 14px 16px 28px rgba(120,90,140,0.28)`,
})

const items = [
  {
    icon: '🌸',
    title: '柔和',
    desc: '马卡龙低饱和配色',
    bg: 'linear-gradient(145deg,#ffd6e7,#ffb3d1)',
  },
  {
    icon: '☁️',
    title: '圆胖',
    desc: '超大圆角像黏土',
    bg: 'linear-gradient(145deg,#cde8ff,#a6cfff)',
  },
  {
    icon: '🍡',
    title: '立体',
    desc: '内外双向软阴影',
    bg: 'linear-gradient(145deg,#d8f3dc,#aee5c0)',
  },
]

export function ClaymorphismPage() {
  return (
    <div
      className="p-8"
      style={{
        background: 'linear-gradient(135deg,#fdeef6,#eef4ff 55%,#eafaf0)',
        borderRadius: 24,
      }}
    >
      <h3 className="text-titleSm font-semibold text-slate-700">黏土拟态 Claymorphism</h3>
      <p className="mb-7 mt-1 text-bodySm text-slate-500">柔软、饱满、可“捏”的立体质感</p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {items.map((it) => (
          <div
            key={it.title}
            className="flex flex-col items-center gap-2 p-7 text-center"
            style={{ ...clay(it.bg), borderRadius: 30 }}
          >
            <span className="text-4xl">{it.icon}</span>
            <p className="mt-1 text-bodyMd font-semibold text-slate-700">{it.title}</p>
            <p className="text-bodySm text-slate-500">{it.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-5">
        <button
          className="px-7 py-3 text-bodyMd font-semibold text-white"
          style={{
            ...clay('linear-gradient(145deg,#ff9ec4,#ff6fa5)', 'rgba(255,255,255,0.5)'),
            borderRadius: 999,
          }}
        >
          主要操作
        </button>
        <button
          className="px-7 py-3 text-bodyMd font-semibold text-slate-600"
          style={{ ...clay('linear-gradient(145deg,#eef2ff,#d6deff)'), borderRadius: 999 }}
        >
          次要操作
        </button>
        <div
          className="flex items-center gap-2 px-5 py-3 text-bodySm text-slate-400"
          style={{
            ...clay('linear-gradient(145deg,#ffffff,#f1f4ff)', 'rgba(255,255,255,0.9)'),
            borderRadius: 999,
          }}
        >
          🔍 搜索点什么…
        </div>
      </div>
    </div>
  )
}
