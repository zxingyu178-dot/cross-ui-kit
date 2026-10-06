/**
 * HighlightGuidePage 功能引导页（web）—— 蒙层遮罩 + 高亮聚焦 + 步骤说明。
 */
import { useState } from 'react'
import { Button, Card } from '@kit/ui-web'

const steps = [
  {
    title: '欢迎使用工作台',
    desc: '这里集中展示你的项目、任务和关键数据，帮助你快速了解工作进展。',
    placement: '顶部导航',
  },
  {
    title: '创建你的第一个项目',
    desc: '点击右上角「新建项目」按钮，填写项目名称和描述即可开始。',
    placement: '新建按钮',
  },
  {
    title: '查看数据统计',
    desc: '在数据看板中可以实时跟踪项目进度、访问量和转化率等核心指标。',
    placement: '侧边菜单',
  },
  {
    title: '引导完成',
    desc: '现在你已经了解了基本功能，开始高效工作吧！随时可以在帮助中心查看更多。',
    placement: '完成',
  },
]

export function HighlightGuidePage() {
  const [step, setStep] = useState(0)
  const [show, setShow] = useState(true)
  const current = steps[step]!
  const isLast = step === steps.length - 1

  const close = () => setShow(false)
  const next = () => (isLast ? close() : setStep((s) => s + 1))

  return (
    <div className="relative mx-auto max-w-2xl">
      {/* 模拟应用界面 */}
      <Card>
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-titleSm font-medium text-text-primary">示例应用</h3>
          <Button variant="primary" size="sm">
            + 新建项目
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {['项目', '任务', '数据'].map((c) => (
            <div
              key={c}
              className="rounded-lg bg-bg-secondary p-4 text-center text-bodySm text-text-secondary"
            >
              {c}
            </div>
          ))}
        </div>
      </Card>

      {/* 引导蒙层 */}
      {show && (
        <>
          <div className="absolute inset-0 rounded-lg bg-black/60" />
          {/* 高亮框（模拟聚焦位置） */}
          <div
            className="absolute rounded-lg border-2 border-primary-default"
            style={{
              top: step === 1 ? 8 : step === 2 ? 80 : 8,
              left: step === 1 ? 280 : step === 2 ? 8 : 8,
              width: step === 1 ? 120 : step === 2 ? 100 : 200,
              height: step === 1 ? 36 : step === 2 ? 60 : 40,
              boxShadow: '0 0 0 4px rgba(37,99,235,0.3)',
            }}
          />
          {/* 说明气泡 */}
          <div className="absolute left-1/2 top-1/2 w-72 -translate-x-1/2 rounded-xl bg-white p-5 shadow-xl">
            <div className="mb-2 flex items-center justify-between">
              <Tag>
                {step + 1} / {steps.length}
              </Tag>
              <button onClick={close} className="text-bodySm text-text-tertiary">
                跳过
              </button>
            </div>
            <h4 className="text-bodyMd font-semibold text-text-primary">{current.title}</h4>
            <p className="mt-1 text-bodySm text-text-secondary">{current.desc}</p>
            <p className="mt-2 text-bodySm text-primary-default">聚焦：{current.placement}</p>
            <div className="mt-4 flex justify-end gap-2">
              {step > 0 && (
                <Button variant="ghost" size="sm" onClick={() => setStep((s) => s - 1)}>
                  上一步
                </Button>
              )}
              <Button variant="primary" size="sm" onClick={next}>
                {isLast ? '完成' : '下一步'}
              </Button>
            </div>
          </div>
        </>
      )}

      {!show && (
        <div className="mt-4 text-center">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => {
              setStep(0)
              setShow(true)
            }}
          >
            重新播放引导
          </Button>
        </div>
      )}
    </div>
  )
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-bg-secondary px-2 py-0.5 text-bodySm text-text-secondary">
      {children}
    </span>
  )
}
