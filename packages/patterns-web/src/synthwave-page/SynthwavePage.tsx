/**
 * SynthwavePage 赛博朋克/合成器浪潮复古主题页（web）—— 霓虹、落日、透视网格、扫描线。
 */
export function SynthwavePage() {
  return (
    <div
      className="relative overflow-hidden p-8"
      style={{
        background: 'linear-gradient(180deg,#1a0633 0%,#2b0a4d 45%,#3b0d5e 100)',
        borderRadius: 16,
      }}
    >
      {/* 落日 */}
      <div
        className="pointer-events-none absolute left-1/2 top-10 h-40 w-40 -translate-x-1/2 rounded-full"
        style={{
          background: 'linear-gradient(180deg,#fde047 0%,#fb7185 55%,#c026d3 100%)',
          boxShadow: '0 0 80px rgba(251,113,133,0.7)',
          // 横向条纹遮罩
          maskImage: 'repeating-linear-gradient(180deg,#000 0 14px,transparent 14px 18px)',
          WebkitMaskImage: 'repeating-linear-gradient(180deg,#000 0 14px,transparent 14px 18px)',
        }}
      />

      <div className="relative z-10 pt-40 text-center">
        <h3
          className="text-4xl font-black tracking-widest"
          style={{
            color: '#f0abfc',
            textShadow: '0 0 8px #e879f9,0 0 24px #d946ef,2px 2px 0 #22d3ee',
          }}
        >
          SYNTHWAVE
        </h3>
        <p
          className="mt-2 text-bodyMd"
          style={{ color: '#67e8f9', textShadow: '0 0 10px #22d3ee' }}
        >
          回到 80 年代的霓虹未来
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <button
            className="border-2 px-6 py-2 text-bodyMd font-bold"
            style={{
              borderColor: '#22d3ee',
              color: '#a5f3fc',
              boxShadow: '0 0 14px rgba(34,211,238,0.7), inset 0 0 10px rgba(34,211,238,0.3)',
            }}
          >
            开始游戏
          </button>
          <button
            className="border-2 px-6 py-2 text-bodyMd font-bold"
            style={{
              borderColor: '#f472b6',
              color: '#fbcfe8',
              boxShadow: '0 0 14px rgba(244,114,182,0.7), inset 0 0 10px rgba(244,114,182,0.3)',
            }}
          >
            进入街机厅
          </button>
        </div>
      </div>

      {/* 透视网格地平线 */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-44"
        style={{
          backgroundImage:
            'linear-gradient(#22d3ee 1px,transparent 1px),linear-gradient(90deg,#22d3ee 1px,transparent 1px)',
          backgroundSize: '40px 40px',
          transform: 'perspective(280px) rotateX(62deg)',
          transformOrigin: 'bottom',
          maskImage: 'linear-gradient(180deg,transparent,#000 40%)',
          WebkitMaskImage: 'linear-gradient(180deg,transparent,#000 40%)',
          opacity: 0.8,
        }}
      />
      {/* 扫描线 */}
      <div
        className="pointer-events-none absolute inset-x-0 h-8"
        style={{
          background: 'linear-gradient(180deg,transparent,rgba(34,211,238,0.18),transparent)',
          animation: 'kit-scan 5s linear infinite',
        }}
      />
    </div>
  )
}
