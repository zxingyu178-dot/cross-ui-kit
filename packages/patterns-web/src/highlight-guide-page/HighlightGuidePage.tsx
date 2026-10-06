/**
 * HighlightGuidePage 功能引导页（web）—— 蒙层遮罩 + 高亮聚焦 + 步骤说明。
 * 容器固定高度，引导层（遮罩/高亮框/气泡）全部限制在容器内，气泡用 flex 居中，避免溢出到后续区块。
 */
import { useState } from 'react'
import { Button, Card } from '@kit/ui-web'

const steps = [
  {
    title: '欢迎使用工作台',
    desc: '这里集中展示你的项目、任务和关键数据，帮助你快速了解工作进展。',
    placement: '顶部导航',
    focus: { top: 18, left: 18, width: 210, height: 38 },
  },
  {
    title: '创建你的第一个项目',
    desc: '点击右上角「新建项目」按钮，填写项目名称和描述即可开始。',
    placement: '新建按钮',
    focus: { top: 18, left: 520, width: 118, height: 38 },
  },
  {
    title: '查看数据统计',
    desc: '在数据看板中可以实时跟踪项目进度、访问量和转化率等核心指标。',
    placement: '内容区',
    focus: { top: 96, left: 18, width: 190, height: 84 },
  },
  {
    title: '引导完成',
    desc: '现在你已经了解了基本功能，开始高效工作吧！随时可以在帮助中心查看更多。',
    placement: '完成',
    focus: { top: 18, left: 18, width: 620, height: 162 },
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
    <div className="relative mx-auto h-[440px] w-full max-w-2xl">
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

      {show ? (
        <div className="absolute inset-0 z-30">
          {/* 遮罩 */}
          <div className="absolute inset-0 rounded-lg bg-black/60" />
          {/* 高亮聚焦框（用镂空遮罩视觉：边框 + ring） */}
          <div
            className="absolute rounded-lg border-2 border-primary-default ring-4 ring-primary-default/30"
            style={current.focus}
          />
          {/* 说明气泡：flex 居中，限制在容器内 */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="w-80 rounded-xl bg-bg-card p-5 shadow-popover">
              <div className="mb-2 flex items-center justify-between">
                <span className="rounded-full bg-bg-secondary px-2 py-0.5 text-bodySm text-text-secondary">
                  {step + 1} / {steps.length}
                </span>
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
          </div>
        </div>
      ) : (
        <div className="absolute inset-x-0 bottom-0 flex justify-center">
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
