/**
 * AuroraPage 极光主题页（web）—— 深色底 + 流动极光光斑 + 玻璃内容。
 */
const blobs = [
  {
    c: 'rgba(52,211,153,0.55)',
    s: 460,
    x: '-6%',
    y: '-20%',
    a: 'kit-aurora 18s ease-in-out infinite',
  },
  {
    c: 'rgba(167,139,250,0.55)',
    s: 520,
    x: '38%',
    y: '-30%',
    a: 'kit-aurora 22s ease-in-out infinite reverse',
  },
  {
    c: 'rgba(56,189,248,0.50)',
    s: 420,
    x: '60%',
    y: '10%',
    a: 'kit-aurora 20s ease-in-out infinite',
  },
  {
    c: 'rgba(244,114,182,0.40)',
    s: 380,
    x: '18%',
    y: '30%',
    a: 'kit-aurora 24s ease-in-out infinite reverse',
  },
]

export function AuroraPage() {
  return (
    <div
      className="relative overflow-hidden p-8"
      style={{ background: '#04121f', borderRadius: 20, minHeight: 460 }}
    >
      {/* 极光光斑 */}
      {blobs.map((b, i) => (
        <div
          key={i}
          className="pointer-events-none absolute rounded-full blur-3xl"
          style={{
            width: b.s,
            height: b.s,
            left: b.x,
            top: b.y,
            background: b.c,
            animation: b.a,
          }}
        />
      ))}

      {/* 玻璃内容 */}
      <div className="relative z-10">
        <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-bodySm text-emerald-200 backdrop-blur">
          Aurora Theme
        </span>
        <h3 className="mt-4 text-3xl font-bold text-white">极光下的静谧界面</h3>
        <p className="mt-2 max-w-lg text-bodyMd text-slate-200/85">
          流动的极光在深色天幕中缓缓舒展，玻璃卡片悬浮其上，营造宁静而高级的氛围。
        </p>

        <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { t: '通透', d: '玻璃拟态 + 模糊' },
            { t: '流动', d: '极光缓慢漂移' },
            { t: '沉浸', d: '深色高对比' },
          ].map((c) => (
            <div
              key={c.t}
              className="rounded-xl border border-white/15 bg-white/10 p-5 backdrop-blur-md"
            >
              <p className="text-bodyMd font-semibold text-white">{c.t}</p>
              <p className="mt-1 text-bodySm text-slate-200/80">{c.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-7 flex gap-3">
          <button className="rounded-lg bg-white px-5 py-2.5 text-bodyMd font-semibold text-slate-900">
            立即体验
          </button>
          <button className="rounded-lg border border-white/25 bg-white/10 px-5 py-2.5 text-bodyMd text-white backdrop-blur">
            查看文档
          </button>
        </div>
      </div>
    </div>
  )
}
