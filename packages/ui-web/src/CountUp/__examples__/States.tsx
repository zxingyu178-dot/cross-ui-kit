import { CountUp } from '../index'

export function States() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">基础数字滚动</span>
        <div className="flex items-center gap-8">
          <div className="flex flex-col items-center gap-1">
            <CountUp value={12345} className="text-3xl" />
            <span className="text-caption text-text-tertiary">整数</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <CountUp value={99.99} decimals={2} className="text-3xl" />
            <span className="text-caption text-text-tertiary">小数</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <CountUp value={1000000} className="text-3xl" />
            <span className="text-caption text-text-tertiary">千分位</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">带前缀后缀</span>
        <div className="flex items-center gap-8">
          <div className="flex flex-col items-center gap-1">
            <CountUp value={126560} prefix="¥" className="text-2xl text-primary-default" />
            <span className="text-caption text-text-tertiary">金额</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <CountUp value={8846} suffix=" 次" className="text-2xl" />
            <span className="text-caption text-text-tertiary">访问量</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <CountUp
              value={23.5}
              suffix="%"
              decimals={1}
              className="text-2xl text-success-default"
            />
            <span className="text-caption text-text-tertiary">增长率</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">不同动画时长</span>
        <div className="flex items-center gap-8">
          <div className="flex flex-col items-center gap-1">
            <CountUp value={5000} duration={500} className="text-xl" />
            <span className="text-caption text-text-tertiary">500ms</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <CountUp value={5000} duration={1500} className="text-xl" />
            <span className="text-caption text-text-tertiary">1500ms</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <CountUp value={5000} duration={3000} className="text-xl" />
            <span className="text-caption text-text-tertiary">3000ms</span>
          </div>
        </div>
      </div>
    </div>
  )
}
