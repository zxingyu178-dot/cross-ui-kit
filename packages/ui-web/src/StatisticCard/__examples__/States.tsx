import { StatisticCard } from '../index'

export function States() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">基础统计卡片</span>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <StatisticCard
            title="总销售额"
            value="126,560"
            prefix="¥"
            trend="up"
            trendValue="12.5%"
          />
          <StatisticCard title="访问量" value="8,846" trend="up" trendValue="8.2%" />
          <StatisticCard title="支付笔数" value="6,560" trend="down" trendValue="3.1%" />
          <StatisticCard title="运营活动效果" value="78%" trend="none" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">带后缀与自定义颜色</span>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          <StatisticCard title="日均访问" value="1,234" suffix="次/日" />
          <StatisticCard title="转化率" value="23.5%" valueColor="#2563eb" />
          <StatisticCard
            title="退款率"
            value="1.2%"
            valueColor="#dc2626"
            trend="down"
            trendValue="0.3%"
          />
        </div>
      </div>
    </div>
  )
}
