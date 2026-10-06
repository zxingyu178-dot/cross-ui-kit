/**
 * Card3DPage 3D 悬浮卡片页（web）—— 鼠标跟随倾斜 + 光泽 + 浮起。
 */
import { useRef, useState } from 'react'
import { Card, Tag, Button } from '@kit/ui-web'

interface Tilt {
  rx: number
  ry: number
  gx: number
  gy: number
}

function TiltCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [t, setT] = useState<Tilt>({ rx: 0, ry: 0, gx: 50, gy: 50 })
  const [hover, setHover] = useState(false)

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    setT({ ry: (px - 0.5) * 18, rx: (0.5 - py) * 18, gx: px * 100, gy: py * 100 })
  }

  const reset = () => {
    setHover(false)
    setT({ rx: 0, ry: 0, gx: 50, gy: 50 })
  }

  return (
    <div
      ref={ref}
      className={`relative [perspective:1000px] ${className}`}
      onMouseMove={onMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={reset}
    >
      <div
        className="h-full transition-transform duration-150 [transform-style:preserve-3d]"
        style={{ transform: `rotateX(${t.rx}deg) rotateY(${t.ry}deg) scale(${hover ? 1.03 : 1})` }}
      >
        {children}
        {hover && (
          <div
            className="pointer-events-none absolute inset-0 rounded-lg"
            style={{
              background: `radial-gradient(circle at ${t.gx}% ${t.gy}%, rgba(255,255,255,0.35), transparent 55%)`,
            }}
          />
        )}
      </div>
    </div>
  )
}

export function Card3DPage() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <TiltCard>
        <Card className="h-full p-6 text-center">
          <span className="text-5xl">🚀</span>
          <h3 className="mt-3 text-titleSm font-medium text-text-primary">极速启动</h3>
          <p className="mt-1 text-bodySm text-text-secondary">
            开箱即用的模板与组件，几分钟搭建完整页面。
          </p>
          <Tag variant="primary" tone="soft" className="mt-3">
            高性能
          </Tag>
        </Card>
      </TiltCard>

      <TiltCard>
        <Card className="h-full bg-gradient-to-br from-primary-default to-indigo-700 p-6 text-center text-white">
          <span className="text-5xl">🎨</span>
          <h3 className="mt-3 text-titleSm font-medium">设计语言</h3>
          <p className="mt-1 text-bodySm text-white/80">统一 token 与材质规范，跨端视觉一致。</p>
          <Button variant="secondary" size="sm" className="mt-3">
            了解更多
          </Button>
        </Card>
      </TiltCard>

      <TiltCard>
        <Card className="h-full p-6 text-center">
          <span className="text-5xl">🧩</span>
          <h3 className="mt-3 text-titleSm font-medium text-text-primary">组合扩展</h3>
          <p className="mt-1 text-bodySm text-text-secondary">
            通过 children 与 slot 灵活组合，不膨胀 props。
          </p>
          <Tag variant="success" tone="soft" className="mt-3">
            易扩展
          </Tag>
        </Card>
      </TiltCard>
    </div>
  )
}
