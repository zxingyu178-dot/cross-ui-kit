import { Statistic } from '../index'

export function States() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-8">
        <Statistic title="活跃用户" value={12345} suffix="人" />
        <Statistic title="转化率" value={3.14159} precision={2} suffix="%" />
        <Statistic title="营收" value={9876543.21} prefix="¥" precision={2} />
        <Statistic title="订单数" value="1,234" />
      </div>
      <div className="flex flex-wrap gap-8">
        <Statistic title="加载中" value={0} loading />
        <Statistic title="负数" value={-1234.56} precision={2} prefix="±" />
        <Statistic title="超大数" value={9999999999} suffix="次" />
      </div>
    </div>
  )
}
